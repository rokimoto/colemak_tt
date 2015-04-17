class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to pages_loggedin_path
    else
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end

end
