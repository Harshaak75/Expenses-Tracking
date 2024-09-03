import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Store, persistor } from './Schema/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux"

import Home from './Pages/Home.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx'
import Dashboard from './Pages/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/createAccount',
        element: <Signup />
      },
      {
        path: '/loginUser',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>

    </Provider>
  </StrictMode>,
)
