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
    Linking
} from 'react-native';

export default function ToiletScreen({ navigation, category, route }) {
    const { data } = route.params;
    const ToiletData = data;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />


            <View style={{ height: 230 }}>
                <Image
                    source={{
                        uri: "https://pbs.twimg.com/media/GDuO_oua0AEsb22?format=jpg&name=4096x4096",
                    }}
                    style={{
                        height: 235,
                        resizeMode: 'cover',
                    }}
                />
            </View>

            <View style={{ marginTop: 10, marginHorizontal: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>{ToiletData.name
                    }</Text>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL(ToiletData.location);
                    }} style={{ backgroundColor: "#B01432", paddingHorizontal: 10, borderRadius: 5, justifyContent: "center", alignItems: "center", width: 100, height: 40 }}>
                        <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>Direction</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 10 }}>Intructions:</Text>
                <View>
                    <Text style={{ fontSize: 18 }}>
                        • Clean up after yourself. {"\n"}
                        • Flush the toilet after using it.{"\n"}
                        • Wash your hands.{"\n"}
                        • Use trash bins.{"\n"}
                        • Don’t smoke.{"\n"}
                        • Be water conscious.
                    </Text>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: "500", fontSize: 18 }}>
                        • उपयोग करने के बाद स्वयं को साफ़ करें। {"\n"}
                        • शौचालय का उपयोग करने के बाद उसे फ्लश कर दें। {"\n"}
                        • अपने हाथ धोएं।{"\n"}
                        • कूड़ेदान का प्रयोग करें। {"\n"}
                        • धूम्रपान ना करे।{"\n"}
                        • पानी के प्रति जागरूक रहें।

                    </Text>
                </View>
            </View>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FDFAE7',
    },
});
