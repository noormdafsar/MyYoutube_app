import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './App.css'
import store from './utils/store'
import MainContainer from './components/MainContainer'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([
  {
    Path: "/",
    element: <Body/>,
    children:[
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
