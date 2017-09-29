# == Schema Information
#
# Table name: bookmarks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bookmark < ApplicationRecord
  validates :event_id, uniqueness: { scope: :user_id }

  belongs_to :user, foreign_key: :user_id, class_name: :User
  belongs_to :event, foreign_key: :event_id, class_name: :Event

  def self.find_by_event_and_user(event_id, user_id)
    bookmark = Bookmark
      .where(event_id: event_id)
      .where(user_id: user_id)
    bookmark.first
  end
end
