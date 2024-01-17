import * as React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import TouristPlace from '../Tourists/TouristPlace';
import BottomTabNav from './BottomTabNav';

import ParkingFeed from '../Parking/ParkingFeed';
import ParkingComplex from '../Parking/ParkingComplex';
import BookingEntry from '../Parking/BookingEntry';
import ReviewSum from '../Parking/ReviewSum';
import Tickets from '../Parking/Tickets';
import call from 'react-native-phone-call';
import ComingSoon from '../Parking/ComingSoon';

const Stack = createStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#FDFAE7' },
                headerShown: false,
                headerShadowVisible: true,
            }}>

            <Stack.Screen name="ParkingFeed" component={ParkingFeed} options={{
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#FDFAE7' },
                title: 'Parkings in Ayodhya',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 20 },
            }} />
            <Stack.Screen name="ParkingComplex" component={ParkingComplex} />
            <Stack.Screen name="BookingEntry" component={BookingEntry} options={{
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#FDFAE7' },
                title: 'Enter Details',
                headerShown: true
            }} />
            <Stack.Screen name="ReviewSum" component={ReviewSum} options={{
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#FDFAE7' },
                title: 'Review Summary',
                headerShown: true
            }} />
            <Stack.Screen name="Tickets" component={Tickets} options={{
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#FDFAE7' },
                title: 'Tickets',
                headerShown: true
            }} />
            <Stack.Screen name="ComingSoon" component={ComingSoon} />
            <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
            <Stack.Screen name="TouristPlace" component={TouristPlace} />
        </Stack.Navigator>
    );
}

export default StackNav;
