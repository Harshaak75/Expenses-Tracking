import React, { useEffect, useState } from 'react'
import { Form, Formik } from "formik"
import CustomInput from '../Components/Custom Components/CustomInput'
import axios from 'axios'
import { loginValidate } from '../../Validation/SignupValidation'
import { Navigate, useNavigate } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import { useDispatch } from 'react-redux'

import { userLoggedIn } from '../Schema/Slice'

const Login = () => {

  const [authentication, setauthentication] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();


  // checkin gweather user is alreay logged

  useEffect(() => {

    const checkUserAuth = async () => {
      try {
        await axios.get("http://localhost:8080/api/user/checkAuth", {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }).then(async (response) => {

          console.log(response)
          if (response.data.status == 200) {
            // setauthentication(true);
            dispatch(userLoggedIn())

            await new Promise((resolve) =>{
              setTimeout(resolve, 1000);
            })

            navigate("/dashboard");
          }
          else {
            setauthentication(false);
          }
        })
      } catch (error) {
        console.log("An error occurred in checkAuth", error);
      }
    }

    checkUserAuth();

  }, [navigate])



// if used is not logged then redirect to login page
  const login = async (values, action) => {


    try {
      // const review = await axios.post("http://localhost:8080/login", values)

      const response = await axios.post("http://localhost:8080/api/user/loginUser", {
        email: values.email,
        password: values.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
      )
      await new Promise((resolve) => {
        setTimeout((resolve), 1000)
      })


      action.resetForm();


      console.log("data", response.data);

      // Redirect to dashboard page after successful login

      if (response.data.status == 200) {
        dispatch(userLoggedIn())
        navigate("/dashboard")
      }
      else {
        alert("Login Failed")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className="box h-screen flex items-center justify-center">

      <div className="Loginmain  w-full  sm:max-lg:w-[23rem] sm:max-lg:h-[28rem] lg:w-[23rem] lg:h-[28rem] shadow-xl rounded-xl">
        <h1 className="text-2xl flex items-center justify-center mr-7 font-bold leading-tight tracking-tight text-gray-900 mt-7 ml-6 md:max-lg:text-3xl lg:max-xl:text-3xl xl:max-2xl:text-3xl 2xl:text-3xl">
          Sign in
        </h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidate}
          onSubmit={login}
        >
          {({ isSubmitting }) => (
            <Form>

              <CustomInput
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your  email" />

              <CustomInput
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password" />

              <button disabled={isSubmitting}
                type="submit"
                className="btn mt-12 flex w-[84%] ml-7 items-center justify-center px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>

    </section>
  )
}

export default Login