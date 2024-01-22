import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { useState } from 'react';
import ExerciseCard from './ExerciseCard';
import useFetch from '../hook/useFetch';

const ExerciseList = () => {
    const { data, isLoading, error } = useFetch();
    console.log(data);

    return (
        <View style={styles.container}>
            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={'black'} />
                ) : error ? (
                    <Text>Something went wrong :/</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <ExerciseCard item={item} />}
                        keyExtractor={(item = item.id)}
                        contentContainerStyle={{}}
                    />
                )}
                <Text>Hello</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    cardsContainer: {
        marginTop: 16
    }
});

export default ExerciseList;
