class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(event_id: params[:event_id])
    @bookmark.user_id = current_user.id

    if @bookmark.save
      render '/api/bookmarks/show'
    else
      render json: ["Bookmark already exists"], status: 422
    end
  end

  def destroy
    @bookmark = Bookmark.find_by_event_and_user(
      params[:event_id],
      current_user.id
    )

    if @bookmark
      @bookmark.destroy
      render '/api/bookmarks/show'
    else
      render json: ["No such bookmark"], status: 404
    end

  end

end
