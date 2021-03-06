# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :first_name, :last_name, presence: true
  validates :email, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :organized_events,
    foreign_key: :organizer_id,
    class_name: :Event,
    dependent: :destroy

  has_many :registrations,
    foreign_key: :user_id,
    class_name: :Registration

  has_many :tickets,
    through: :registrations,
    source: :ticket

  has_many :registered_events,
    through: :tickets,
    source: :event

  has_many :bookmarks,
    foreign_key: :user_id,
    class_name: :Bookmark,
    dependent: :destroy

  has_many :bookmarked_events,
    through: :bookmarks,
    source: :event

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
