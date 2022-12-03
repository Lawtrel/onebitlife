import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native-gesture-handler";

export default function AppEX() {
    function handleSetShowHome(){
        console.log("Clickou");
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.title}>
                        Antes, deixa {"\n"} eu te explicar...
                    </Text>
                    <Text styles={styles.descriptionCta}>
                        Pronto para subir de nivel na vida?
                    </Text>
                    <Text styles={styles.description}>
                        Na Proxima tela voce vai poder escolher {"\n"} seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={"Continuar"}
                        handlePress={handleSetShowHome}
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
    }
});