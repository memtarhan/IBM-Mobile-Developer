import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(previousMode => !previousMode);
    };
    return (
        <View style={[styles.container, {backgroundColor: isDarkMode ? '#333' : '#FFF'}]}>
            <Text style={[styles.text, {color: isDarkMode ? '#FFF' : '#000'}]}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </Text>
            <Button title="Toggle Theme" onPress={toggleTheme}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});
export default ThemeToggle;