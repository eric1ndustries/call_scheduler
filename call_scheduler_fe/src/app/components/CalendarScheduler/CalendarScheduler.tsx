'use client';

import { useState, useEffect, ReactNode } from 'react';
import { useUser } from '@/app/components/contexts/UserContext';
import OpenSlotsDisplay from './OpenSlotsDisplay';
import { getTimeslots, createTimeslots } from '@/app/actions/TimeslotActions';
// import { parseDate } from '@/app/utils/dateTimeUtils';
import styles from './CalendarScheduler.module.css';

interface TimeslotObject {
    id: number;
    start: string;
    end: string;
}

const CalendarScheduler = () => {
    const { userType } = useUser();
    const [dateTime, setDateTime] = useState('');
    const [timeslot, setTimeslot] = useState<TimeslotObject | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (dateTime) {
       getTimeslots(dateTime);
      }
    }, [dateTime])

    // Handle change for datetime input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDateTime(event.target.value);
    };
  
    // Handle form submission to create a new timeslot
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!dateTime) {
        setError('Please select a date and time.');
        return;
      }
  
      setLoading(true);
      //  createTimeslots();
    };
  
    return (
      <div>
        <h2>Choose a Timeslot</h2>
        
        {/* Date and Time Picker */}
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={dateTime}
            onChange={handleChange}
            required
          />
          {
            userType === 'COACH' && <button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Timeslot'}
          </button>
          }
        </form>

        <OpenSlotsDisplay />
        
        {/* Display Error */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
  
        {/* Display Created Timeslot Information */}
        {timeslot && (
          <div>
            <h3>Timeslot Created!</h3>
            <p>Start: {timeslot.start}</p>
            <p>End: {timeslot.end}</p>
          </div>
        )}
      </div>
    );
  };
  

export default CalendarScheduler;