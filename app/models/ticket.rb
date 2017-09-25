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

  belongs_to :event, foreign_key: :event_id, class_name: :Event
  has_many :registrations, foreign_key: :ticket_id, class_name: :Registration
  has_many :registered_users, through: :registrations, source: :user
end
