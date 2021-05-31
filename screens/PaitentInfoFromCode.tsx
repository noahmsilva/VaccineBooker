
import * as React from "react";
import { KeyboardAvoidingView, TextInput, StyleSheet, Platform, PlatformColor, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { Text, View } from "../components/Themed";
import QRCode from "react-native-qrcode-svg"
import WideButton from "../components/WideButton";

import API from "../hooks/API";
import { useState } from "react";

export default function PaitentInfoFromCode({ route }: { navigation: any, route: any }) {

    const [paitentInfo, setPaitentInfo] = useState()

    React.useEffect(() => {
        API.getPaitentFromCode(setPaitentInfo, route.params)
    }, [])


    if (!paitentInfo) return <View style={styles.container}>
        <Text>No information found</Text>
        <Text>
            {route.params.token}
            
            </Text>
    </View>

    if (paitentInfo) {}return <View style={styles.container}>
        <Text style={styles.firstName}>{paitentInfo.firstName}</Text>
        <Text style={styles.lastName}>{paitentInfo.lastName}</Text>

        <Text>{'\n'}Personal Health Code: {paitentInfo.healthId}</Text>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 330,
        height: 330,
        backgroundColor: 'white'
    },
    firstName: {
        fontSize: 36,
        fontWeight: 'bold'
    },

    lastName: {
        fontSize: 18,
        fontStyle: 'italic'
    }
})