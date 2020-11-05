import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, SafeAreaView } from 'react-native';
import ProduitItem from './ProduitItem'

const PRODUITS = require('../Helpers/produits.json');

class Rayon extends Component {

    render() {
        const lien_bdd = this.props.route.params.infos.lien_bdd;
        const nom_rayon = this.props.route.params.infos.nom_rayon;
        const liste_produits = PRODUITS.filter(element => element.categorie === lien_bdd);

        return (
            <ScrollView style={styles.main_vue}>
                <Text>Bienvenue dans le rayon {nom_rayon}</Text>
                <SafeAreaView>
                    <FlatList
                        data={liste_produits}
                        renderItem={({ item }) => <ProduitItem produit={item} />}
                        keyExtractor={item => item.nom_produit}
                    />
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main_vue: {
        flex: 1,
        margin: 20,
        textAlign: 'center'
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
})

export default Rayon