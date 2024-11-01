
/*
import { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store'
import {loginRequest} from '../BD/auth';


import './css/Login.css'


export const LoginPage = () => {

    const authStatus = useAuthStore( state => state.status);
    const user = useAuthStore( state => state.user);
    const token = useAuthStore( state => state.token);

    const login = useAuthStore( state => state.login);
    const logout = useAuthStore( state => state.logout);

    useEffect(() => {
      
      setTimeout(()=> {
        logout()
      }, 1500);
    }, [])
    

    if (authStatus === 'checking') {
      return <h3>Loading....</h3>
    }

    /// faztcode

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const email = (e.currentTarget.elements[0] as HTMLInputElement).value
      const password = (e.currentTarget.elements[1] as HTMLInputElement).value

      const resLogin = await loginRequest(email, password);
       

      console.log(resLogin);
       
    }

  return (
    <>
   
     ////faztcode
     <form onSubmit={handleSubmit}>

      <input type='email' placeholder='email@mail.com' value={'soportepci.1990@gmail.com'}></input>
      <input type='password' placeholder='****'></input>
      <button>Login</button>

     </form>





     //////////
     Fernando


     <div className='LoginBody'>
    <h3 style={{backgroundColor: 'black'}}>Login Page</h3>
    {
    (authStatus === 'authenticated')
    ? <div>Authenticated como: {JSON.stringify(user, null, 2)}</div>
    : <div>No authenticated</div>
    }

    {
      (authStatus === 'authenticated')
      ?(
        <button onClick={logout}>Log Out</button>
      )
      : (
        <button onClick={() => login('11','') }>
          Login
        </button>
      )
    }
    </div>




  
    </>

  )
}




/*

    <div className='LoginBody'>
    <h3 style={{backgroundColor: 'black'}}>Login Page</h3>
    {
    (authStatus === 'authenticated')
    ? <div>Authenticated como: {JSON.stringify(user, null, 2)}</div>
    : <div>No authenticated</div>
    }

    {
      (authStatus === 'authenticated')
      ?(
        <button onClick={logout}>Log Out</button>
      )
      : (
        <button onClick={() => login('fernando', '123') }>
          Login
        </button>
      )
    }
    </div>
*/