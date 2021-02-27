import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Results = () => {
  const [info, setInfo] = useState('')

  const url = 'https://geo.ipify.org/api/v1?apiKey=at_G1U45uIhXypSzmc2JkrjzHg1VsDzp'

  const getAllInfo = () => {
    axios.get(`${url}past`)
    .then((response) => {
      const allInfo = response.data.info.allInfo;
      setInfo(allInfo);
    })
    .catch(error => console.error(`Error: ${error}`));
  }

  useEffect (() => {
    getAllInfo();
  }, []);

  return (
    <div className="results">
      <div className="results__col">
        <div className="results__title">
          <span>IP Address</span>
        </div>
        <div className="results__value">
          <span>192.192.192.192</span>
        </div>
      </div>  
      <div className="results__col">
        <div className="results__title">
          <span>Location</span>
        </div>
        <div className="results__value">
          <span>Brooklyn, NY 10001</span>
          {info}
        </div>
      </div>  
      <div className="results__col">
        <div className="results__title">
          <span>Timezone</span>
        </div>
        <div className="results__value">
          <span>UTC - 05:00</span>
        </div>
      </div>  
      <div className="results__col">
        <div className="results__title">
          <span>ISP</span>
        </div>
        <div className="results__value">
          <span>SpaceX Starlink</span>
        </div>
      </div>      
    </div>
  )
}

export default Results