import React from "react";
import { useUserContext } from "../context/UserContext";
// import DashBoard from "./DashBoard";

const Auth = () => {
  const { user } = useUserContext();
  return <>{user.isGuestUser ? "" : ""}</>;
};

export default Auth;