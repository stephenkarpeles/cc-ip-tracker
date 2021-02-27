import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import markerIcon from '../images/icon-location.svg'

const Map = ({data}) => {
  const [position, setPosition] = useState([51.505, -0.09])

  const locationIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [30, 40],
  })

  useEffect(() => {
    if (data) {
      setMapPosition(data.lat, data.long)
    }
  }, [data])

  const setMapPosition = (lat, long) => {
    setPosition([lat, long])
  }

  return (
    <div className="map-wrapper">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={locationIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map