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
import ComingSoon from '../Parking/ComingSoon';

import Utilities from '../Utilities/Utilities';
import ToiletFeed from '../Utilities/ToiletFeed';
import ToiletScreen from '../Utilities/ToiletScreen';
import SurfaceParkingFeed from '../Utilities/SurfaceParkingFeed';
import WaterATM from '../Utilities/WaterATM';
import EbusFeed from '../Ebus/EbusFeed';
import EBusScreen from '../Ebus/EbusScreen';

const Stack = createStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShadowVisible: true,
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#FDFAE7' },
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 20 },
            }}>


            {/* <Stack.Screen name='Ebus' component={EbusFeed} options={{
                title: 'E-Bus Routes',
            }} />
            <Stack.Screen name='EbusScreen' options={{
                title: 'E-Bus Routes',
            }} component={EBusScreen} /> */}
            <Stack.Screen
                name="Utilities"
                component={Utilities}
                options={{
                    title: 'Utilities For Citizens',
                }}
            />
            <Stack.Screen
                name="WaterATM"
                component={WaterATM}
                options={{
                    title: 'Water ATM Near You',
                }}
            />
            <Stack.Screen
                name="SurfaceParkingFeed"
                component={SurfaceParkingFeed}
                options={{
                    title: 'Surface Parking Near You',
                }}
            />
            <Stack.Screen
                name="ToiletFeed"
                component={ToiletFeed}
                options={{
                    title: 'Toilets Near You',
                }}
            />
            <Stack.Screen
                name="ToiletScreen"
                component={ToiletScreen}
                options={{
                    title: 'Toilets Near You',
                }}
            />
            <Stack.Screen
                name="ParkingFeed"
                component={ParkingFeed}
                options={{
                    title: 'Parkings in Ayodhya',
                }}
            />
            <Stack.Screen name="ParkingComplex" component={ParkingComplex} />
            <Stack.Screen
                name="BookingEntry"
                component={BookingEntry}
                options={{
                    title: 'Enter Details',
                }}
            />
            <Stack.Screen
                name="ReviewSum"
                component={ReviewSum}
                options={{
                    title: 'Review Summary',
                }}
            />
            <Stack.Screen
                name="Tickets"
                component={Tickets}
                options={{
                    title: 'Tickets',
                }}
            />
            <Stack.Screen name="ComingSoon" component={ComingSoon} />
            <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
            <Stack.Screen name="TouristPlace" component={TouristPlace} />
        </Stack.Navigator>
    );
}

export default StackNav;
