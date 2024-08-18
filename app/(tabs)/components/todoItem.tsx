import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function TodoItem({ item, pressHandler }) {

    if (!item) {
        return null;
    }
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }

})