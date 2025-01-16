const getTimeslots = async (date?: string, coachId?: number) => {
    try {
      const response = await fetch(`/api/timeslots?date=${date}&coach_id=${coachId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        if (response.status === 404) { // if no timeslots return empty array
            return [];
        }
        throw new Error('Failed to fetch timeslots');
      }
  
      const data = await response.json();
      return data; // Return the fetched timeslots
    } catch (error) {
      console.error('Error fetching timeslots:', error);
      throw error; // Handle this in your UI or higher-level error handling
    }
  };
  

const createTimeslots = async (timeslots: Array<{ start: string; end: string; coach_id: number }>) => {
    try {
      const response = await fetch('/api/timeslots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(timeslots),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create timeslots');
      }
  
      const data = await response.json();
      return data; // Return the created timeslots
    } catch (error) {
      console.error('Error creating timeslots:', error);
      throw error; // Handle this in your UI or higher-level error handling
    }
  };

export {
    getTimeslots,
    createTimeslots,
};
