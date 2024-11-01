import React , {useRef, useState} from "react";
import { Text , View } from "react-native";
import MapView , {Marker} from 'react-native-maps';
import useFetch from "./hooks/useFetch";
import Config from "react-native-config";

import Loading from "./Components";
import UserMarker from "./Components/Marker/UserMarker";
import InfoCard from "./Components/Card/InfoCard";

function App(){
  const [user , setUser] = useState();
  const [infoModalVisiblity , setInfoModalVisibility] = useState(false)
  const mapRef = useRef();
  const {data,loading,error} = useFetch(Config.API_URL);

  const renderUserMarker = () => {
return data.map(({ id,avatar, first_name , last_name , username , address: { coordinates } }) => {
  return(
    <UserMarker 
    key={id}
    coordinates={{
      latitude : coordinates.lat,
      longitude: coordinates.lng
    }}
    userImageURL={avatar}
    onSelect={() => handleMarkerSelect(coordinates , {first_name , last_name , username })}/>
  )
})
  }

  function handleMarkerSelect(coor , selectedUser){
    setUser(selectedUser)
    handleModalVisible(); //marker secildiginde visible true
    mapRef.current.animateToRegion({
      latitude:coor.lat,
      longitude: coor.lng ,
      latitudeDelta : 8 ,
      longitudeDelta : 8 ,
    })
  }

  function handleModalVisible(){
    return(
      setInfoModalVisibility(!infoModalVisiblity)
    )
  }

  return(
    <View style={{flex: 1}}>
      <MapView ref={mapRef} style={{flex: 1}}>
     {data && renderUserMarker()}
    </MapView>
     {loading && <Loading/>}
     {/* // loading true oldugu surece gerceklestir */}

     {user && (<InfoCard 
     user= {user} 
     visible={infoModalVisiblity}
     close={handleModalVisible}/>)}
    </View>
  )
}

export default App;