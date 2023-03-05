import { View, Text, FlatList } from 'react-native'
import comments from '../../assets/data/comments.json'
import Comment from '../../components/comment/comment'
import React from 'react'

const CommentScreen = () => {
  return (
    <View>
        <FlatList
            data={comments}
            renderItem={({item})=> <Comment comment={item}/>}
        />
    </View>
  )
}

export default CommentScreen