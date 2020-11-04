import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

function Rayon({ route, navigation }) {
    const { nom_rayon } = route.params;
    return (
        <View style={styles.main_vue}>
            <Text>Retrouvez bientôt ici tous les produits de votre rayon {JSON.stringify(nom_rayon)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_vue: {
        flex:1,
        margin: 20
    }
})

export default Rayon