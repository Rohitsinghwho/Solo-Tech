import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Login} from './Components/Login.jsx'
import AuthLayout from './Components/AuthLayout'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Home from './pages/Home.jsx'
import SignupPage from './pages/SignupPage.jsx'
import AllPosts from './pages/AllPosts.jsx'
import Post from './pages/Post.jsx'
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
          element:(
            <AuthLayout authentenction={false}>
            <about/>
          </AuthLayout>    
          )  
        },
        {
          path: '/login',
          element:(
            <AuthLayout authentenction={false}>
              <Login/>
            </AuthLayout>
          )
        },
        {
          path:'/signup',
          element:(
            <AuthLayout authentenction={false}>
              <SignupPage/>
              </AuthLayout>
          )
        },
        {
          path:'/add-post',
          element:(
            <AuthLayout authentenction>
              <AddPost/>
            </AuthLayout>
          )
        },
        {
          path:'/All-posts',
          element:(
            <AuthLayout authentenction>
              <AllPosts/>
            </AuthLayout>
          )
        },
        {
          path:'/post/:slug',
          element:<Post/>
        },
        {
          path:'/edit=post/:slug',
          element:(
            <AuthLayout authentenction>
              <EditPost/>
            </AuthLayout>
          )
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
