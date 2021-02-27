import React from 'react'

const Results = ({data}) => {
  return (
    <div className="results">
      <div className="results__col">
        <div className="results__title">
          <span>IP Address</span>
        </div>
        <div className="results__value">
          <span>{data ? data.ip : '...'}</span>
        </div>
      </div>  
      <div className="results__col">
        <div className="results__title">
          <span>Location</span>
        </div>
        <div className="results__value">
          <span>{data ? data.location : '...'}</span>          
        </div>
      </div>  
      <div className="results__col">
        <div className="results__title">
          <span>Timezone</span>
        </div>
        <div className="results__value">
          <span>{data ? `UTC ${data.timezone}` : '...'}</span>
        </div>
      </div>  
      <div className="results__col">
        <div className="results__title">
          <span>ISP</span>
        </div>
        <div className="results__value">
          <span>{data ? data.isp : '...'}</span>
        </div>
      </div>      
    </div>
  )
}

export default Results