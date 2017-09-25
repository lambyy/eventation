# == Schema Information
#
# Table name: registrations
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  ticket_id   :integer          not null
#  num_tickets :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Registration < ApplicationRecord
  validates :num_tickets, presence: true

  belongs_to :user, foreign_key: :user_id, class_name: :User
  belongs_to :ticket, foreign_key: :ticket_id, class_name: :Ticket
end
