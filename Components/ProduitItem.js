import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


class ProduitItem extends React.Component {
    render() {
        const produit = this.props.produit
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{produit.nom_produit}</Text>
                <Text>Nom du producteur : {produit.nom_producteur}</Text>
                <Text>Prix : {produit.prix} €/{produit.unite}</Text>
                <Text>{produit.image}</Text>
                <Text>{produit.description}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_vue: {
        flex: 1,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200
    }
});

export default ProduitItem