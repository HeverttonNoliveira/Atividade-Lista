import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FoodList from "./views/FoodList";
import FoodDelivery from "./views/FoodDelivery";

const Stack = createNativeStackNavigator();

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='FoodList'
                    screenOptions={
                    {
                        headerStyle:{backgroundColor:'#f4511e'},
                        headerTintColor: '#fff',
                        headerTitleStyle:{fontWeight:'bold'}
                    }}>
                    <Stack.Screen name='FoodList' component={FoodList} />
                    <Stack.Screen name='FoodDelivery' component={FoodDelivery} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}