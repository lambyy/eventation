json.extract! @registration, :id, :ticket_id, :num_tickets, :user_id
json.event_id @registration.ticket, :event_id
