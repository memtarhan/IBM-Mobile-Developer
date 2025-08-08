import React from 'react';
import {View, StyleSheet} from 'react-native';

const FlexboxExample = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}/>
            <View style={styles.box}/>
            <View style={styles.box}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        margin: 5,
    },
});

export default FlexboxExample;