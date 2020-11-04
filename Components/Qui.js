import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Qui() {

    return (
        <View style={styles.main_vue}>
            <Text>Merci Babeth ! C’est l’histoire d’une habitante de Sainte-Elisabeth au Blosne, à Rennes, souhaitant dynamiser la vie de son cher et tendre quartier. Le tout en privilégiant un mode de vie sain et un mode de consommation durable et éco-responsable.
            Prenant son courage à deux mains, elle agit et créée l’association
            Merci Babeth ! Son objectif principal est de faire partager au plus
            grand nombre sa passion pour les produits locaux et de saison.
            L’association soutient les producteurs locaux en
            s’approvisionnant majoritairement auprès de producteurs bretons mais
            aussi auprès de producteurs dans toute la France pour certains
            produits que nous ne trouvons pas dans notre chère et tendre Bretagne.
          </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_vue: {
        flex: 1,
        margin: 20
    },
})
export default Qui