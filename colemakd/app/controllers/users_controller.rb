class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    flash[:success] = "Welcome! Your account has been created!"
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to pages_loggedin_path
    else
      render "new"
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to @user
    else
      render "edit"
    end
  end

  def destroy
    flash[:alert] = "Account has been deleted"
    unless current_user.admin?
      session[:user_id] = nil
    end
    @user = User.find(params[:id])
    @user.destroy
    if current_user.admin?
      redirect_to pages_loggedin_path
    else
      redirect_to signup_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :username, :password, :password_confirmation)
  end
end
