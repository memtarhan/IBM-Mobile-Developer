import React from 'react';
import styled from 'styled-components/native';

const StyledComponent = () => {
    return (
        <Container>
            <Title>Hello, Styled Components!</Title>
            <StyledButton onPress={() => alert('Button Pressed!')}>
                <ButtonText>Press Me</ButtonText>
            </StyledButton>
        </Container>
    );
};
export default StyledComponent;
// Styled components
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #20A271;
`;
const Title = styled.Text`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`;
const StyledButton = styled.TouchableOpacity`
    background-color: #6200ea;
    padding: 10px 20px;
    border-radius: 5px;
`;
const ButtonText = styled.Text`
    color: #fff;
    font-size: 16px;
`;