import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const {} = useLoadScript({
    googleMapsApikey: "AIzaSyBi35lF3EfsGCkHsJ75RaLn9YvOmJjy4e0",
  });
  return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }}></GoogleMap>;
}
