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
import ToiletData from "../Database/toilet";

export default function ToiletFeed({ navigation, }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7', }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
            <FlatList
                data={ToiletData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <ToiletCard item={item} index={index} navigation={navigation} />
                )}
                style={{ backgroundColor: '#FDFAE7', }}
            />

        </SafeAreaView>
    );
}

function ToiletCard({ navigation, item, index }) {
    console.log(index)

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ToiletScreen', { data: item, index: index });
            }}
            style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                marginHorizontal: 10,
                padding: 10,
                borderRadius: 10,
                elevation: 2,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.15,
                shadowRadius: 4,
                elevation: 5,
                marginBottom: 10,
                marginTop: 10,
            }}>

            <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/sauchlay.jpeg" }} style={{ height: 70, width: 70, borderRadius: 10 }} />
            <View style={{ flex: 1 }}>
                <View style={{}}><Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 10, color: "black", }}>{item.name}</Text></View>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 10, color: "#32936F", backgroundColor: "#32936F3D", paddingVertical: 3, borderRadius: 5, paddingHorizontal: 7 }}>Free</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('ToiletScreen', { data: item, index: index }); }} style={styles.btn}>
                        <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>Direction</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    cont: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FDFAE7',
    },
    card: {
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 5,
    },
    btn: {
        backgroundColor: "#B01432",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 5,
        marginLeft: 10
    }
});