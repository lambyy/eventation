json.extract! user, :id, :email, :first_name, :last_name

json.registrations do
  json.array! user.registrations, partial: 'api/registrations/registration.json.jbuilder', as: :registration
end

# json.organized_events do
#   json.array! user.organized_events, :id
# end
