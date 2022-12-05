import React from "react";
import {View, StyleSheet, Image} from "react-native";
import {ProgressBar} from "react-native-paper";
import LifeStatus from "../../../components/LifeStatus";

export default function StatusBar() {
    return(
        <View style={StyleSheet.container}>
            <View style={styles.StatusBarContainer}>
            <Image
            source= {require("../../../assets/icons/educationIcon.png")}
            style={styles.icon}
            />
        <ProgressBar progress={1} color={"#90B7F3"} style={styles.progress} />
            </View>

            <View style={styles.StatusBarContainer}>
            <Image
            source= {require("../../../assets/icons/moneyIcon.png")}
            style={styles.icon}
            />
        <ProgressBar progress={0} color={"#85BB65"} style={styles.progress} />
            </View>

            <View style={styles.StatusBarContainer}>
            <Image
            source= {require("../../../assets/icons/bodyIcon.png")}
            style={styles.icon}
            />
        <ProgressBar progress={0} color={"#FF0043"} style={styles.progress} />
            </View>

            <View style={styles.StatusBarContainer}>
            <Image
            source= {require("../../../assets/icons/funIcon.png")}
            style={styles.icon}
            />
        <ProgressBar progress={0} color={"#FE7F23"} style={styles.progress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#151515",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
    },

    StatusBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },

    progress: {
        borderRadius: 10,
        width: 250,
        height: 8,
    },
    icon: {
       width: 25,
       height: 25,
       marginRight: 5, 
    },
})