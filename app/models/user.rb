class User < ActiveRecord::Base
  has_secure_password(validations: false)

  has_many :badges, dependent: :destroy
  has_many :scores, dependent: :destroy

  validates :name, presence: true, length: { in: 2..60 }, unless: -> { from_omniauth? }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, 
                    format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }, unless: -> { from_omniauth? }
  validates :username, presence: true, length: { in: 3..25 }, 
                    uniqueness: { case_sensitive: false }, unless: -> { from_omniauth? }
  validates :password, confirmation: true, length: {in: 6..25 }, unless: -> { from_omniauth? }

  def admin?
    self.role == 'admin'
  end

  def self.from_omniauth(auth)
    where({:provider => auth['provider'], :uid => auth['uid']}).first_or_initialize.tap do |user|
      user.provider = auth['provider']
      user.uid = auth['uid']
      user.name = auth['info']['name']
      user.oauth_token = auth['credentials']['token']
      user.oauth_expires_at = Time.at(auth['credentials']['expires_at'])
      user.save!
    end
  end

  def from_omniauth?
    provider && uid
  end


end

