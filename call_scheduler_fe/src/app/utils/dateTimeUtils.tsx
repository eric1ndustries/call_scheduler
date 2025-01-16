const parseDate = (dateString: string) => {
  const dateObject = new Date(dateString);
  return dateObject.toISOString().split('T')[0];
}

const parseDateTime = (dateTimeString: string) => {
    const start = new Date(dateTimeString); // Parse the input string into a Date object
  
    // Calculate the end time (e.g., add 2 hours to the start time)
    const end = new Date(start);
    end.setHours(start.getHours() + 2);
  
    // Format the output object
    return {
      date: start.toISOString().split('T')[0], // Extract the date in YYYY-MM-DD format
      time: start.toTimeString().split(' ')[0], // Extract the time in HH:MM:SS format
      endTime: end.toTimeString().split(' ')[0], // Extract the end time in HH:MM:SS format
      day: start.toLocaleDateString('en-US', { weekday: 'long' }), // Get the day of the week
    };
  }
  
  // Example Usage
  const dateTimeString = "2025-01-15T14:00";
  const formatted = parseDateTime(dateTimeString);
export { parseDate, parseDateTime };
