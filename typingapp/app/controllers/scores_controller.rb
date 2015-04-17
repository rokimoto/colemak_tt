class ScoresController < ApplicationController

  def create
    user = current_user
    score = user.scores.create(score_params)
    redirect_to levels_path
  end

  private

  def score_params
    params.require(:score).permit(:wpm, :level_id)
  end

end
