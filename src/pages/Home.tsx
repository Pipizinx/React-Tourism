import { useState, useEffect, useRef, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import image from "../images/home/Header.jpg"

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={image}
                    style={StyleSheet.absoluteFill}
                    contentFit="contain"
                    transition={200}
                />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleName}> Expo Gallery</Text>
                <Text style={styles.Description}> Guarde sua memória aqui na Expo Gallery</Text>
            </View>
            <View style={styles.cards}>
                <View style={styles.cardButton}>
                    <Text style={styles.ButtonText}>Camera</Text>
                    <Text style={styles.ButtonIcon}>
                        <FontAwesome name="camera" size={24} color="black" />
                    </Text>
                </View>
                <View style={styles.cardButton}>
                    <Text style={styles.ButtonText}>Location</Text>
                    <Text style={styles.ButtonIcon}>
                        <FontAwesome name="compass" size={35} color="black" />
                    </Text>
                </View>
                <View style={styles.cardButton}>
                    <Text style={styles.ButtonText}>Accelerometer</Text>
                    <Text style={styles.ButtonIcon}>
                        <AntDesign name="number" size={35} color="Black" />
                    </Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4098656e',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        backgroundColor: '#045927ff',
        height: 200,
        width: "100%",
    },

    title: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },

    titleName: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 100,
    },

    Description: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 50,
        fontWeight: "light",
    },

    cards: {
        flex: 1,
        flexDirection: "row",
        gap: 100,
        width: "60%"
    },

    cardButton: {
        flex: 1,
        height: 200,
        backgroundColor: "#fff"
    },

    ButtonText: {
        flex: 1,
        fontWeight: "bold",
        alignSelf: "center",
        alignContent: "center"
    },

    ButtonIcon: {
        flex: 1,
        fontWeight: "bold",
        alignSelf: "center",
        alignContent: "center",
        bottom: 40,
    },
});