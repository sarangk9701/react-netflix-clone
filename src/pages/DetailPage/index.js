import React, {useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios';

export default function DetailPage() {

  const { movieId } = useParams();
  console.log('movieID', movieId);
  const [movie, setMovie] = useState({});

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}`
      )
      console.log('request', request);
      setMovie(request.data)
    }
    fetchData();
  },[movieId]);

  if( !movie ) return <div>...loading</div>;
  return (
    <section>
      <img
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt = "poster"
      />
      
    </section>
  )
}
