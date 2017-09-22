class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :loggedIn?

  def current_user
    return nil unless session[:session_token]
    @current_user || User.find_by_session_token(session[:session_token])
  end

  def signin!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def signout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def loggedIn?
    !!current_user
  end

  def require_signin
    unless loggedIn?
      render json: ["Must be logged in"], status: 422
    end
  end
end
