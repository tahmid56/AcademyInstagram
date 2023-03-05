import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

interface IVideoPlayer{
    uri: string;
    paused: boolean;
}

const VideoPlayer =({uri, paused}: IVideoPlayer)=> {
    const [isMuted, setIsMuted] = useState(true);
    const handleMuteClick =()=>{
        setIsMuted(value=> !value);
    }
    return (
      <View>
        <Video 
            source={{ uri }} 
            style={styles.video} 
            resizeMode="cover" 
            repeat 
            paused={paused}
            muted={isMuted}
        />
        <Pressable onPress={handleMuteClick} style={styles.muteButton}>
            <Ionicons name={isMuted ? 'volume-mute': 'volume-medium'} size={24} color='white'/>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        aspectRatio: 1,
    },
    muteButton:{
        backgroundColor: colors.black,
        padding: 5,
        position: 'absolute',
        borderRadius: 25,
        bottom: 10,
        right: 10,
    },
})

export default VideoPlayer