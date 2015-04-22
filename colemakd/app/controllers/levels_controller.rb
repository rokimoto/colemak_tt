class LevelsController < ApplicationController
  before_action :require_user

  before_action :require_admin, only: [:new, :edit]

  def index
    @categories = Category.all
  end

  def show
    @level = Level.find(params[:id])

    l_id = params[:id]

    if defined? current_user.scores.where(level_id: l_id).first.wpm
      @old_score = current_user.scores.where(level_id: l_id).first.wpm
    else
      @old_score = nil
    end

  end

  def new
    @level = Level.new
    @level.category = Category.new
  end

  def create
    @level = Level.new(level_params)
    @categories = Category.all
    if @level.save
      # if @level.category.name.empty? == false
      #   @level.category.save
      # end
      redirect_to levels_item_path(@level)
    else
      render "new"
    end
  end

  def edit
    @level = Level.find(params[:id])
  end

  def list
    @categories = Category.all
  end

  def item
    @level = Level.find(params[:format])
    @category = Category.find(@level.category_id)
  end

  def update
    @level = Level.find(params[:id])
    if @level.update_attributes(level_params)
      redirect_to levels_item_path(@level)
    else
      render "edit"
    end
  end

  private

  def level_params
    params.require(:level).permit(:name, :content, :content2, :category_id, category_attributes: [:name])
  end



end
