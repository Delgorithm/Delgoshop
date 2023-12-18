import React, { useState } from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthDetails from './AuthDetails';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        }).catch((error) => {
          console.log(error);
      })
    }

  return (
    <div>
      <Navbar />
        <form
          onSubmit={signIn}
          className='mt-20 flex flex-col justify-center items-center gap-12 pt-24'>
            <p className='text-2xl'>Se connecter</p>
            <input 
              type="email" 
              placeholder='Entrer votre email...'  
              value={email} 
              className='px-10 py-1 border-2 border-slate-500'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder='Entrer votre mot de passe...' 
              value={password} 
              className='px-10 py-1 border-2 border-slate-500'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button 
              type='submit'
              className='p-4 bg-black text-white active:opacity-70 '
            >
              Se connecter
            </button>
            <AuthDetails />
        </form>
      <Footer />
    </div>
  )
}

export default SignIn