
import { FlatList, ViewabilityConfig, ViewToken } from "react-native";
import FeedPost from "../../../src/components/FeedPost";
import posts from '../../../src/assets/data/posts.json';
import { useRef, useState } from "react";

const HomeScreen = () =>{
    const [activePostId, setActivePostId] = useState<string | null>();
    const viewabilityConfig: ViewabilityConfig ={
        itemVisiblePercentThreshold: 51,
    }

    const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) =>{
        if(viewableItems.length > 0){
            setActivePostId(viewableItems[0].item.id)
        }
    })
    return (
            <FlatList 
                data={posts}
                renderItem={({item}) => <FeedPost post={item} isVisible={activePostId === item.id}/>}
                keyExtractor={(item)=> {
                    return `post-${item.id}`
                }}
                showsVerticalScrollIndicator={false}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
    );
};

export default HomeScreen;