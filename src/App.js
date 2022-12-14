import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import requests from "./api/requests";
import Row from "./components/Row";
import Footer from "./components/Footer";

function App() {
  return (

    <div className='App'>
      <Nav />
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

      <Footer />
    </div>
  );
}

export default App;
