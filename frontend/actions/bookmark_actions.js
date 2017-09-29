import { postBookmark, deleteBookmark } from '../util/bookmark_util';

export const RECEIVE_BOOKMARK = "RECEIVE_BOOKMARK";
export const RECEIVE_REMOVE_BOOKMARK = "RECEIVE_REMOVE_BOOKMARK";

const receiveBookmark = (bookmark) => ({
  type: RECEIVE_BOOKMARK,
  bookmark
});

const receiveRemoveBookmark = (bookmark) => ({
  type: RECEIVE_REMOVE_BOOKMARK,
  bookmark
});

export const createBookmark = (eventId) => dispatch => (
  postBookmark(eventId)
    .then(bookmark => dispatch(receiveBookmark(bookmark)))
);

export const removeBookmark = (eventId) => dispatch => (
  deleteBookmark(eventId)
    .then(bookmark => dispatch(receiveRemoveBookmark(bookmark)))
);
