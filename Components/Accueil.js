import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const RAYONS = require('../Helpers/data.json');

const Item = ({ nom_rayon, image }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{nom_rayon}</Text>
        <Image source={require('../Images/' + image)} style={styles.image} />
    </View>
);

function Home({ navigation }) {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Rayon',{nom_rayon: item.nom_rayon})}>
            <Item nom_rayon={item.nom_rayon} image={item.image} />
        </TouchableOpacity>
    );

    return (
        <ScrollView style={styles.main_vue}>
            <Text style={styles.qui} onPress={() => navigation.navigate('Qui')}>Qui est Babeth <FontAwesomeIcon icon={faAngleRight} /></Text>
            <Text style={styles.produits}>Nos produits</Text>
            <SafeAreaView style={styles.container}
            >
                <FlatList
                    data={RAYONS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
            <Text style={styles.adhesion} onPress={() => navigation.navigate('Adherer')}>Adhérer à l'association <FontAwesomeIcon icon={faAngleRight} /> </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main_vue: {
        flex: 1,
    },
    qui: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        borderBottomColor: '#555',
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    produits: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    adhesion: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center',
        borderTopWidth: 1,
        paddingTop: 15,
    },
    item: {
        //backgroundColor: 'rgba(214, 146, 98, 0.1)',
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

export default Home