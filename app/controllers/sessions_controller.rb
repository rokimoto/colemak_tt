class SessionsController < ApplicationController
  def new
  end

  def create
    flash[:info] = "Welcome back!"
    user = User.find_by_username(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to pages_loggedin_path
    else
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
