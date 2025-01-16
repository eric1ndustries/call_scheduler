import { createContext, useContext, useState, ReactNode } from 'react';
// Thought process was to use a simple context provider to switch between testing COACH and STUDENT
interface UserContextProps {
  userType: string;
  setUserType: (type: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<string>('COACH'); // Default value for testing

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};