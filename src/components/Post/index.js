import React, {useState} from 'react';
import {Text, View, TouchableWithoutFeedback, Image,TouchableOpacity} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Sample from '../../Assets/Video/SampleVideo_720x480_10mb.mp4';

// ICON

import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {



    // const {post} = props

    const [post, setPost] = useState(props.post)
    const [isLiked, setisLiked] = useState(false)
    const [paused, setPaused] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused);
    };

    const likeToAdd = isLiked?-1:1;
    const onLikePress = ()=>{
        setPost({
            ...post,
            likes: post.likes + likeToAdd,
          });
          setisLiked(!isLiked)
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                    source={{uri: post.videoUri}}
                    // {uri: post.videoUri}
                    style={styles.video}
                    resizeMode={'cover'}
                    // onError = {(e:LoadError)=>console.log(e)}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>
            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>
                    <View style={styles.profilePictureContainer}>
                        <Image
                            style={styles.profilePicture}
                            source={{uri:post.user.imageUri}}
                        />
                    </View>

                    <TouchableOpacity onPress={onLikePress} style={styles.iconContainer}>
                    
                        <AntDesign name={'heart'} size={30} color={isLiked?'red':'#fff'} />
                        <Text style={styles.statesLable}>{post.likes}</Text>
                    </TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <FontAwesome name={'commenting'} size={30} color="#fff" />
                        <Text style={styles.statesLable}>{post.comments}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Fontisto name={'share-a'} size={25} color="#fff" />
                        <Text style={styles.statesLable}>{post.shares}</Text>
                    </View>
                </View>


                <View style={styles.bottomContainer}>

                    <View>

                        <Text style={styles.handel}>@{post.user.username}</Text>
                        <Text style={styles.description}>{post.description}</Text>
                        <View style={styles.songRow}>
                            {/* Music Logo */}
                            <Foundation name={'music'} size={24} color="#fff" />
                            {/* Song Name  */}
                            <Text style={styles.songName}>
                                {post.songName}
                            </Text>
                        </View>

                    </View>
                    <Image
                        style={styles.songImage}
                        source={{uri: post.songImage}}
                    />
                </View>
            </View>
        </View>
    );
};

export default Post;

// 1:38:16