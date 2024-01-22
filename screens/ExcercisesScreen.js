import { View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ExerciseList from '../components/ExerciseList';

const ExcercisesScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <SearchBar />
            <ExerciseList />
        </View>
    );
};

export default ExcercisesScreen;
