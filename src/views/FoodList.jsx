import React, { useState } from "react";
import { View, FlatList, Text} from "react-native";
import food from '../data/food'
import { ListItem, Avatar, ThemeProvider } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Ionicons'

export default props => {

    const [num, setNum] = useState(0);
    const [contador, setContador] = useState(0);

    function aumentar() {
        setNum(num + 1);
        setContador(contador + 1); 
    }

    function diminuir() {
        setNum(num - 1);
        setContador(contador + 1); 
    }


    function getFoodIntem({ item: foods }) {
        return (
            <ThemeProvider>
            <ListItem bottomDivider style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Avatar 
                    source={{uri: foods.avatar}}
                    size={80}
                    rounded
                />
                <View style={{ flex: 1 }}>
                    <ListItem.Content>
                        <ListItem.Title>{foods.name}</ListItem.Title>
                        <ListItem.Subtitle>{foods.desc}</ListItem.Subtitle>
                        <ListItem.Subtitle>{foods.price}</ListItem.Subtitle>
                    </ListItem.Content>
                </View>

                <ListItem.Chevron
                    name="remove"
                    color="orange"
                    size={25}
                    onPress={diminuir}
                />
                <Text style={{ textAlign: 'center', fontSize: 20 }}>{num}</Text> 
                <ListItem.Chevron
                    name="add"
                    color="orange"
                    size={25}
                    onPress={aumentar}
                />
            </ListItem>
        </ThemeProvider>
        )
    }
    return (
        <View>
            <FlatList
                keyExtractor={foods => foods.id.toString()}
                data={food}
                renderItem={getFoodIntem}
            />
        </View>
    )
}