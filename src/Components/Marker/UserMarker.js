import { View , Image } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import styles from "./UserMarker.styles"

const UserMarker = ({coordinates , userImageURL , onSelect}) => {
    return(
    <Marker coordinate={coordinates} onPress={onSelect}>
            <Image 
            style={styles.image}
            source={{uri : userImageURL}}
            />

    </Marker>
    )
}

export default UserMarker;

