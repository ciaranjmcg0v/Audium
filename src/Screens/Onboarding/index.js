/**
 * Onboarding Screen
 * 
 * TODO:
 * 
 * [x] Study the UI design and prepare constants
 * [x] Logo section
 * [x] Title and Subtitle section
 * [x] Custom button component for multiple screens
 */

import React from 'react';
import { Text,  View, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Colors, Images, Metrics } from 'Constants';
import { McText, McImage, PlayButton } from 'Components';

const Onboarding = ({ navigation }) => (
    <Container>
        <StatusBar barStyle='dark-content' />
        <McImage source={Images.logo} style={{ marginTop: 140 - 40 }} />
        <McText 
        color={Colors.primary} 
        size={24} black 
        style={{ marginTop: 28, }}>Audium</McText>
        <McText 
        color={Colors.grey4} 
        size={14}
        medium
        align='center'
        style={{
            marginHorizontal: 51,
            marginTop: 8
        }}>
            The All in One Music App
        </McText>
        <View style={{marginTop: 202}}>
            <PlayButton 
            size={78} 
            circle={70} 
            icon={Images.right_arrow}
            onPress={()=>{navigation.navigate('Home')}} />
            {/* Start sign in Process here^ */}
        </View>
    </Container>
);

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.background};
    justify-content: flex-start;
    align-items: center;
`;

export default Onboarding;