import React from 'react'

import {StyleSheet, Text, View} from 'react-native'

const Interface = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Técnico em Desenvolvimento de Sistemas</Text>
        <Text style={styles.text}>Guilherme Augusto Araujo dos Santos</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 300,
        backgroundColor: '#8257e6',
        justifyContent: 'center',
    },
    text:{
        color:'white',
        fontSize: 30,
    }
});

export default Interface