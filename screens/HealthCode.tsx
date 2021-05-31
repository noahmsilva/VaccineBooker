import * as React from "react";
import { KeyboardAvoidingView, TextInput, StyleSheet, Platform, PlatformColor, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { Text, View } from "../components/Themed";
import QRCode from "react-native-qrcode-svg"
import WideButton from "../components/WideButton";

import API from "../hooks/API";

export default function HealthCode({ route }: { navigation: any, route: any }) {


    return <View style={styles.container}>
            <QRCode
            size={300}
      value={route.params.token}
    />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
})