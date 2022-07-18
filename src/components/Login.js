import React from 'react'
import styled from 'styled-components'
import Back from './img/login-background.jpg'
import cta1 from './img/cta-logo-one.svg'
import cta2 from './img/cta-logo-two.png'
 
import { GoogleAuthProvider , signInWithPopup , getAuth  } from "firebase/auth";
 



const Login = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  function SignIn() {
  signInWithPopup(auth, provider)
    .then((result) => {

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

    }).catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
 
    });
  
  }

  
  return (
    <>
      
     <Container>

     {/* Main container */}
     <div className='flex flex-col h-login-page  justify-center  items-center  before:  '>

    <div className=' max-w-xl   items-center justify-between w-8/12 -mt-8  ' >
        <img src={cta1} />
    </div>

    <div className='   flex rounded-sm mt-3 bg-button-color font-light text-white  w-8/12 max-w-xl  p-2 hover:bg-blue-500'>
        <button className='mx-auto  uppercase   '>Get All There</button>
    </div>

    <div>
    <p className='text-white text-sm mt-5 max-w-xl opacity-80 text-center'>
    The Disney Bundle includes Disney+, ESPN+, and
     the Hulu plan that fits you best for a discounted price.
      You can save 25%, compared to the monthly cost of subscribing to all 3 services separately! Choose between The Disney Bundle with Hulu (ad-supported) for $13.99/month or with Hulu (No Ads) for $19.99/month.
    </p>

    </div>

    <div className=' max-w-3xl   items-center justify-between w-10/12  mt-4 ' >
        <img src={cta2} />
    </div>


     </div>
     </Container>

    </>
  )
}

export default Login

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative; 

&::before {
   
    background: url(' ${Back}') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

`