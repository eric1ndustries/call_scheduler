'use client'

import { UserProvider } from '@/app/components/contexts/UserContext';
import UserSelection from '@/app/components/UserSelection/UserSelection'
import CalendarScheduler from './components/CalendarScheduler/CalendarScheduler';
import CallDetails from './components/CallDetails/CallDetails';

function Home() {
  return (
    <UserProvider>
      <div>
        <UserSelection children={undefined} />
      </div>
      <div>
        <CalendarScheduler />
      </div>
      {
        <div>
          <CallDetails />
        </div>
      }
    </UserProvider>
  );
}

export default Home;
