import {
  getEvents,
  getEvent,
  postEvent,
  patchEvent,
  deleteEvent
} from '../util/event_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_REMOVE_EVENT = "RECEIVE_REMOVE_EVENT";

const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

const receiveRemoveEvent = (event) => ({
  type: RECEIVE_REMOVE_EVENT,
  event
});

export const requestAllEvents = () => dispatch => (
  getEvents()
    .then(events => dispatch(receiveAllEvents(events)))
);

export const requestEvent = (id) => dispatch => (
  getEvent(id)
    .then(event => dispatch(receiveEvent(event)))
);

export const createEvent = (formEvent) => dispatch => (
  postEvent(formEvent)
    .then(event => dispatch(receiveEvent(event)))
);

export const updateEvent = (formEvent) => dispatch => (
  patchEvent(formEvent)
    .then(event => dispatch(receiveEvent(event)))
);

export const removeEvent = (id) => dispatch => (
  deleteEvent(id)
    .then(event => dispatch(receiveRemoveEvent(event)))
);
