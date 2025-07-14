import { createContext } from "react";
interface User {
  userName: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// const UserContext = createContext({});
const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
