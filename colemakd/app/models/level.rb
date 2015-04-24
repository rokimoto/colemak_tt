class Level < ActiveRecord::Base

  before_save :create_category

  has_many :scores, dependent: :destroy
  belongs_to :category

  accepts_nested_attributes_for :category

  # def next
  #   Level.where("id > ?", self.id).order("id ASC").first || Level.first
  # end

  def next
    Level.where("id > ?", self.id).order("id ASC").first
  end

  def prev
    Level.where("id < ?", self.id).order("id DESC").first || Level.last
  end


end
