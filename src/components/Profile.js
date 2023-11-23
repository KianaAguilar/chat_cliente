import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      // <div>
      //   <img src={user.picture} alt={user.name} />
      //   <h2>{user.name}</h2>
      //   <p>{user.email}</p>
      //   <LogoutButton />

      // </div>
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item ms-2" style={{paddingTop: '8px'}}>
            <div style={{color:'white'}}>{user.name}</div>
          </li>
          <li class="nav-item ms-2" style={{paddingTop: '8px'}}>
            <div style={{color:'white'}}>{user.email}</div>
          </li>
          <li class="nav-item ms-2">
            <img src={user.picture} alt={user.name} height={40}/>
          </li>
          <li class="nav-item ms-2">
            <LogoutButton />
          </li>
        </ul>
      </div>

    )
  );
};

export default Profile;