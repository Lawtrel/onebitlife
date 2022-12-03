import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/Start";
import AppEX from "../pages/AppEx";
import Home from "../pages/Home";

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
            <Stack.Screen name="AppEX" component={AppEX} />
            <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}