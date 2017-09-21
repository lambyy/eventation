class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    render '/api/events/index'
  end

  def show
    @event = Event.find(params[:id])
    render '/api/events/show'
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      render '/api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])

    if @event.update_attributes(event_params)
      render '/api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end

  end

  def destroy
    @event = Event.find(params[:id])

    if @event
      @event.destroy
      render '/api/events/show'
    else
      render json: ["Event does not exist"], status: 404
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :location, :start_date,
      :end_date, :image_url, :description, :category, :event_type)
  end

end
