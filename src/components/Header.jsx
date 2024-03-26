import React, { useEffect } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice'; // Assuming you have a cacheResults action

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchCache, setSearchCache] = useState({});

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
      const data = await response.json();
      console.log(data);
      setSuggestions(data[1]);

      setSearchCache({
        ...searchCache,
        [searchQuery]: data[1], 
      });
    
      dispatch(cacheResults({ [searchQuery]: data[1] }));
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  } 

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='flex justify-between shadow-md p-2'>
      <div className='flex h-14'>
        <img 
          onClick={toggleMenuHandler}
          className='cursor-pointer'
          alt='hamburger_logo'
          src='./src/assets/hamburgerMenu.png'
        />
        <img 
          className='cursor-pointer'
          alt='youtube_logo'
          src='./src/assets/youtube_logo.png'
        />
      </div>
      <div className='flex'>
          <input 
            className='px-5 p-1 mt-2 rounded-l-full border border-gray-200'
            type='text' 
            placeholder=' Search'
            size={65}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='rounded-r-full border border-gray-200 pl-3 mt-2 pr-3 bg-gray-100' >
            🔍
          </button>
      </div>
      <div>
        <img 
          className='h-8 mt-2 cursor-pointer'
          alt='userLogin_logo'
          src='./src/assets/userLogin.png'
        />
      </div>
    </div>
  );
}

export default Header;
