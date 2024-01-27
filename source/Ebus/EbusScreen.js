import React from 'react';
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
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import data from './Edata';
import { ScrollView } from 'react-native-gesture-handler';

const Routes = [
    "AE-1 Katra to Sahadatgunj (Rampath)",
    "AE-2 Salarpur to Ayodhya Dham Bus Station ",
    "AE-3 BaratKund to Ayodhya Dham Bus Station",
    "AE-4  Ayodhya Dham Bus Station to Barun Bazar",
    "AE-5  Ayodhya Dham Bus Station to Pura Bazar",
    "AE-6 Ayodhya Dham Bus Station to Airport",
];

const image = [
    "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/r1.jpg",
    "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/r2.jpg",
    "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/r3.jpg",
    "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/r4.png",
    "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/r5.png",
    "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/r6.jpg",
]

export default function EBusScreen({ navigation, route }) {
    const { index } = route.params;
    console.log(index);
    const mainindex = index;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7', }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
            <View style={{ width: winWidth, height: 230 }}>
                <Image
                    source={{
                        uri: image[index],
                    }}
                    style={{
                        height: 235,
                        resizeMode: 'cover',
                    }}
                />
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: '#FDFAE7', }}>
                <View style={{ flex: 1, backgroundColor: '#FDFAE7', }}>
                    <View style={{ flex: 1, backgroundColor: '#FDFAE7', }}>
                        <Text style={{ fontSize: 20, fontWeight: '500', margin: 10, color: 'black' }}>
                            {Routes[index]}
                        </Text>
                        <View style={{ flex: 1, backgroundColor: '#FDFAE7', }}>
                            <FlatList
                                data={data[index]}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <Card item={item} index={index} mindex={mainindex} navigation={navigation} />
                                )}
                                style={{ backgroundColor: '#FDFAE7', }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

function Card({ navigation, item, index, mindex }) {
    console.log(item, index, mindex)
    // console.log("this is index", index)
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                marginHorizontal: 10,
            }}>
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <View style={{ backgroundColor: "#B01432", width: 32, height: 32, borderRadius: 50, justifyContent: "center", alignItems: "center" }} >
                    <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/location.png" }} style={{ width: 20, height: 20 }} />
                </View>
                <View style={[{ width: 3, height: 35, }, (data[mindex].length - 1) !== (index) ? { backgroundColor: "#B01432" } : null]} />
            </View>
            <View style={{ flex: 1, flexDirection: "row", }}>
                <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10, color: "black", marginTop: 2 }}>{item}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FDFAE7',
    },
});