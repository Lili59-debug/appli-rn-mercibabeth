import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

function Contact() {

    return (
        <View style={styles.main_vue}>
            <Text>Pour nous contacter, merci de remplir et d'envoyer ce formulaire. Nous vous répondrons dès que possible.</Text>
            <TextInput
                style={styles.input}
                placeholder="Votre nom"
                autoCompleteType='name'
                maxLength='50'
            />
            <TextInput
                style={styles.input}
                placeholder="Votre email"
                autoCompleteType='email'
                maxLength='100'
            />

            <TextInput
                multiline
                numberOfLines={4}
                style={styles.textarea}
                placeholder="Votre message"
            />

            <Button
                title="Envoyer"
                color="#d69262"
                accessibilityLabel="Envoyer votre message"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main_vue: {
        flex: 1,
        margin: 20,
        textAlign: 'center'
    },
    input: {
        margin: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding:5
    },
    textarea: {
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        padding:5
    }
})

export default Contact