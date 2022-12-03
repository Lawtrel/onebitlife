import React from "react";
import { View, Text, StyleSheet, ScrollView ,handleSetShowHome } from "react-native";
import DefaultButton from "../../components/DefaultButton";
import ExplanationCard from "../../components/Explanation/ExplanationCard";
import { useNavigation } from "@react-navigation/native";

export default function AppEX() {
    const navigation = useNavigation();
    function handleNavHome(){
        navigation.navigate("Home");
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <ExplanationCard/>
                    <Text style={styles.descriptionCta}>
                        Pronto para subir de nivel na vida?
                    </Text>
                    <Text style={styles.description}>
                        Na Proxima tela voce vai poder escolher {"\n"} seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleNavHome}
                        width={250}
                        height={50}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",   
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAllign: "center",
        marginVertical: 40,
    },
    descriptionCta: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        color: "white",
        textAllign: "center",
        marginBottom: 30,
    },
});