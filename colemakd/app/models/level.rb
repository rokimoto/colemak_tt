class Level < ActiveRecord::Base

  before_save :create_category

  has_many :scores, dependent: :destroy
  belongs_to :category

  accepts_nested_attributes_for :category

  def create_category
    
  end


end
