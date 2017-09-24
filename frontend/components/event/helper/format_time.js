const formatTime = (date) => {
  const dateArr = date.toUTCString().split(" ");
  const weekday = dateArr[0].slice(0, 3);
  const day = dateArr[1];
  const month = dateArr[2];
  const year = dateArr[3];
  const {hour, meridiem} = (date.getUTCHours() > 12)
    ? {hour: date.getUTCHours() - 12, meridiem: "PM"}
    : {hour: date.getUTCHours(), meridiem: "AM"};
  const minutes = (date.getUTCMinutes() < 10)
    ? `0${date.getUTCMinutes()}`
    : date.getUTCMinutes();

  const formattedTime =
    `${weekday}, ${month} ${day}, ${year}, ${hour}:${minutes} ${meridiem}`;

  return formattedTime;
};

export default formatTime;
