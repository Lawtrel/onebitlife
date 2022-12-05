import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import LifeStatus from "../../components/LifeStatus";
import StatusBar from "../Home/StatusBar";

export default function Home() {
    const navigation = useNavigation();
    const [mindHabit, setMindHabit] = useState();
    const [moneyHabit, setMoneyHabit] = useState();
    const [bodyHabit, setBodyHabit] = useState();
    const [funHabit, setFunHabit] = useState();

    function handleNavExplanation(){
        navigation.navigate("AppEX");
    }
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={{alignItems: "center"}}>
                <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>
                <LifeStatus/>
                <StatusBar/>
            </View>
            <Text
                style={styles.explanationText}
                onPress={() => {
                handleNavExplanation();
            }}
        >
            Ver explicações novamente
            </Text>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgba(21, 21, 21, 0.98)",
    },
    dailyChecks: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 18,
      marginTop: 40,
    },
    explanationText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: 15,
      paddingBottom: 25,
    },
  });