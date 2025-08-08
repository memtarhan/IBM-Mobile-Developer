import {View, StyleSheet} from 'react-native';

const FlexPropertyExample = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, {flex: 1}]}/>
            <View style={[styles.box, {flex: 2}]}/>
            <View style={[styles.box, {flex: 3}]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    box: {
        height: 100,
        backgroundColor: 'lightseagreen',
        margin: 5,
    },
});

export default FlexPropertyExample;