import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing
  },
  {
    path: "/pricing",
    Component: Pricing,
  },
])

function App(): React.JSX.Element {
  return (<div>
    <StylesProvider>
      <RouterProvider router={router} />
    </StylesProvider>
  </div>)
}

export default App