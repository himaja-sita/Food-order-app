import './GoogleSignIn.module.css';
import { useState } from 'react';
import { GoogleLogin,googleLogout} from '@react-oauth/google';

function GoogleSignIn() {
  const [loggedIn,setLoggedIn]=useState(true);

  function handlecallbackresponse(response){
    console.log(response.credential)
setLoggedIn(true)
}
function handleerrorresponse(error){
  console.log(error)
}

 /* useEffect(()=>{
    window.onload=()=>{
    --global google
    google.accounts.initialize({
        client_id: '366614064594-vtmsi0gcb6qtr6nck3gj2u3m5i91sli5.apps.googleusercontent.com',
        callback: handlecallbackresponse
      });
    google.accounts.renderButton(
        document.getElementById('signin'),{theme:"outline",size:"large"})}
},[])*/
  return <div className='signIn'> <GoogleLogin 
  buttonText={'SignIn'} 
  onSuccess={handlecallbackresponse} 
  onError={handleerrorresponse} 
  type='icon' 
  shape='circle'
  size='large'></GoogleLogin>
  {loggedIn && <button type='button' onClick={()=>googleLogout()}>logout</button>}
  </div>
}

export default GoogleSignIn;
