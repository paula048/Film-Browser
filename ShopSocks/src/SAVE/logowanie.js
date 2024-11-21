import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import {AsyncStorage} from 'react-native';


import useUsers from '../useUsers';



const logo = require("../img/logo.jpg")

export default function LoginScreen({ setIsAuthenticated }) {
    const [click, setClick] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    const { error, loading, jsonResponse } = useUsers();







    const handleLogin = () => {
      console.log("LOGIN ..: ");
      console.log(jsonResponse);
  
      // W ramach testó tymczasowo sprawdzam przez 'name'   => potem ZMIEŃ na 'email' !
      const user = jsonResponse.find(user => user.name === username);
  
      if (user) {
        console.log("Użytkownik istnieje.");
          if(user.password === password){
            console.log("Logowanie SUKCES !!!");
            setIsAuthenticated(true);
            navigation.navigate("Home");
          }
          
      } else {
        console.log("Niepoprawne haslo lub e-mail");
  
          
      }





              // // Your authentication logic goes here
        // // For simplicity, I'm assuming a successful login when both username and password are not empty
        // if (username.trim() !== "" && password.trim() !== "") {
        //     setIsAuthenticated(true); // Set isAuthenticated to true upon successful login
        //     navigation.navigate("Home"); // Navigate to the "Home" screen
        // } else {
        //     Alert.alert("Invalid credentials"); // Show an alert for invalid credentials
        // }



  };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.input} placeholder='EMAIL OR USERNAME' value={username} onChangeText={setUsername} autoCorrect={false} autoCapitalize='none' />
                <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false} autoCapitalize='none' />
            </View>
            <View style={styles.rememberView}>
                <View style={styles.switch}>
                    <Switch value={click} onValueChange={setClick} trackColor={{ true: "green", false: "gray" }} />
                    <Text style={styles.rememberText}>Remember Me</Text>
                </View>
                <View>
                    <Pressable onPress={() => Alert.alert("Forget Password!")}>
                        <Text style={styles.forgetText}>Forgot Password?</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Pressable>
                <Text style={styles.optionsText}>OR LOGIN WITH</Text>
            </View>

            <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>
        </SafeAreaView>
    );
}





const styles = StyleSheet.create({
    container : {
      alignItems : "center",
      paddingTop: 70,
    },
    image : {
      height : 160,
      width : 170
    },
    title : {
      fontSize : 30,
      fontWeight : "bold",
      textTransform : "uppercase",
      textAlign: "center",
      paddingVertical : 40,
      color : "red"
    },
    inputView : {
      gap : 15,
      width : "100%",
      paddingHorizontal : 40,
      marginBottom  :5
    },
    input : {
      height : 50,
      paddingHorizontal : 20,
      borderColor : "red",
      borderWidth : 1,
      borderRadius: 7
    },
    rememberView : {
      width : "100%",
      paddingHorizontal : 50,
      justifyContent: "space-between",
      alignItems : "center",
      flexDirection : "row",
      marginBottom : 8
    },
    switch :{
      flexDirection : "row",
      gap : 1,
      justifyContent : "center",
      alignItems : "center"
      
    },
    rememberText : {
      fontSize: 13
    },
    forgetText : {
      fontSize : 11,
      color : "red"
    },
    button : {
      backgroundColor : "red",
      height : 45,
      borderColor : "gray",
      borderWidth  : 1,
      borderRadius : 5,
      alignItems : "center",
      justifyContent : "center"
    },
    buttonText : {
      color : "white"  ,
      fontSize: 18,
      fontWeight : "bold"
    }, 
    buttonView :{
      width :"100%",
      paddingHorizontal : 50
    },
    optionsText : {
      textAlign : "center",
      paddingVertical : 10,
      color : "gray",
      fontSize : 13,
      marginBottom : 6
    },
    mediaIcons : {
      flexDirection : "row",
      gap : 15,
      alignItems: "center",
      justifyContent : "center",
      marginBottom : 23
    },
    icons : {
      width : 40,
      height: 40,
    },
    footerText : {
      textAlign: "center",
      color : "gray",
    },
    signup : {
      color : "red",
      fontSize : 13
    }
  })