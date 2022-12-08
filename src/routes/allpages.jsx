import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/start";
import AppEX from "../pages/appEX";
import Home from "../pages/home";

const Stack = createNativeStackNavigator();

export default function AllPages(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShow: false,
                }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Start" component={Start} />
                <Stack.Screen name="AppExplication" component={AppEX}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}