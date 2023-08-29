import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Screens/Home';
import Details from '../Screens/Details';

export default function Stacks(){
    
    const stack = createStackNavigator();

    return(

            <stack.Navigator initialRouteName='home'>

                <stack.Screen name ='home' component = {Home} options ={
                    {
                            headerShown:false
                    }
                } />
                <stack.Screen name ='details' component = {Details}/>

            </stack.Navigator>
    
    );
}