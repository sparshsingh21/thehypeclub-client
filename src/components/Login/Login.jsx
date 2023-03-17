import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {Context} from '../../utils/context'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



const Login = () => {
  const {setUser} = useContext(Context);
  const message = () => {
    toast('Login successful')
  }
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignin = async ()=>{
    console.log({email, password});
    await axios.post('http://localhost:1337/api/auth/local', {
      
        "identifier": email,
        "password": password
      
    }).then((data)=>{
      if(data){
        console.log(data);
      setUser(data.data.jwt)
      localStorage.setItem('AUTH-TOKEN', data.data.jwt)
      localStorage.setItem('User',JSON.stringify(data.data.user))
      message();
      navigate('/');
      }
      else {
        console.log("Someting went wrong")
      }
    })
  }

  const handleGoogleSignin = () => {
    console.log("Google bhai zindabaad");
  }
  return (
    <section className=" m-auto text-gray-600 body-font">
      <ToastContainer/>
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Login to The Hype Club Store</h1>
      <p className="leading-relaxed mt-4">Login to create new orders, access your profile and order history</p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Id</label>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input type="password"  onChange={(e)=>{setPassword(e.target.value)}} id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="buttons">
      <button className="text-white bg-yellow-500 border-0 py-2 focus:outline-none hover:bg-yellow-600 rounded text-lg" style={{width: '250px'}} onClick={()=>{
        handleSignin()
      }}>Login</button>
      <button onClick={()=>handleGoogleSignin()} className="text-white bg-yellow-500 border-0 my-3 py-2 focus:outline-none rounded text-lg" style={{backgroundColor:'white', color:'black', border: '2px solid black' ,width: '250px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}> <FcGoogle/>SignIn with Google</button>
      </div>
      <p className="text-md text-gray-500 mt-3">Don't have an account yet? <Link style={{textDecoration: 'underline'}} to='/signup'>Signup</Link></p>
    </div>
  </div>
</section>
  )
}

export default Login