"use client";
import UserContext from "@/context/UserContext";
import React, { FormEvent, useContext, useState } from "react";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser({ userName, password }); // ✅ This only works if context is set up correctly
    console.log(userName, password);
  };

  return (
    <div>
      <div className="h-52 bg-red-300 text-center border-4">
        <h1>Profile Form</h1>
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
        <div>
          <p>
            from input form : username is {userName} and password is {password}
          </p>
        </div>
        <div>
          <p>
            the text is coming From Context: username is {user?.userName} and
            password is {user?.password}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
