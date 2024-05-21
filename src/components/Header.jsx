import React from 'react'
import AppNav from './AppNav'
import Hero from './Hero'
// import Translate from './Translate'
import Translator from './Translator'

const Header = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
        <AppNav/>
        {/* <Translate /> */}
        <Translator />
        <Hero/>
    </div>
    </>
  )
}

export default Header