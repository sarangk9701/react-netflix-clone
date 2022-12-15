import axios from '../../api/axios';
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';

export default function SearchPage() {
  
  console.log('useLocation()', useLocation());

  const [searchResults, setSearchResults] = useState([]);

  let query = useQuery();
  const searchTerm = query.get("q");
  console.log('searchTerm: ', searchTerm);

  useEffect(() => {
    if(searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try{
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      )
      console.log(request);
      setSearchResults(request.data.results);
    }catch(error){
      console.log("error : ", error);
    }
  };

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  return (
    <div>SearchPage</div>
  )
}
