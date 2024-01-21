import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationApp from './components/NavigationApp';

const App = () => {
    return (
        <NavigationContainer>
            <NavigationApp />
        </NavigationContainer>
    );
};

export default App;
