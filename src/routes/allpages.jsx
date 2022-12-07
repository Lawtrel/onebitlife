import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/start";

export default function AllPages(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShow: false,
                }}
            >
                <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}