import { width } from "@mui/system";
import React from "react";
import { GoogleMap,withScriptjs,withGoogleMap } from "react-google-maps";
import { StyledMap } from "../Map/styled";


function Map(){
    return(
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat:47.010452, lng:28.863810}}/>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map));
export default function MyMap(){
    return(
        <StyledMap>

        <div className="map">
            <WrappedMap googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHmMCXO-o2XBqC6enkR9WPvlDaXwj4VK8
"
loadingElement={<div style={{ width: `100%` }} />}
containerElement={<div style={{ height: `400px`, width: `100%` }} />}
mapElement={<div style={{ height: `100%` }} />}/>
        </div>
        </StyledMap>

    )
}