class Score < ActiveRecord::Base
  belongs_to :user
  belongs_to :level

  validates :wpm, presence: true
  validates :level_id, presence: true
  validates :user_id, presence: true


  def date_added
    created_at.localtime.strftime("%-m/%-d/%Y @ %l:%M %p")
  end

  def short_date_added
    created_at.localtime.strftime("%-m/%-d/%Y")
  end

end
