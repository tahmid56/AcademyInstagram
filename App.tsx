
import FeedPost from "./src/components/FeedPost";
import posts from './src/assets/data/posts.json';
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CommentScreen from "./src/screens/CommentScreen/CommentScreen";

const App = () =>{
    return (
        <View style={styles.app}>
            {/* <HomeScreen/> */}
            <CommentScreen/>
        </View>
    );
};

const styles = StyleSheet.create({
    app:{
        flex: 1
    }
})

export default App;