import {
  getEvents,
  getEvent,
  postEvent,
  patchEvent,
  deleteEvent
} from '../util/event_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";

const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

const removeEvent = (event) => ({
  type: REMOVE_EVENT,
  event
});
