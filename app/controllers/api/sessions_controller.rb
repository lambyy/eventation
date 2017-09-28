class Api::SessionsController < ApplicationController
  def create
    @user = User
      .includes(:registrations, :tickets, :organized_events)
      .find_by_credentials(
        params[:user][:email], params[:user][:password]
      )

    if @user
      signin!(@user)
      render 'api/sessions/show'
    else
      render json: ["Invalid email or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      signout!
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
