json.partial! 'api/users/user', user: @user

json.registrations do
  json.array! @user.registrations, partial: 'api/registrations/registration', as: :registration
end
