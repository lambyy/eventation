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
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ApplicationRecord
  validates :organizer_id, :title, :location, presence: true
  validates :start_date, :end_date, :image_url, presence: true
  validates :description, :category, presence: true
end
