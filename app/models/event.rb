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
  validates :organizer_id, :title, :location, presence: true
  validates :start_date, :end_date, :image_url, presence: true
  validates :description, :category, :event_type, presence: true
  validates_inclusion_of :category, in: CATEGORIES
  validates_inclusion_of :event_type, in: EVENT_TYPES

  belongs_to :organizer, foreign_key: :organizer_id, class_name: :User
end
