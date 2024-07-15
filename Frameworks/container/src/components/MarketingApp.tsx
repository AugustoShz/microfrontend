import { mount } from 'marketing/MarketingApp'
import React, { useEffect, useRef } from 'react'

function MarketingApp(): React.JSX.Element {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  })

  return <div ref={ref}></div>
}

export default MarketingApp