import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
  !isAuthenticated && (
    <button className="btn btn-success" onClick={() => loginWithRedirect()}>Log In</button>
  )
  );
};

export default LoginButton;