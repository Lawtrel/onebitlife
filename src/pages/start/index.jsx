import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function Start(){
    return(
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center"}}>
                <Image source={require("../../assests/icons/logo3.png")} 
                style={styles.logo}/>
                <Text style={styles.description}>
                    Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"}{" "} o melhor nivel.
                </Text>
            </View>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: "rgba(21, 21, 21, 0.98)",
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },
    description: {
        color: "#FFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60,
    },
});