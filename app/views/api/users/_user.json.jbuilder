json.extract! user, :id, :email, :first_name, :last_name

json.registrations do
  json.array! user.registrations, partial: 'api/registrations/registration.json.jbuilder', as: :registration
end

json.bookmarked_events do
  json.array! user.bookmarked_events, :id
end

# remove comment
