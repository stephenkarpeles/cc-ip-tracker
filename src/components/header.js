import React, { useState } from 'react'

const Header = () => {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="header">
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
          <img src={require('../images/icon-arrow.svg')} alt='icon arrow' />
        </button>
      </div>
    </div>
  )
}

export default Header