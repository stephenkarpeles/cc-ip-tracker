import React from 'react'

const Results = ({data}) => {
  return (
    <div className="results">
      <div className="results__col">
        <div className="results__title">
          <span>IP Address</span>
        </div>
        <div className="results__value">
          <span>{data ? data.ip : 'Loading...'}</span>
        </div>
      </div>  
      <div className="results__col">
        <div className="results__title">
          <span>Location</span>
        </div>
        <div className="results__value">
          <span>Brooklyn, NY 10001</span>          
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