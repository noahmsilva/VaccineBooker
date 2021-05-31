import * as React from "react";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import QRCode from "react-native-qrcode-svg"

export default function HealthCode({ route }: { navigation: any, route: any }) {

    return <View style={styles.container}>
        <View style={styles.border}>
            <QRCode
                size={300}
                value={route.params.token}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    border: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 330,
        height: 330,
        backgroundColor: 'white'
    }
})