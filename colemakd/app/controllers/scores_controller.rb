class ScoresController < ApplicationController

  def create
    user = current_user

    @l_id = params[:score][:level_id]

    if defined? user.scores.where(level_id: @l_id).first.wpm

      current_high_score = user.scores.where(level_id: @l_id).first.wpm
      
      if params[:score][:wpm].to_i > current_high_score
        user.scores.where(level_id: @l_id).first.destroy
        user.scores.create(score_params)
        where_redirect
      else
        where_redirect
      end

    else
      user.scores.create(score_params)
      where_redirect
    end

  end

  private

  def where_redirect
    if params[:commit] == 'Try Again?'
        redirect_to level_path(@l_id)
    elsif params[:commit] == 'Back to Levels'
        redirect_to levels_path
    elsif params[:commit] == 'Next Level'
        redirect_to level_path(Level.find(@l_id).next)
    end
  end
  
  def score_params
    params.require(:score).permit(:wpm, :level_id)
  end

end
