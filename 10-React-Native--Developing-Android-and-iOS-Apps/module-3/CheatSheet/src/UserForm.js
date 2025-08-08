import React, {useReducer} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

const initialState = {
    name: '',
    email: '',
    phone: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'updateName':
            return {...state, name: action.payload};
        case 'updateEmail':
            return {...state, email: action.payload};
        case 'updatePhone':
            return {...state, phone: action.payload};
        case 'reset':
            return initialState;
        default:
            throw new Error('Unknown action type');
    }
}

function UserForm() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = () => {
        console.log('Form Data:', state);
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={state.name}
                onChangeText={text => dispatch({type: 'updateName', payload: text})}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={state.email}
                onChangeText={text => dispatch({type: 'updateEmail', payload: text})}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={state.phone}
                onChangeText={text => dispatch({type: 'updatePhone', payload: text})}
            />
            <Button title="Submit" onPress={handleSubmit}/>
            <Button title="Reset" onPress={() => dispatch({type: 'reset'})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});
export default UserForm;