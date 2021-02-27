import React, { useState } from 'react'
import Results from './results'
import iconArrow from '../images/icon-arrow.svg'

const Header = ({data, setQuery}) => {  
  const [value, setValue] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        value
      )
    ) {
      setErrorMsg('')
      setQuery(value)
      return true
    }
    setErrorMsg(`${value} is not a correct ip address`)
    setValue('')
    return false
  }

  return (
    <div className="header">
      <div className="container">
        <h1>IP Address Tracker</h1>

        <div className='search-box'>
          <input  
            value={value}
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

        {errorMsg && (
          <span className='error'>
            {errorMsg}            
          </span>
        )}

        <Results data={data}/>
      </div>
    </div>
  )
}

export default Header