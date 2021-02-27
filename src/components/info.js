import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Info = ipAddress => {
  const [data, setData] = useState()

  const url = 'https://geo.ipify.org/api/v1?apiKey=at_G1U45uIhXypSzmc2JkrjzHg1VsDzp'

  if (ipAddress) {
    url = `https://geo.ipify.org/api/v1?apiKey=at_G1U45uIhXypSzmc2JkrjzHg1VsDzp&ipAddress=${ipAddress}`
  }

  const getApi = async url => {
    const { data } = await axios.get(url)
    setData({
      ip: data.ip,
      location: data.location.city,
      timezone: data.location.timezone,
      lat: data.location.lat,
      long: data.location.lng,
      isp: data.isp,
    })
  }

  useEffect(() => {
    getApi(url)
  }, [url])

  return data
}

export default Info