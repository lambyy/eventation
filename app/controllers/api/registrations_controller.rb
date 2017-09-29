class Api::RegistrationsController < ApplicationController
  def create
    @registration = Registration.new(registration_params)
    @registration.user_id = current_user.id

    if @registration.save
      @registration.ticket.quantity -= @registration.num_tickets
      @registration.ticket.save
      render '/api/registrations/show'
    else
      render json: @registration.errors.full_messages, status: 422
    end
  end

  def destroy
    @registration = Registration.find_by(id: params[:id])

    if @registration
      @registration.destroy
      render '/api/registrations/show'
    else
      render json: ["No registrations found"], status: 404
    end
  end

  private

  def registration_params
    params.require(:registration).permit(:ticket_id, :num_tickets)
  end
end
