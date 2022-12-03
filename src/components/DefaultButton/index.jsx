import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height,
}) {
    return (
        <TouchableOpacity 
        style={[styles.button, {width: width, height: height}]}
        activeOpacity={0.7} onPress={handlePress}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        allignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 10,
        marginBottom: 20,
    },

    buttonText: {
        color:  "#FFF",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
});