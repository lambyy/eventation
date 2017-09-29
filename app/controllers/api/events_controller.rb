class Api::EventsController < ApplicationController
  before_action :require_signin, only: [:create, :update, :destroy]
  before_action :require_owner, only: [:update, :destroy]

  def index
    if params.include?(:tickets)
      @events = current_user.registered_events
    elsif params.include?(:organized)
      @events = Event.where(organizer_id: current_user.id)
    elsif params.include?(:bookmarks)
      @events = current_user.bookmarked_events
    else
      @events = Event.all
    end
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
    if event_params.include?(:tickets)
      ticket_errors = Ticket.check_tickets(event_params)

      if ticket_errors == []
        @event = Event.create_event_with_tickets(event_params, current_user)
        if @event.is_a?(Event)
          render '/api/events/show'
        else
          render json: @event, status: 422
        end
      else
        render json: ticket_errors, status: 422
      end
    else
      render json: ["Event must have at least ONE ticket"], status: 422
    end
  end

  def update

    @event = Event.find_by(id: params[:id])

    if @event
      ticket_errors = Ticket.check_tickets(event_params)

      if ticket_errors != []
        render json: ticket_errors, status: 422
      elsif @event.update_event_with_tickets(event_params)
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
              :description, :category, :event_type, :tickets => [{}, :id, :name, :quantity, :price])
  end

  def require_owner
    @event = Event.find_by(id: params[:id])
    if @event
      if @event.organizer_id != current_user.id
        render json: ["You are not the event organizer"], status: 422
      end
    else
      render json: ["Event does not exist"], status: 404
    end
  end

end
