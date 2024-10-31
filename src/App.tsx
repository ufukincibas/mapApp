import React from "react";
import { Text , View } from "react-native";
import MapView , {Marker} from 'react-native-maps';
import useFetch from "./hooks/useFetch";
import Config from "react-native-config";

import Loading from "./Components";
import UserMarker from "./Components/Marker/UserMarker";

function App(){
  const {data,loading,error} = useFetch(Config.API_URL);

  const renderUserMarker = () => {
return data.map(({ id,avatar, address: { coordinates } }) => {
  return(
    <UserMarker 
    key={id}
    coordinates={{
      latitude : coordinates.lat,
      longitude: coordinates.lng
    }}
    userImageURL={avatar}/>
  )
})
  }

  return(
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}}>
     {data && renderUserMarker()}
    </MapView>
     {loading && <Loading/>}
     {/* // loading true oldugu surece gerceklestir */}
    </View>
  )
}

export default App;