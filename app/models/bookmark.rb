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

  belongs_to :user, foreign_key: :user_id, class_name: :User
  belongs_to :event, foreign_key: :event_id, class_name: :Event

end
