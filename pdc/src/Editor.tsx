import { useState} from 'react';
import { APIProvider, Map, Pin, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import type { MapMouseEvent } from '@vis.gl/react-google-maps';
import './App.css'
import '@govtechsg/sgds/css/sgds.css';


type britTroops = { key: string, location: google.maps.LatLngLiteral }
const locations: britTroops[] = [
    { key: "Singapore", location: { lat: 0, lng: 0 } },
];



function Editor() {

    

    const [clickedPosition, setClickedPosition] = useState<google.maps.LatLngLiteral | null>(null);

    const handleMapClick = (event: MapMouseEvent) => {
        if (event.detail.latLng) {
            const lat = event.detail.latLng.lat;
            const lng = event.detail.latLng.lng;
            setClickedPosition({ lat, lng });
            console.log('Clicked coordinates:', { lat, lng });
        }
    };


    return (<>

        <div className="topBar">
            <h1>Joint Cabinet Crisis</h1>
            <a className='topBarLinks' href="#/">Updates</a>
            <a className='topBarLinks' href="https://forms.gle/9QhMmUZhjLAE5cXTA" target='blank'>Directive Form</a>
            <a className='topBarLinks' href="#/editor">Map Editor</a>
            <a className='topBarLinks' href="#/council-directives">Council Directives</a>
        </div>
        <div className="header">
            <h1>Troop Map Editor</h1>
        </div>
        <div className="container">

                <div className="map-overlay" id="mapOverlay" style={{ padding: "0px" }} >

                    <APIProvider apiKey={'AIzaSyDdBGrtXdcOkvVC37W-WoCQIK9TjAwYGUs'} onLoad={() => console.log('Maps API has loaded.')}>

                        <Map
                            className='map-image'
                            defaultZoom={11}
                            mapId='eb87b183946a00eea25854ea'
                            defaultCenter={{ lat: 1.3521, lng: 103.8193 }}
                            onClick={handleMapClick}
                            disableDefaultUI={true}
                            gestureHandling="auto"

                        >
                            <PoiMarkers pois={locations} />

                            {clickedPosition && (
                                <InfoWindow
                                    position={clickedPosition}
                                    onCloseClick={() => setClickedPosition(null)}
                                >
                                    <div style={{ padding: '8px' }}>
                                        <strong>Clicked Location</strong><br />
                                        lat: {clickedPosition.lat.toFixed(6)}<br />
                                        lng: {clickedPosition.lng.toFixed(6)}
                                    </div>
                                </InfoWindow>
                            )}
                        </Map>

                    </APIProvider>
                </div>
            </div>
    </>
    )


}

const PoiMarkers = (props: { pois: britTroops[] }) => {
    return (
        <>
            {props.pois.map((poi: britTroops) => (
                <AdvancedMarker
                    key={poi.key}
                    position={poi.location}>
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
            ))}
        </>
    );
};

export default Editor;