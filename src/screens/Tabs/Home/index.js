import React from 'react';
import {Text, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

const BackgroundContainer = styled.View`
  backgroundColor: ${({theme}) => theme.secondary};
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <BackgroundContainer>
      <Text style={{color: 'white'}}>Home</Text>
    </BackgroundContainer>
  );
};

export default Home;
