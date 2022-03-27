/**
 * Library Screen
 * 
 * TODO:
 * 
 * [x] Header section
 * [x] Search section
 * [x] Playlists section (flatlist)
 * [x] Favourite section (ScrollView)
 * [x] Bottom bar section (react-native-svg)
 * ----------------------------------------------------
 * [] Rename dummyData file after connecting to Spotify - 
 *    This will store songs/playlists and all other required 
 *    data from API
 * [] Add tap-hold functionality on selected song/album to bring up context menu
 * ----------------------------------------------------
 */

 import React from 'react';
import {
    Text,
    View,
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    FlatList,
    ScrollView } from 'react-native';
 import styled from 'styled-components/native';
 import { Colors, Images, Metrics } from 'Constants';
 import { McText, McImage, PlayButton } from 'Components';
 import { dummyData } from 'Mock';
 import BottomBar from './BottomBar';
 
 const Library = ({ navigation }) => {

    const _renderItem = ({item, index}) => {
        return (
            <View>
                <View style={{
                    marginTop: 16,
                    marginLeft: index ===0? 24:0,
                    marginRight: index === dummyData.Playlists.length - 1?0:24}}>
                    <McImage 
                    key={index} 
                    source={item.thumbnail}
                    style={{
                        marginBottom: 12
                    }}/>
                    <McText semi size={16} color={Colors.grey5}>{item.name}</McText>
                    <McText 
                    medium 
                    size={12} 
                    color={Colors.grey3}
                    style={{marginTop: 4}}>{item.songs} songs</McText>
                </View>
            </View>
        )
    }
 
 return (
    <Container>
    <StatusBar barStyle='light-content' />

    {/** Header section */}
    <McText 
    bold 
    size={28} 
    color={Colors.primary}
    style={{
        marginLeft: Metrics.padding,
        marginTop: 12,             
    }}>Music Library</McText>

    {/** Search Section */}
    <SearchSection>
       <McImage 
           source={Images.find}
           style={{ marginLeft: 16, marginRight: 12 }}>                
       </McImage>
       <TextInput
           placeholder="Song or Artist"
           placeholderTextColor={Colors.grey3}
           style={{
               color: Colors.grey4
       }}></TextInput>
    </SearchSection>

    {/** Playlist Section */}
    <TitleSection>
       <McText medium size={20} color={Colors.grey4}>
           Playlists
       </McText>
       <TouchableWithoutFeedback onPress={()=> {
           console.log('Go to playlists page')
       }}>
           <McImage source={Images.right} />
       </TouchableWithoutFeedback>
    </TitleSection>
    <View>
        <FlatList
        keyExtractor={(item) => 'playlist_' + item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
        data={dummyData.Playlists}
        renderItem={_renderItem}/>
    </View>

    {/** Favourites Section */}
    <TitleSection>
       <McText medium size={24} color={Colors.grey4}>
           Favourites
       </McText>
       <TouchableWithoutFeedback onPress={()=> {
           console.log('Go to Favourites page')
       }}>
           <McImage source={Images.right} />
       </TouchableWithoutFeedback>
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
                        <FavouriteItemView key={index}>
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
                        </FavouriteItemView>
                    )
                })
            }

        </ScrollView>
    </View>

    {/** Bottom PlayBar Section */}
    <BottomSection>
        <BottomBar>
            <TouchableWithoutFeedback onPress={() => {
                navigation.navigate('Player')
            }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                marginHorizontal: 16,
                marginVertical: 12
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <McImage source={require('Assets/images/album2.png')}
                    style={{
                        width: 38,
                        height: 38,
                        borderRadius: 50                        
                    }} />
                    <View style={{marginLeft: 12}}>
                        <McText bold size={16} color={Colors.grey5} style={{marginTop: 2}}>Animals</McText>
                        <McText medium size={12} color={Colors.grey3} style={{marginTop: 4}}>Nickelback</McText>
                    </View>
                </View>
                    <PlayButton size={46} circle={41.28} icon={Images.stop}></PlayButton>
            </View>
            </TouchableWithoutFeedback>
        </BottomBar>
    </BottomSection>
    
</Container>
 );

} 
 
 const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.background};
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

 export const FavouriteItemView = styled.View`
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
 
 export default Library;