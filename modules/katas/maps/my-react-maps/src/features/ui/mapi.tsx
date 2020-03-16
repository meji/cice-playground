import {bind} from '../../utils/bind'
import React  from 'react'
import { Page } from '../../core/components/page/page'
import {  Map, Marker, Popup, TileLayer } from 'react-leaflet'

import styles from './mapi.module.css'
const cx = bind(styles)

interface Props {
  latitude: number
  longitude: number
}


export const Mapi: React.FunctionComponent<Props> = ({ latitude, longitude }) => {
  return (
    <Page>
      <Map center={[latitude, longitude]} zoom={500}  className={cx('map')}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    </Page>
  )
}
