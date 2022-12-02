import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/start";

const Stack = createNativeStackNavigator();

export default function AllPages(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShowm:false,
                }}
            >
            <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}