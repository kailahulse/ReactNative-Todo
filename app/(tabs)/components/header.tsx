import { View, Text, TextInput, Button, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 60,
        backgroundColor: 'coral'
    },

    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    }
});