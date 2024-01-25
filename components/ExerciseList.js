import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import ExerciseCard from './ExerciseCard';

const ExerciseList = ({ data }) => {

    return (
        <View style={styles.container}>
            <View style={styles.cardsContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <ExerciseCard item={item} />}
                    keyExtractor={(item) => item?.id}
                    contentContainerStyle={{ rowGap: 5, paddingBottom: 0 }}
                />
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
    }
});

export default ExerciseList;
