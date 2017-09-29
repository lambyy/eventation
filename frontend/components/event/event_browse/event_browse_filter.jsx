import React from 'react';

const _categoryList = "Business Sports&Fitness Music Science&Tech Arts Food&Drink Travel&Outdoor Holiday Other";
const _eventTypeList = "Class Performance Party Networking Concert Festival Attraction Game Gala Convention Other";
const _categories = _categoryList.split(" ");
const _eventTypes = _eventTypeList.split(" ");


const EventBrowseFilter = ({ state, updateQuery }) => {
  const categoryFilter = _categories.map( (category, idx) => (
    <li key={`category-${idx}`}
        className={(state.category === category) ? "query" : ""}
        onClick={updateQuery("category")}>{category}</li>
  ));

  const eventTypeFilter = _eventTypes.map( (eventType, idx) => (
    <li key={`event-type-${idx}`}
        className={(state.event_type === eventType) ? "query" : ""}
        onClick={updateQuery("event_type")}>{eventType}</li>
  ));

  return (
    <div className="filters">
      <div className="category-filters">
        <h2>CATEGORY</h2>
        <ul>
          {categoryFilter}
        </ul>
      </div>
      <div className="event-type-filters">
        <h2>EVENT TYPE</h2>
        <ul>
          {eventTypeFilter}
        </ul>
      </div>
    </div>
  );
};

export default EventBrowseFilter;
