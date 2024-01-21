import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import ProgressScreen from '../screens/ProgressScreen';
import StartScreen from '../screens/StartScreen';
import ExcercisesScreen from '../screens/ExcercisesScreen';

const Tab = createBottomTabNavigator();

const NavigationApp = () => {
    return (
        <Tab.Navigator
            initialRouteName='Start'
            screenOptions={() => ({
                headerTintColor: '#daff6a',
                headerStyle: { backgroundColor: '#000000', height: 160 },
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold'
                },
                headerTitleAlign: 'left',
                flex: 1,
                tabBarStyle: { backgroundColor: '#000000', height: 90 }
            })}
        >
            <Tab.Screen
                name='Excercises'
                component={ExcercisesScreen}
                options={{
                    title: 'Excercise Library',
                    headerTitle: 'EXCERCISE LIBRARY',
                    tabBarActiveTintColor: '#daff6a',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name='book-open'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Start'
                component={StartScreen}
                options={{
                    title: 'Start Workout',
                    headerTitle: 'START WORKOUT',
                    tabBarActiveTintColor: '#daff6a',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name='dumbbell'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Progress'
                component={ProgressScreen}
                options={{
                    title: 'Progress',
                    headerTitle: 'PROGRESS',
                    tabBarActiveTintColor: '#daff6a',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name='square-check'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default NavigationApp;
