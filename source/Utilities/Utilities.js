import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';

export default function Utilities({ navigation, category }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />

            <ScrollView>

                <TouchableOpacity onPress={() => { navigation.navigate("SurfaceParkingFeed") }} style={styles.btn}>
                    <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/prk3.png" }} style={{ height: 70, width: 70, borderRadius: 10 }} />
                    <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}>Surface Parking in Ayodhya</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate("ToiletFeed") }} style={styles.btn}>
                    <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/sauchlay.jpeg" }} style={{ height: 70, width: 70, borderRadius: 10 }} />
                    <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}>Toilets Near You</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => { navigation.navigate("WaterATM") }} style={styles.btn}>
                    <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/waterbank.jpg" }} style={{ height: 70, width: 70, borderRadius: 10 }} />
                    <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10 }}>Water ATM Near You</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FDFAE7',
    },
    btn: {
        backgroundColor: 'white',
        flexDirection: 'row',
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center"
    }
});
