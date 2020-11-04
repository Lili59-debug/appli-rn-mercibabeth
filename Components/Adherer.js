import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Adherer() {
    return (
        <View style={styles.main_vue}>
            <Text>Pourquoi adhérer à l'association ?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_vue: {
        flex: 1,
        margin:20
    },
})

export default Adherer