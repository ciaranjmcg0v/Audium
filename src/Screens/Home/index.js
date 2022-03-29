/**
 * Home Screen
 * 
 * TODO:
 * 
 * [x] Header section
 * [x] Search section
 * [x] Recently Played section (flatlist)
 * ----------------------------------------------------
 * [] Authenticate user 
 * [] Display Username greeting
 * [] Display User Account Image
 * ----------------------------------------------------
 */

 import React from 'react';
import {
    View,
    StatusBar,
    TouchableWithoutFeedback,
    ScrollView } from 'react-native';
 import styled from 'styled-components/native';
 import { Colors, Images } from 'Constants';
 import { McText, McImage } from 'Components';
 import { dummyData } from 'Mock';
//  import BottomBar from '../Library/BottomBar';
 
 const Home = ({ navigation }) => {
 
 return (
    <Container>
    <StatusBar barStyle='light-content' />

    {/** Home/Profile View section */}
  <HomeProfileView>
    <McImage source={Images.logo} style={{ marginTop: 40 }} />
          <McText 
          color={Colors.grey4} 
          size={14}
          medium
          align='center'
          style={{
              marginHorizontal: 51,
              marginTop: 8
          }}>
              Good Morning, Username!
          </McText>
  </HomeProfileView>

    {/** Recently Played Section */}
    <TitleSection>
       <McText medium size={24} color={Colors.grey4} style={{
         marginTop: 40
       }}>
        Recently played
       </McText>
    </TitleSection>
    <View>
        <ScrollView
        contentContainerStyle={{
            marginTop: 14, height: 200
        }}
        style={{}}>
            {
                dummyData.Favourites.map((item, index) => {
                    return (
                        <RecentlyPlayedView key={index}>
                            <TouchableWithoutFeedback onPress={() => {
                                navigation.navigate('Player', {selectedMusic: item})
                            }}>
                            <View style={{flexDirection: 'row'}}>
                                <MusicCircle>
                                    <McImage source={Images.music} />
                                </MusicCircle>
                                <View style={{ marginLeft: 12 }}>
                                    <McText
                                    semi
                                    size={14}
                                    color={Colors.grey5}
                                    style={{marginTop: 2}}>
                                        {item.title}
                                    </McText>
                                    <McText
                                    semi
                                    size={12}
                                    color={Colors.grey3}
                                    style={{marginTop: 4}}>{item.artist}</McText>
                                </View>
                            </View>
                            </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => {
                                    console.log('Remove selected song from favourites')
                                }}>
                                    <McImage
                                    source={Images.like_filled}
                                    style={{marginTop: 4}}/>
                                </TouchableWithoutFeedback>
                        </RecentlyPlayedView>
                    )
                })
            }

        </ScrollView>
    </View>
    
    {/** Go To Library Section */}
    <TitleSection>
       <McText medium size={20} color={Colors.grey4}>
           Library
       </McText>
       <TouchableWithoutFeedback onPress={()=> {
           navigation.navigate('Library')
       }}>
           <McImage source={Images.right} />
       </TouchableWithoutFeedback>
    </TitleSection>
    
    {/** Go To Settings Section */}
    <TitleSection>
       <McText medium size={20} color={Colors.grey4}>
           Settings
       </McText>
       <TouchableWithoutFeedback onPress={()=> {
           navigation.navigate('Settings')
       }}>
           <McImage source={Images.right} />
       </TouchableWithoutFeedback>
    </TitleSection>
    
</Container>
 );

} 
 
 const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.background};
 `;

 const HomeProfileView = styled.View`
    background-color: ${Colors.background};
    justify-content: flex-start;
    align-items: center;
 `;

 const SearchSection = styled.View`
    width: 90%; 
    height: 8%;
    border-radius: 30px;
    background-color: ${Colors.secondary};
    marginTop: 20px;
    align-self: center;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
 `;

 export const TitleSection = styled.View`
    margin: 20px 24px 0px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
 `;

 export const RecentlyPlayedView = styled.View`
    margin: 10px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
 `;

 const MusicCircle = styled.View`
    width: 42px;
    height: 42px;
    border-radius: 42px;
    background-color: ${Colors.secondary};
    align-items: center;
    justify-content: center;
 `;

 const BottomSection = styled.View`
    margin: 0px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    bottom: 20px;
    left: 0px;
    z-index: 1;
 `;
 
 export default Home;