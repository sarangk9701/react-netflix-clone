import React from 'react'
import Banner from "../../components/Banner";
import requests from "../../api/requests";
import Row from "../../components/Row";

export default function MainPage() {
  return (
    <div>      
    <Banner />

    <Row
      title="NETFLIX ORIGINALS"
      id="NO"
      fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow
    />

    <Row title="Trending NOW" id="TN" fetchUrl= {requests.fetchTrending}/>
    <Row title="Top Rated" id="TR" fetchUrl= {requests.fetchTopRated}/>
    <Row title="Action Movies" id="AM" fetchUrl= {requests.fetchActionMovies}/>
    <Row title="Comedy Movies" id="CM" fetchUrl= {requests.fetchComedyMovies}/>
</div>
  )
}
