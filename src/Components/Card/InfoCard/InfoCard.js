import React from "react";
import { SafeAreaView, Text , View } from "react-native";
import Modal from "react-native-modal"
import styles from "./InfoCard.styles"

function InfoCard({visible , close , user}){
    return(
        <Modal 
        style={styles.modal}
        isVisible={visible} 
        swipeDirection="down"
        onSwipeCancel={close}
        onBackdropPress={close} 
        onBackButtonPress={close}
        backdropOpacity={0.1}>

            <View style={styles.container}>
                <Text style={styles.username}> {user.username}</Text>
                <Text style={styles.fullname}>{user.first_name} {user.last_name}</Text>
            
                <SafeAreaView style={styles.safeArea} /> 
                {/* safearea yı alttan bosluk icin kullandım  */}
            </View>
        </Modal>
    )
}

export default InfoCard;