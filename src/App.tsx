import React from "react";
import { Text , View } from "react-native";
import MapView from 'react-native-maps';
import useFetch from "./hooks/useFetch";
import Config from "react-native-config";

import Loading from "./Components";

function App(){
  const {data,loading,error} = useFetch(Config.API_URL);

  return(
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}}/>
     {loading && <Loading/>}
     {/* // loading true oldugu surece gerceklestir */}
    </View>
  )
}

export default App;