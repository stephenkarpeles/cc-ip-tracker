import React, { useState } from 'react'
import Results from './results'
import iconArrow from '../images/icon-arrow.svg'

const Header = ({data}) => {

  const [searchValue, setSearchValue] = useState('')

  const handleChange = e => {
    setSearchValue(e.target.value)
  }

   const handleClick = () => {
    setSearchValue('')
    return false
  }

  return (
    <div className="header">
      <div className="container">
        <h1>IP Address Tracker</h1>

        <div className='search-box'>
        <input  
          value={searchValue}
          onChange={handleChange}        
          placeholder='Search for any IP address or domain'
          aria-labelledby='search'          
          aria-label='Search for any IP address or domain'
          type='text'
          name='search'          
        />

        <button className='search-box__btn' onClick={handleClick}>
          <img src={iconArrow} alt='Search Button' />
        </button>
      </div>

        <Results data={data}/>
      </div>
    </div>
  )
}

export default Header