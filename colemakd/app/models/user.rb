class User < ActiveRecord::Base
  has_secure_password

  has_many :badges, dependent: :destroy
  has_many :scores, dependent: :destroy

  def admin?
    self.role == 'admin'
  end


end

