class User < ActiveRecord::Base
  has_secure_password

  has_many :badges, dependent: :destroy
  has_many :scores, dependent: :destroy

  validates :first_name, presence: true, length: { in: 2..30 }
  validates :last_name, presence: true, length: { in: 2..30 }
  validates :email, presence: true, uniqueness: { case_sensitive: false }, 
                    format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates :username, presence: true, length: { in: 3..25 }, 
                    uniqueness: { case_sensitive: false }
  validates :password, confirmation: true, length: {in: 6..25 }

  def admin?
    self.role == 'admin'
  end


end

