import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

const excerciseTypes = ['Arms', 'Back', 'Chest', 'Legs', 'Cardio'];

const SearchBar = () => {
    const [activeExcerciseType, setActiveExcerciseType] = useState();

    return (
        <View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        value=''
                        onChange={() => {}}
                        placeholder='Search excercise'
                        style={styles.searchInput}
                    />
                </View>
                <TouchableOpacity onPress={() => {}}>
                    <FontAwesome5
                        name='search'
                        size={32}
                        style={{ marginRight: 20 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={excerciseTypes}
                    horizontal
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeExcerciseType, item)}
                            onPress={() => {
                                setActiveExcerciseType(item);
                            }}
                        >
                            <Text
                                style={{
                                    color:
                                        activeExcerciseType === item
                                            ? '#000000'
                                            : '#FFFFFF'
                                }}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: 6 }}
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
        backgroundColor: 'white',
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
