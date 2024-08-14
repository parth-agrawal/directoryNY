import { GoogleMap } from "@react-google-maps/api";
import { LoadScript } from "@react-google-maps/api";
import { APIProvider } from '@vis.gl/react-google-maps';

const api_Key = process.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;


export default function Map() {

    <APIProvider apiKey={'Your API key here'} onLoad={() => console.log('Maps API has loaded.')}>
        Hello world
    </APIProvider>


}