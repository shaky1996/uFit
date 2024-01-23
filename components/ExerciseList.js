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
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const ExerciseList = () => {
    const tabBarHeight = useBottomTabBarHeight();
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
                        data={Object.values(data)}
                        renderItem={({ item }) => <ExerciseCard item={item} />}
                        keyExtractor={(item) => item?.id}
                        contentContainerStyle={{ rowGap: 5, paddingBottom: 40 }}
                    />
                    
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flex: 1
    },
    cardsContainer: {
        marginTop: 16
    },
});

export default ExerciseList;
