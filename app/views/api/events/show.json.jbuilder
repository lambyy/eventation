json.partial! 'api/events/event', event: @event

json.tickets do
  json.array! @event.tickets, partial: 'api/tickets/ticket', as: :ticket
end
