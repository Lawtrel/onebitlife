import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../../components/DefaultButton";
import LifeStatus from "../../components/LifeStatus";

export default function Start(){

    const handleNavAppExplanation = () => {
        console.log("Clickou");
    };
    
    return(
    <View style={styles.container}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center"}}>
                <Image
                    source={require("../../assets/icons/logo3.png")} 
                    style={styles.logo}/>
                <LifeStatus />
                <Text style={styles.description}>
                    Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"}{" "} o melhor nivel.
                </Text>

                <DefaultButton
                buttonText={"Continuar"}
                handlePress={handleNavAppExplanation}
                width={250}
                height={50}
                />

            </View>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
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