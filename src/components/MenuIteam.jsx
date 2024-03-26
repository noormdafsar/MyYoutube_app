import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const MenuIteam = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen )
  return !isMenuOpen ? null: (
    <div className='shadow-md w-48 p-6 relative'>
       <ul className='font-serif'>
            <Link to="/"><li>Home</li></Link>
            <li>Shorts</li>
            <li>Video</li>
       </ul> 
       <h1 className='font-bold pt-3'>Subscrtiption</h1>
        <ul className='font-serif'>
            <li>Movie</li>  
            <li>Sports</li> 
            <li>Gaming</li> 
            <li>Music</li> 
        </ul>
        <h1 className='font-bold pt-4'>Watch Later</h1>
        <ul className='font-serif'>
            <li>Music</li>  
            <li>Movie</li> 
            <li>Gaming</li> 
            <li>Sports</li> 
        </ul>
        <h1 className='font-bold pt-4'>Liked videos</h1>
        <ul className='font-serif'>
            <li>Music</li>  
            <li>Movie</li> 
            <li>Gaming</li> 
            <li>Sports</li> 
        </ul>
    </div>
  )
}

export default MenuIteam
