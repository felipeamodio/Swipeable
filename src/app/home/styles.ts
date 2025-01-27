import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        padding: 24
    },
    content: {
        gap: 14
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#FFFFFF",
        marginTop: 60,
        marginBottom: 20
    },
    rightActions: {
        flexDirection: "row"
    },
    leftActions: {
        backgroundColor: "#E83D55",
        flex: 1
    },
    swipeableContainer: {
        borderRadius: 5
    }
})