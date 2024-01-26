import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';

const TemplateCreateButton = () => {
  return (
    <View style={styles.container}>
    <Button
        title='Create new template'
        icon={{
            name: 'plus',
            type: 'font-awesome',
            size: 25,
            color: 'white'
        }}
        iconContainerStyle={{ marginRight: 10 }}
        titleStyle={{ fontWeight: '700' }}
        buttonStyle={{
            backgroundColor: '#00bfff',
            borderColor: 'transparent'
        }}
    />
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});

export default TemplateCreateButton