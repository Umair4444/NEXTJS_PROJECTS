# context/UserContext.ts

    import { createContext, useState } from "react";
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

# context/UserContextProvider

    "use client";
    import { useState } from "react";
    import UserContext from "./UserContext";

    interface User {
    userName: string;
    password: string;
    }

    export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
    }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
    };

# wrap your layout with provider

# components/Login.tsx

    import UserContext from "@/context/UserContext";
    import React, { FormEvent, useContext, useState } from "react";

    const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // ✅ Use context properly here
    const { user, setUser } = useContext(UserContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setUser({ userName, password }); // ✅ This only works if context is set up correctly
        console.log(userName, password);
    };

    return (
        <div>
        <div className="w-screen h-52 bg-red-300 text-center border-4">
            <h1>Login Form</h1>
            <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            />
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            username is {userName} and password is {password}
        </div>
        <div>
            <p>From Context: username is {user?.userName} and password is {user?.password}</p>
        </div>
        </div>
    );
    };

    export default Login;
