class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to pages_loggedin_path
    else
      flash[:alert] = user.errors.full_messages.to_sentence
      render "new"
    end
  end

  def create_facebook
    user = User.from_omniauth(request.env['omniauth.auth'])
    session[:user_id] = user.id
    redirect_to pages_loggedin_path
  end

  def destroy_facebook
    session[:user_id] = nil
    redirect_to login_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end

end
