class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    flash[:success] = "Welcome to Colemak'd!"
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to pages_loggedin_path
    else
      flash[:alert] = @user.errors.full_messages.to_sentence
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
      flash[:success] = "Your profile has been updated!"
      redirect_to edit_user_path(@user)
    else
      flash[:alert] = @user.errors.full_messages.to_sentence
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
