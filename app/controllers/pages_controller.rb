class PagesController < ApplicationController
  before_action :require_user

  def index
  end

  def loggedin
    @top_scores = Score.order("wpm DESC").limit(10)
  end
end
