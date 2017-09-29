# Eventation

[Live](https://eventation.herokuapp.com/)

Eventation is a single-page Eventbrite clone built using Ruby on Rails, React/Redux and Postgresql. The web application allows users to browse through various events. Upon sign in, users can also create and delete their own events, bookmark interesting events, and register tickets for events.

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/dashboard.png)

## Features

### Events

Users can create custom events with their desired event image, location, date and time. Using a single form, users are able to create new events and with multiple tickets simultaneously. The same form is prepopulated when users want to update a pre-existing event. 

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/event_form.png)


One of the biggest hurdles when implementing the event form was the creation of an event in conjunction with tickets as these are two separate tables in the Rails backend. I was able to implement this by creating Ticket components on the frontend to store individual ticket information in an array in the local state of the Event Form component. When an event is created, all the event and ticket information is sent to the backend as one package. I created a method for Events to first check if all the information sent will create valid Event and Ticket models. If valid, the method will create the Event and all its associated Tickets. I also wrote a similar method to update an exisiting Event and create or destroy its associated Tickets to reflect the data sent by the Event Form.

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/event_show.png)

### Tickets/Registrations

On the Event Show page of each Event, users are able to register for Tickets. Once registered, users can see their registered events and tickets on their profile page. They also have the option to return tickets from their profile page.

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/registration.png)

### Event Categories

Events can be filtered by their categories and event types when browsing, allowing users to easily find events they are interested in.

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/event_browse.png)

### Bookmarks

Users can bookmark and unbookmark events while browsing and on the event show page. Their bookmarks can be viewed in their profile page.

![](https://github.com/lambyy/eventation/blob/master/app/assets/images/bookmarks.png)
