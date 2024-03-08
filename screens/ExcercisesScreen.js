import { View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/exercises/SearchBar';
import ExerciseList from '../components/exercises/ExerciseList';
import { useState } from 'react';
import { exercisesData } from '../constants/exercisesData';

const ExcercisesScreen = () => {

    const [searchResults, setSearchResults] = useState(exercisesData);

    const handleSearch = (results) => {
        setSearchResults(results);
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SearchBar exercisesData={exercisesData} onSearch={handleSearch} />
            <ExerciseList data={searchResults} />
        </View>
    );
};

export default ExcercisesScreen;
