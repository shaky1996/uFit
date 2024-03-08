import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

//Search bar in exercise library screen. It lets users to filter through body parts or just find exercise by user's input

const exerciseTypes = ['Arms', 'Back', 'Chest', 'Legs', 'Cardio', 'Waist']; 

const SearchBar = ({ exercisesData, onSearch }) => {
    const [search, setSearch] = useState('');
    const [activeExerciseType, setActiveExerciseType] = useState(); // body parts filter

    const handleSearch = () => {
        let filteredResults = exercisesData;

        if (activeExerciseType) {
            // Filter results based on the selected body part
            filteredResults = exercisesData.filter((exercise) => exercise.bodyPart.toLowerCase() === activeExerciseType.toLowerCase());
        }

        // Further filter based on search text
        filteredResults = filteredResults.filter((exercise) =>
            exercise.name.toLowerCase().includes(search.toLowerCase())
        );

        onSearch(filteredResults);
    };

    const handleFilterPress = (item) => {
        if (item === activeExerciseType) {
            // Clicking on the same filter button again, reset the filter
            setActiveExerciseType(null);
        } else {
            setActiveExerciseType(item);
        }
    };

    useEffect(() => {
        handleSearch();
    }, [activeExerciseType, search]);


    return (
        <View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        value={search}
                        onChangeText={(text) => {
                            setSearch(text);
                            handleSearch(text || exercisesData); 
                        }}
                        onEndEditing={handleSearch}
                        placeholder='Search exercise'
                        style={styles.searchInput}
                        clearButtonMode='always'
                        autoCapitalize='none'
                    />
                </View>
                <TouchableOpacity onPress={handleSearch}>
                    <FontAwesome5
                        name='search'
                        size={32}
                        style={{ marginRight: 20 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={exerciseTypes}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeExerciseType, item)}
                            onPress={() => handleFilterPress(item)}
                        >
                            <Text
                                style={{
                                    color:
                                        activeExerciseType === item
                                            ? '#000000'
                                            : '#FFFFFF'
                                }}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: 2 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        height: 50
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: '100%'
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16
    },
    searchBtn: {
        width: 50,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabsContainer: {
        width: '100%',
        marginTop: 10,
        alignItems: 'center'
    },
    tab: (activeJobType, item) => ({
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 16,
        borderWidth: 1,
        backgroundColor: activeJobType === item ? '#daff6a' : '#000000',
        margin: 0
    })
});

export default SearchBar;
