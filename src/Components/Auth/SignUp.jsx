import React, { useState } from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log("User registered with success:", userCredential.user);
          })
          .catch((error) => {
            console.error("Error encountered while sign up:", error.message);
          });
      };
      
    
  return (
    <div>
      <Navbar />
        <form
          onSubmit={signUp}
          className='mt-20 flex flex-col justify-center items-center gap-12 pt-24'>
            <p className='text-2xl'>Créer un compte</p>
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
              S'inscrire
            </button>
        </form>
      <Footer />
    </div>
  )
}

export default SignUp