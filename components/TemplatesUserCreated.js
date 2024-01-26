import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';
import TemplateCard from './TemplateCard';
import { templateRoutines } from '../constants/templateRoutines';

const TemplatesUserCreated = () => {
    return (
        <View>
            <View style={styles.myTemplates}>
                <Text style={styles.myTemplatesText}>Exercise templates</Text>
            </View>

            <View style={styles.cardsContainer}>
                <FlatList
                    data={templateRoutines}
                    renderItem={({ item }) => <TemplateCard item={item} />}
                    keyExtractor={(item) => item?.id}
                    contentContainerStyle={{ rowGap: 1, paddingBottom: 0 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    myTemplates: {},
    myTemplatesText: {
        marginTop: 20,
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold'
    },
    cardsContainer: {
        marginTop: 16
    }
});

export default TemplatesUserCreated;
