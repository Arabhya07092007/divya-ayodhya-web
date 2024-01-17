import React, { useState } from 'react';
import {
    Button,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TextInput,
    ScrollView,
    Dimensions,
    Linking
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TouristPlace({ navigation, route }) {
    const { item } = route.params;
    // console.log(item);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FDFAE7' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FDFAE7'} />
            <TouchableOpacity
                style={styles.backdrop}
                onPress={() => navigation.goBack()}>
                <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/back.png" }} style={{ width: 27, height: 27 }} />
            </TouchableOpacity>

            <View style={{ width: winWidth }}>
                <Image source={{ uri: item.images[1].trim() }} style={Styles.cmplx} />
            </View>

            <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black', fontSize: 20, fontWeight: '600' }}>
                            {item.name}
                        </Text>

                        <Text style={{ color: '#616161', fontSize: 16, fontWeight: '400' }}>
                            {/* Tulsi Nagar, Ayodhya, Uttar Pradesh */}
                            {item.address}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: "center" }}>
                        <TouchableOpacity style={{}}>
                            <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/fav.png" }} style={{ width: 27, height: 27 }} />

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "space-between" }}>
                    <TouchableOpacity

                        onPress={() => {
                            Linking.openURL(item.direction);
                        }}
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            paddingVertical: 7,
                            alignItems: 'center',
                            backgroundColor: '#B01432',
                            borderRadius: 20,
                            elevation: 1,
                        }}>

                        <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/direction.png" }} style={{ width: 27, height: 27 }} />

                        <Text
                            style={{
                                color: 'white',
                                fontSize: 14,
                                fontWeight: '400',
                                marginLeft: 2,
                            }}>
                            Direction
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            paddingVertical: 5,
                            alignItems: 'center',
                            borderColor: '#B01432',
                            borderRadius: 20,
                            elevation: 1,
                            borderWidth: 1.5,
                            backgroundColor: '#FDFAE7',
                        }}>
                        <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/clock.png" }} style={{ width: 27, height: 27 }} />

                        <Text
                            style={{
                                color: '#B01432',
                                fontSize: 14,
                                fontWeight: '400',
                                marginLeft: 5,
                            }}>
                            8AM - 10PM
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderColor: '#B01432',
                            borderRadius: 50,
                            elevation: 1,
                            borderWidth: 1.5,
                            backgroundColor: '#FDFAE7',
                            padding: 5
                        }}>
                        <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/wheelchair.png" }} style={{ width: 27, height: 27 }} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderColor: '#B01432',
                            borderRadius: 50,
                            elevation: 1,
                            borderWidth: 1.5,
                            backgroundColor: '#FDFAE7',
                            paddingHorizontal: 7,
                            paddingVertical: 5
                        }}>
                        <Image source={{ uri: "https://raw.githubusercontent.com/Arabhya07092007/HolyAyodhya-assets/main/parking.png" }} style={{ width: 18, height: 18 }} />

                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 14, lineHeight: 19 }}>
                        {item.description}
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: '#FDFAE7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        width: 35,
        height: 35,
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10,
        zIndex: 1,
    },

});

const Styles = StyleSheet.create({
    cont: {
        backgroundColor: '#FDFAE7',
        flex: 1,
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
    },
    cmplx: {
        // width: winWidth,
        // height: 200,

        height: 260,
        width: 'auto',
        resizeMode: 'cover',
    },
    prkName: {
        color: '#411609',
        fontSize: 18,
        fontWeight: '700',
    },
    txt1: {
        color: 'black',
        fontSize: 15,
        // marginTop:5
    },
    indicators: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60,
        alignSelf: 'center',
        marginTop: 6,
    },
    circles: {
        width: 8,
        height: 8,
        backgroundColor: 'orange',
        borderRadius: 100,
    },
});
