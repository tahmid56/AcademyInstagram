
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import styles from "./styles";
import Comment from "../comment/comment";
import { IPost } from "../../types/models";
import DoublePressable from '../DoublePressable';
import Carousel from "../Carousel";
import VideoPlayer from "../VideoPlayer";

interface IFeedPost  {
    post: IPost;
    isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) =>{
    const [isLiked, setIsLiked] = useState(false);
    const [isDescExpanded, setIsDescExpanded] = useState(false);
    const toggleISDescExpanded = ()=>{
        setIsDescExpanded(value=> !value);
    }
    const toggleIsLiked = ()=>{
        setIsLiked(value => !value);
    }
    let content = null;
    if(post.image){
        content = (
            <DoublePressable onDoublePress={toggleIsLiked}>
                <Image source={{uri: post.image,}} style={styles.image}/>
            </DoublePressable>
        );
    }else if(post.images){
        content = (
            <Carousel images={post.images} toggleIsLiked={toggleIsLiked}/>
        )
    }else if(post.video){
        content = (
            <DoublePressable onDoublePress={toggleIsLiked}>
                <VideoPlayer uri={post.video} paused={!isVisible}/>
            </DoublePressable>
        )
    }
    

    return (
        <View style={styles.post}>
            
            {/* Header */}
            <View style={styles.header}>
                <Image source={{uri: post.user.image }} style={styles.userAvatar}/>
                <Text style={styles.userName}>{post.user.username}</Text>
                <Entypo name='dots-three-horizontal' size={16} style={styles.threeDots}/>
            </View>
            
            {/* Content */}
                {content}
            {/* Footer */}
            <View style={styles.footer}>
                <View style={styles.iconContainer}>
                    <AntDesign name={isLiked ? 'heart' : 'hearto'} onPress={toggleIsLiked} color={isLiked ? colors.accent: colors.black} size={24} style={styles.icon}/>
                    <Ionicons name="chatbubble-outline" size={24} style={styles.icon} color={colors.black}/>
                    <Feather name="send" size={24} style={styles.icon} color={colors.black}/>
                    <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} color={colors.black}/>
                </View>
                
                {/* Likes */}
                <Text style={styles.text}>Liked by {' '}
                    <Text style={styles.bold}>{post.user.username}</Text> and {' '}
                    <Text style={styles.bold}>{post.noOfLikes} others</Text>
                </Text>

                {/* Post description */}
                <Text style={styles.text} numberOfLines={isDescExpanded ? 0 : 3}>
                    <Text style={styles.bold}>{post.user.username}</Text> {""}
                    {post.description}
                </Text>
                <Text onPress={toggleISDescExpanded}>{isDescExpanded ? "less": "more"}</Text>

                {/* Comments */}
                <Text>View all {post.noOfComments} comments</Text>

                {post.comments.map(comment=>(
                    <Comment key={comment.id} comment={comment}/>
                ))}
                
                {/* Posted date */}
                <Text>19 December, 2021</Text>
            </View>
        </View>
    );
};



export default FeedPost;