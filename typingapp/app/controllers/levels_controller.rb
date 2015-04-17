class LevelsController < ApplicationController
  before_action :require_user
  def index
    @levels = Level.all
  end

  def show
    @level = Level.find(params[:id])
  end

end
