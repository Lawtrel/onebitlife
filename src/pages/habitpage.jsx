import React, { useEffect, useRef, useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SelectHabit from "../components/selecthabit";
import SelectFrequency from "../components/selectfrequency";
import Notification from "../components/notification";
import TimeDatePicker from "../components/timedatapicker";
import UpdateExcludeButtons from "../components/updatebuttom";
import DefaultButton from "../components/defaultbutton";

export default function HabitPage({route}) {
    const navigation = useNavigation();
	const [habitInput, setHabitInput] = useState();
    const [frequencyInput, setFrequencyInput] = useState();
    const [notificationToggle, setNotificationToggle] = useState();
    const [dayNotification, setDayNotification] = useState();
    const [timeNotification, setTimeNotification] = useState();
    
    const {create,habit, habitName } = route.params;

    function handleCreateHabit() {
        if (
            habitInput === undefined ||
            frequencyInput === undefined
        ) {
            Alert.alert(
                "Você precisa selecionar um hábito e frequência para continuar"
            );
        } else if (
            notificationToggle === true &&
            frequencyInput === "Diario" &&
            timeNotification === undefined
        ) {
            Alert.alert("Você precisa dizer a frequência e o horário da notificação!");
        } else {
            navigation.navigate("Home", {
                createHabit: `Created in ${habit?.habitArea}`,
            });
        }
    }

    function handleUpdateHabit() {
        if (notificationToggle === true && !dayNotification && !timeNotification) {
            Alert.alert("Você precisa colocar a frequência e horário da notificação")
        } else {
            navigation.navigate("Home", {
                updateHabit: `Updated in ${habit?.habitArea}`,
            });
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.backPageBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require("../assets/icons/arrowBack.png")}
                            style={styles.arrowBack}
                        />
                    </TouchableOpacity>
                    <View style={styles.mainContent}>
                        <Text style={styles.title}>Configurações {"\n"} de hábito</Text>
                        <Text style={styles.inputText}>Área</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.area}>{habit?.habitArea}</Text>
                        </View>
                    <Text style={styles.inputText}>Hábitos</Text>
                    <SelectHabit 
                    habit={habit} 
                    currentHabit={habitName} 
                    habitInput={setHabitInput} />

                    <Text style={styles.inputText}>Frequência</Text>
                    <SelectFrequency
                        habitFrequency={habit?.habitFrequency}
                        frequencyInput={setFrequencyInput}
                    />
                    <Notification
                        habitName={habitInput}
                        notificationToggle={notificationToggle}
                        setNotificationToggle={setNotificationToggle}
                    />

                    {notificationToggle ? (
                         <TimeDatePicker
                            frequency={frequencyInput}
                            dayNotification={dayNotification}
                            timeNotification={timeNotification}
                            setDayNotification={setDayNotification}
                            setTimeNotification={setTimeNotification}
                        />
                        ) : null}
                    {create === false ? (
                        <UpdateExcludeButtons
                            handleUpdate={handleUpdateHabit}
                            habitArea={habitArea}
                            habitInput={habitInput}
                        />
                    ) : (
                        <View style={styles.configButton}>
                            <DefaultButton
                                buttonText={"Criar"}
                                handlePress={handleCreateHabit}
                                width={250}
                                height={50}
                            />
                        </View>
                    )}
                </View>
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
    backPageBtn: {
        width: 40,
        height: 40,
        margin: 25,
    },
    arrowBack: {
        width: 40,
        height: 40,
    },
    mainContent: {
        width: 250,
        alignSelf: "center",
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontsSize: 30,
    },
    inputText: {
        color: "white",
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "#FFF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    area: {
        color: "#BBB",
        fontSize: 15,
    },
})