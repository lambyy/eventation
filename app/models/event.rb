# == Schema Information
#
# Table name: events
#
#  id           :integer          not null, primary key
#  organizer_id :integer          not null
#  title        :string           not null
#  location     :string           not null
#  start_date   :datetime         not null
#  end_date     :datetime         not null
#  image_url    :string           not null
#  description  :string           not null
#  category     :string           not null
#  event_type   :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

CATEGORIES = %w(Business Sports&Fitness Music Science&Tech
                Arts Food&Drink Travel&Outdoor Holiday Other)
EVENT_TYPES = %w(Class Performance Party Networking Concert
                Festival Attraction Game Gala Convention Other)

class Event < ApplicationRecord
  validates :title, :location, presence: true
  validates :start_date, :end_date, :image_url, presence: true
  validates :description, :category, :event_type, presence: true
  validates_inclusion_of :category, in: CATEGORIES
  validates_inclusion_of :event_type, in: EVENT_TYPES

  belongs_to :organizer,
    foreign_key: :organizer_id,
    class_name: :User

  has_many :tickets,
    foreign_key: :event_id,
    class_name: :Ticket,
    dependent: :destroy

  has_many :registered_users,
    through: :tickets,
    source: :registered_users

  def self.create_event_with_tickets(params, current_user)
    event_params = params.reject { |k, _| k == "tickets" }
    tickets_params = params.select { |k, _| k == "tickets" }
    event = Event.new(event_params)
    event.organizer_id = current_user.id

    if event.save
      tickets_params[:tickets].each do |_, ticket_params|
        ticket_params[:event_id] = event.id
        Ticket.create(ticket_params)
      end
      event
    else
      event.errors.full_messages
    end
  end

  def update_event_with_tickets(params)
    event_params = params.reject { |k, _| k == "tickets" }
    tickets_params = params.select { |k, _| k == "tickets" }
    tickets_params = tickets_params[:tickets]

    if self.update_attributes(event_params)
      # update or delete existing tickets
      self.tickets.each do |ticket|
        ticket_params = tickets_params.select { |_, v| v[:id] == ticket.id.to_s }
        if ticket_params.values.length > 0
          ticket.update_attributes(ticket_params.values[0])
        else
          ticket.destroy
        end
      end
      # add new tickets
      new_tickets = tickets_params.select { |_, v| v[:id] == nil }
      new_tickets.values.each do |new_ticket|
        new_ticket[:event_id] = self.id
        Ticket.create(new_ticket)
      end

      true
    else
      false
    end
  end
end
