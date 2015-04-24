class Level < ActiveRecord::Base


  has_many :scores, dependent: :destroy
  belongs_to :category

  validates :content, presence: true, length: { in: 30.. 80 }
  validates :name, presence: true, uniqueness: true


  accepts_nested_attributes_for :category



  def next
    Level.where("id > ?", self.id).order("id ASC").first
  end

  def prev
    Level.where("id < ?", self.id).order("id DESC").first
  end


end
