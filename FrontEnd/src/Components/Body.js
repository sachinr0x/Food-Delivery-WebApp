import SearchBar from './SearchBar'
import Restaurants from './Restaurants'
import {useState} from 'react'

const Body = () =>{
  const [searchText, setSearchText] = useState("");

  return (<div className= "body-container">

    <SearchBar searchText= {searchText} onSearchChange = {setSearchText}/>
    <Restaurants searchText = {searchText}/>    
  </div>)
}
export default Body;