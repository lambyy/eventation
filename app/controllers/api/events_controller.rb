class Api::EventsController < ApplicationController
  before_action :require_signin, only: [:create, :update, :destroy]
  before_action :require_owner, only: [:update, :destroy]

  def index
    @events = Event.all
    render '/api/events/index'
  end

  def show
    @event = Event.find_by(id: params[:id])
    if @event
      render '/api/events/show'
    else
      render json: ["Event does not exist"], status: 404
    end
  end

  def create
    ticket_errors = []
    ticket_params[:tickets].each do |_, ticket|
      t = Ticket.new(ticket)
      unless t.valid?
        ticket_errors += t.errors.full_messages
      end
    end

    if ticket_errors == []
      @event = Event.new(event_params)
      @event.organizer_id = current_user.id
      if @event.save
        ticket_params[:tickets].each do |_, ticket|
          ticket[:event_id] = @event.id
          Ticket.create(ticket)
        end
        render '/api/events/show'
      else
        render json: @event.errors.full_messages, status: 422
      end
    else
      render json: ticket_errors, status: 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])

    if @event
      if @event.update_attributes(event_params)
        render '/api/events/show'
      else
        render json: @event.errors.full_messages, status: 422
      end
    else
      render json: ["Event does not exist"], status: 404
    end

  end

  def destroy
    @event = Event.find_by(id: params[:id])

    if @event
      @event.destroy
      render '/api/events/show'
    else
      render json: ["Event does not exist"], status: 404
    end
  end

  private

  def event_params
    params.require(:event)
      .permit(:title, :location, :start_date, :end_date, :image_url,
              :description, :category, :event_type)
  end

  def ticket_params
    params.require(:event).permit(:tickets => [{}, :name, :quantity, :price])
  end

  def require_owner
    @event = Event.find_by(id: params[:id])
    unless @event && (@event.organizer_id == current_user.id)
      render json: ["You are not the event organizer"], status: 422
    end
  end

end
