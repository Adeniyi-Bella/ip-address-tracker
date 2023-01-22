import React, { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";
interface Props {
  address: {
    ip: string;
    isp: string;
    location: {
      city: string;
      region: string;
      timezone: string;
      lat: number;
      lng: number;
    };
  };
}
export default function Markerposition({ address }: Props) {
  const position = useMemo(():[number,number] => {
    return [address.location.lat, address.location.lng];
  }, [address.location.lat, address.location.lng]);
  const map = useMap();

  //get the current lat and long and change the view
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={icon} position={position}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  );
}
