function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Bogota",
  };
  return new Date(dateString).toLocaleDateString("es-CO", options);
}

function formatTime(timeString) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Bogota",
  };
  return new Date(`1970-01-01T${timeString}`).toLocaleTimeString(
    "es-CO",
    options
  );
}

export { formatDate, formatTime };
