'use client';

import { ReactNode } from 'react';
import { useUser } from '@/app/components/contexts/UserContext';
import styles from './UserSelection.module.css';


interface UserSelectionProps {
    children: ReactNode;
}

const UserSelection = ({ children }: UserSelectionProps) => {
    const { userType, setUserType } = useUser();
    return (
        <div className={styles.container}>
          <header>
            <label className={styles.text} htmlFor="userType">Select User Type:</label>
            <select
              id="userType"
              className={styles.selection}
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option className={styles.text} value="STUDENT">Student</option>
              <option value="COACH">Coach</option>
            </select>
          </header>
          <main>{children}</main>
          <style jsx>{`
            header {
              padding: 1rem;
              background-color: #f0f0f0;
            }
          `}</style>
        </div>
      );
}

export default UserSelection;
