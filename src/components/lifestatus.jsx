import { View, StyleSheet} from "react-native";
import React, {useState, useEffect} from "react";
import Lottie from "lottie-react-native";
import AnimationService from "../services/animationservice";

export default function LifeStatus( {mindHabit, moneyHabit, bodyHabit, funHabit,}) {

    const [mind, setMind] = useState();
    const [money, setMoney] = useState();
    const [robot, setRobot] = useState();

    useEffect(() => {
        AnimationService.animationStatus(
          mindHabit?.progressBar,
          moneyHabit?.progressBar,
          bodyHabit?.progressBar,
          funHabit?.progressBar,
          setMind,
          setMoney,
          setRobot
        );
      }, [mindHabit, moneyHabit, bodyHabit, funHabit]);
    return (
        <View style={styles.container}>
            <Lottie
                source={mind}
                autoPlay
                loop
                style={styles.educacaoAnimacao}
            />
            <Lottie
                source={money}
                autoPlay
                loop
                style={styles.moneyAnimacao}
            />
            <Lottie
                source={robot}
                autoPlay
                loop
                style={styles.roboAnimacao}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
    },
    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 25,
        position: "absolute",
    },
    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: "absolute",
    },
    moneyAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute",
    },
});