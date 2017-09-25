# == Schema Information
#
# Table name: tickets
#
#  id         :integer          not null, primary key
#  event_id   :integer          not null
#  name       :string           not null
#  quantity   :integer          not null
#  price      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ticket < ApplicationRecord
  validates :name, :quantity, :price, presence: true

  belongs_to :event,
    foreign_key: :event_id,
    class_name: :Event,
    optional: true

  has_many :registrations,
    foreign_key: :ticket_id,
    class_name: :Registration,
    dependent: :destroy

  has_many :registered_users,
    through: :registrations,
    source: :user

  def self.check_tickets(params)
    ticket_errors = []
    tickets_params = params.select { |k, _| k == "tickets" }
    tickets_params[:tickets].each do |_, ticket_params|
      t = Ticket.new(ticket_params)
      unless t.valid?
        ticket_errors += t.errors.full_messages
      end
    end
    ticket_errors
  end
end
