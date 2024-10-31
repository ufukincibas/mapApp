import React from "react";
import { Text , View } from "react-native";
import MapView from 'react-native-maps';
import useFetch from "./hooks/useFetch";
import Config from "react-native-config";

function App(){
  const {data,loading,error} = useFetch(Config.API_URL);

  return(
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}}/>
    </View>
  )
}

export default App;