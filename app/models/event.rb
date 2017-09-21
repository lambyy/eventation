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

CATEGORIES = %w(Music Arts Food&Drink Other)

class Event < ApplicationRecord
  validates :organizer_id, :title, :location, presence: true
  validates :start_date, :end_date, :image_url, presence: true
  validates :description, :category, :event_type, presence: true
  validates_inclusion_of :category, in: CATEGORIES

  belongs_to :organizer, foreign_key: :organizer_id, class_name: :User
end

# Event.new({organizer_id: 1, title: "Cook Ramen", location: "San Francisco",
# start_date: "2017-10-03T02:00", end_date: "2017-10-03T04:00", image_url: "cats.jpg", description:
# "raaaaaaaamen", category: "Music", event_type: "Class"})