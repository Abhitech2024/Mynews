import React, { useEffect , useState} from "react";
import {View,Text,FlatList} from "react-native";

const HookEffect = () => {

    const [myUserData , setMyUserData] = useState();
    const [isLoaded , setIsLoaded] = useState(true);

    const getUserData = async() => {
    try {
        const response =  await fetch(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=98649cd7fb29483896ebdf70ac6dc09c");

    const myData = await response.json();
    setMyUserData(myData);
    setIsLoaded(false);
    console.log(myData);
    } catch (error) {
        console.log(error);
    }
    };


    useEffect(() =>{
        getUserData();
    } , []);

    return(
        <View>
            <Text>Hi</Text>
            <FlatList 
              data={myUserData}
              renderItem={({ item }) =>{
                return(
                    <View>
                       <Text>{item.status}</Text> 
                       <Text>Hey.</Text>
                       <Text>Hello</Text>
                    </View>
                )
              }}
            />
            
        </View>
    )
}

export default HookEffect;