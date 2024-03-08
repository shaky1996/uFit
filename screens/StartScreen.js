import { View, Text, ScrollView } from 'react-native';
import TemplatesExercise from '../components/workouts/TemplatesExercise';


const StartScreen = () => {
    return (
        <ScrollView>
        <View
            style={{ flex: 1 }}
        >
        <TemplatesExercise />
        </View>
        </ScrollView>
    );
};

export default StartScreen;
