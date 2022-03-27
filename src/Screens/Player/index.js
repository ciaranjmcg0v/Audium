/**
 * Player Screen
 * 
 * TODO:
 * 
 * [x] Header section
 * [x] Music detail section
 * [x] Slider section (@react-native-community/slider)
 * [x] Control buttons section
 * [x] Lyrics section
 * ----------------------------------------------------
 * [] Add conditions to buttons (e.g. if play btn pressed -> show 'pause' image)
 *    ^- refresh btn should shuffle current playlist
 *    ^- back btn should play previous track in playlist
 *    ^- play btn pressed toggles between play & pause image | also pauses or resumes track
 *    ^- next btn should play next track in playlist
 *    ^- sound btn pressed toggles between sound on & mute image | also enables sound or mutes track
 *    ^- menu btn should open side menu
 * [] Adjust slider to song playtime (slider should move with time elapsed)
 * ----------------------------------------------------]
 */

import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';

import { Colors, Images, Metrics } from 'Constants';
import { McText, McImage, PlayButton } from 'Components';
import { dummyData } from 'Mock';

const Player = ({ navigation, route }) => {

    const [selectedMusic, setSelectedMusic] = useState(null);

    useEffect(() => {
        let { selectedMusic } = route.params;
        setSelectedMusic(selectedMusic);
    }, [])

    return (
        <Container>
            <StatusBar barStyle='light-content' />

            {/** Header Section */}
            <HeaderSection style={{
                marginTop: 15
            }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <McImage source={Images.left} />
                </TouchableOpacity>
                <McImage source={Images.menu} />
            </HeaderSection>

            {/** Music Detail Section */}
            <MusicDetailSection>
                <McImage source={selectedMusic?.thumbnail} style={{
                    marginHorizontal: 81,
                    marginVertical: 30,
                    borderRadius: 15,
                    height: 175,
                    width: 175
                }} />
                <View style={{
                    marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <McText
                        semi
                        size={24}
                        color={Colors.grey5}
                        align="center">{selectedMusic?.title}</McText>
                    <McText
                        medium
                        size={14}
                        color={Colors.grey3}
                        style={{ marginTop: 8 }}
                        align="center">{selectedMusic?.artist}</McText>
                </View>
            </MusicDetailSection>

            {/* Slider Section */}
            <SliderSection>
                <Slider
                    minimumValue={0}
                    maximumValue={1}
                    value={0.5}
                    minimumTrackTintColor={Colors.primary}
                    maximumTrackTintColor={Colors.grey3}
                // thumbImage={Images.thumb}
                >
                </Slider>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <McText size={12} color={Colors.grey4}>0.33</McText>
                    <McText size={12} color={Colors.grey4}>3.45</McText>
                </View>
            </SliderSection>

            {/* Control Buttons Section */}
            <ControlSection>
                <McImage source={Images.refresh} />
                <View style={{
                    width: 231,
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 231,
                        height: 54,
                        borderRadius: 54,
                        backgroundColor: Colors.secondary,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <McImage source={Images.back} style={{ marginLeft: 24 }} />
                        <View style={{
                            width: 88,
                            height: 88,
                            borderRadius: 88,
                            backgroundColor: Colors.background,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <PlayButton size={70} circle={62.82} icon={Images.play}></PlayButton>
                        </View>
                        <McImage source={Images.next} style={{ marginRight: 24 }} />
                    </View>
                </View>
                <McImage source={Images.sound} />
            </ControlSection>

            {/* Lyrics Section */}
            <LyricsSection>
                <McImage source={Images.up}/>
                <McText medium size={14} color={Colors.accent}>Lyrics</McText>
            </LyricsSection>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.background};
`;

const HeaderSection = styled.View`
    margin: 12px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MusicDetailSection = styled.View`
    margin: 0px 24px;
    justify-content: center;
    align-items: center;
`;

const SliderSection = styled.View`
    margin: 0px 24px;
`;

const ControlSection = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const LyricsSection = styled.View`
    margin: 14px 0px;
    align-items: center;
    justify-content: center;
`;

export default Player;