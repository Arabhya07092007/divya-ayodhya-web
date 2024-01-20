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
import waterATM from '../Database/waterATM';

export default function WaterATM({ navigation, }) {

    console.log(waterATM)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7', }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
            <FlatList
                data={waterATM}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <Card item={item} index={index} navigation={navigation} />
                )}
                style={{ backgroundColor: '#FDFAE7', }}
            />

        </SafeAreaView>
    );
}

function Card({ navigation, item, index }) {
    const colors = ["#E54B6D", "#3B519C", "#8A63B2", "#13C5A5"];

    return (
        <View
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
                    height: 1,
                },
                shadowOpacity: 0.15,
                shadowRadius: 4,
                elevation: 5,
                marginBottom: 10,
                marginTop: 10,
                alignItems: "center"
            }}>

            <View style={{ backgroundColor: colors[index % 4], width: 50, height: 50, borderRadius: 25, justifyContent: "center", alignItems: "center" }} >
                <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>{index + 1}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 10, color: "black", }}>{item.name.toLowerCase().charAt(0).toUpperCase() + item.name.toLowerCase().slice(1)}</Text>
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(item.location);
                    }}
                    style={styles.btn}>
                    <Text style={{ fontSize: 12, fontWeight: "600", color: "white", paddingVertical: 10 }}>Direction</Text>
                </TouchableOpacity>
            </View>

        </View>
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