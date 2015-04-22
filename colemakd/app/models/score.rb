class Score < ActiveRecord::Base
  belongs_to :user
  belongs_to :level


  def date_added
    created_at.localtime.strftime("%-m/%-d/%Y | %l:%M %p")
  end

end
