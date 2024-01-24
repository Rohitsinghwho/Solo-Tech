import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router= createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
        {
          path: '/',
          element:<Home/>
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/login',
          element:<Login/>
        }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
