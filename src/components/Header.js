import LoginButton from './loginButton';
import Profile from './Profile';

const Header = () => {

    return (
        <div className='header'>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">CHAT INTERACTIVO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar2">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar2">
                        <div class='me-auto'></div>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <LoginButton />
                            </li>
                            <li class="nav-item">
                                <Profile />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

   );

};

export default Header;

{/* <div className='header'>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CHAT INTERACTIVO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar2">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar2">
      <div class='me-auto'></div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <LoginButton />
        </li>
        <li class="nav-item">

        </li>
        <li class="nav-item">
        <Profile />       
         </li>  
      </ul>

    </div>


    </div>
  </nav>
    

     
     <Profile></Profile>
     <LoginButton />
     <LogoutButton/>}
   </div> */}