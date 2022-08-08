import React from 'react';
import './App.css';
import Row from './component/Row/Row.js'
import requests  from './request.js';
import Banner from  "./component/Banner/Banner.js"
import Nav from "./component/Nav/Nav.js"

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} 
      isLargeRow />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
