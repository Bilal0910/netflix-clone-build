import React from 'react'
import Banner from './Banner';
import './HomeScreen.css';
import NavBar from './NavBar';
import requests from './Requests';
import Row from './Row';


function HomeScreen() {
  return (
    <div className='homeScreen'>

        {/* NavBar */}

        <NavBar />

        {/* Banner */}
        
        <Banner />

        {/* Row */}
        
        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
        />

        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      
    </div>
  )
}

export default HomeScreen
