export default function validateAppointment(data) {
  let errors = {};
  if (!data.date) {
    errors.date = "Date is required";
  } else if (new Date(data.date) < new Date()) {
    errors.date = "Date must be at least one day in the future";
  } else if (!data.time) {
    errors.time = "Time is required";
  } else if (!data.description) {
    errors.description = "Description is required";
  }
  return errors;
}
