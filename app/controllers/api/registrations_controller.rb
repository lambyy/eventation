class Api::RegistrationsController < ApplicationController
  def create
    @registration = Registration.new(registration_params)
    @registration.user_id = current_user.id

    if @registration.save
      render json: ["Successfully registered"], status: 200
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def destroy
    @registration = Registration.find_by(id: params[:id])

    if @registration
      @registration.destroy
    else
      render json: ["No registrations found"], status: 404
    end
  end

  private

  def registration_params
    params.require(:registration).permit(:ticket_id, :num_tickets)
  end
end
