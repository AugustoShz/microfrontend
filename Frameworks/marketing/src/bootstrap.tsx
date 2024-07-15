import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const mount = (el: Element) => {
  const root = createRoot(el)
  root.render(<App />)
}


if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector("#_marketing-dev-root")
  if(element) mount(element)
}

export { mount }