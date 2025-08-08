import {SafeAreaView, ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import FlexboxExample from './src/FlexboxExample';
import FlexPropertyExample from './src/FlexPropertyExample';
import StyledComponent from "./src/StyledComponent";
import ThemeToggle from "./src/ThemeToggle";
import UserForm from "./src/UserForm";

const App = () => {
    const theme = useColorScheme(); // 'light' or 'dark'

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
                    <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
                        Hello, World!
                    </Text>
                    <FlexboxExample></FlexboxExample>
                    <FlexPropertyExample></FlexPropertyExample>
                    <StyledComponent></StyledComponent>
                    <ThemeToggle></ThemeToggle>
                    <UserForm></UserForm>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    darkContainer: {
        backgroundColor: '#333',
    },
    text: {
        color: 'blue',
        fontSize: 20,
    },
    darkText: {
        color: 'white',
    },
});


export default App;