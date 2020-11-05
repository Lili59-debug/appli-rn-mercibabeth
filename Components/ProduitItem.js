import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class ProduitItem extends React.Component {

    render() {
        const produit = this.props.produit
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{produit.nom_produit}</Text>
                <Image source={require('../Images/' + produit.image)} style={styles.image} />
                <Text>Nom du producteur : {produit.nom_producteur}</Text>
                <Text>Prix : {produit.prix} €/{produit.unite}</Text>
                <Text>{produit.description}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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