import React from 'react'
import './Banner.css'

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }

  return (
    <header
     className='banner' 
     style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1024px-Netflix_logo.svg.png")`,
        backgroundPosition: "center center",
    }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">Movie Name</h1>
            <div className="banner_buttons">
                <button className='banner_button'>play</button>
                <button className='banner_button'>My list</button>
            </div>
            <h1 className="banner_description">
               {truncate
                (`this is a test descriptoion this is a test descriptoion this is a test descriptoion
                this is a test descriptoion this is a test descriptoion this is a test descriptoion
                this is a test descriptoion this is a test descriptoion this is a test descriptoion
                this is a test descriptoion this is a test descriptoion this is a test descriptoion
                this is a test descriptoion this is a test descriptoion`, 160)}
            </h1>
        </div>

        <div className="banner_fadeButton"/>
      
    </header>
  )
}

export default Banner
