import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/start";
import AppExplication from "../pages/appexplication";
import Home from "../pages/home";
import HabitPage from "../pages/habitpage";

const Stack = createNativeStackNavigator();

export default function AllPages(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShow: false,
                }}
            >
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="AppExplication" component={AppExplication}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="HabitPage" component={HabitPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}