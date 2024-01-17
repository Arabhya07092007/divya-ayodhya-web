import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, OthersIcon, TempleIcon, FoodIcon } from '../Components/SvgIcon';
import Temple from '../Tourists/Temple';
import Others from '../Tourists/Others';
import Foods from '../Tourists/Foods';

const Tab = createBottomTabNavigator();

function BottomTabNav() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#B01432',
                tabBarLabelStyle: { fontWeight: "400", fontSize: 11 },
                tabBarStyle: { backgroundColor: "#FFFEDE" },
                headerTintColor: 'black',
                headerStyle: { backgroundColor: '#FDFAE7' },
                title: 'Tourist Places in Ayodhya',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 20 },
            }}
        >
            <Tab.Screen
                name="Temple"
                component={Temple}

                options={{
                    tabBarLabel: 'Temple',
                    tabBarIcon: ({ color, size }) => (
                        <TempleIcon color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Others"
                component={Others}
                options={{
                    tabBarLabel: 'Others',
                    tabBarIcon: ({ color, size }) => (
                        <OthersIcon color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Food"
                component={Foods}
                options={{
                    tabBarLabel: 'Food',
                    tabBarIcon: ({ color, size }) => (
                        <FoodIcon color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNav;
