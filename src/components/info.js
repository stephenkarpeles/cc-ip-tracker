import { useState, useEffect } from 'react'
import Axios from 'axios'

const Info = ipAddress => {
  const [data, setData] = useState()

  let URL = 'https://geo.ipify.org/api/v1?apiKey=at_G1U45uIhXypSzmc2JkrjzHg1VsDzp'

  if (ipAddress) {
    URL = `https://geo.ipify.org/api/v1?apiKey=at_G1U45uIhXypSzmc2JkrjzHg1VsDzp&ipAddress=${ipAddress}`
  }

  const getApi = async url => {
    const { data } = await Axios.get(url)
    setData({
      ip: data.ip,
      lat: data.location.lat,
      long: data.location.lng,
      isp: data.isp,
      timezone: data.location.timezone,
      location: data.location.city,   
    })
  }

  useEffect(() => {
    getApi(URL)
  }, [URL])

  return data
}

export default Info