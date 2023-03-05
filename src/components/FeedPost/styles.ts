import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    post: {

    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    userAvatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userName: {
        fontWeight: fonts.weight.bold,
        color: colors.black,
    },
    threeDots: {
        marginLeft: "auto"
    },
    iconContainer: {
        flexDirection: "row",
        marginBottom: 5
    },
    icon: {
        marginHorizontal: 5,
    },
    footer: {
        padding: 10,
    },
    text: {
        color: colors.black,
        lineHeight: 18
    },
    bold: {
        fontWeight: fonts.weight.bold,
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    commentText: {
        color: colors.black,
        lineHeight: 18,
        flex: 1
    }
});

export default styles;