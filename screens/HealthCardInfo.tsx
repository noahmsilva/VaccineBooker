import * as React from "react";
import { KeyboardAvoidingView, TextInput, StyleSheet, Platform, PlatformColor, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { Text, View } from "../components/Themed";
import WideButton from "../components/WideButton";

import API from "../hooks/API";

export default function HealthCardInfo({ navigation }: { navigation: any }) {

    const [form, setForm] = React.useState<{ firstName: string, lastName: string, healthId: string, [key: string]: string }>({ firstName: "", lastName: "", healthId: "", })

    type FormField = {
        name: string,
        friendlyName: string,
        keyboardType: 'default' | 'number-pad'
    }

    const FIELDS: FormField[] = [{
        name: 'firstName',
        friendlyName: 'First name',
        keyboardType: 'default'
    }, {
        name: 'lastName',
        friendlyName: 'Last name',
        keyboardType: 'default'

    }, {
        name: 'healthId',
        friendlyName: 'Health ID',
        keyboardType: 'number-pad'
    }]

    return <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                {FIELDS.map((item: FormField) => 
                    <TextInput key={item.name} style={styles.input} placeholder={item.friendlyName} keyboardType={item.keyboardType} onChangeText={(text: string) => {
                        const newForm = {...form}
                        newForm[item.name] = text
                        setForm(newForm)
                    }} value={form[item.name]} />
                    
                    
                    )}
                    <WideButton title="Submit" onPress={
                        async () => {
                            const response = await API.getPaitent(undefined, form)
                            if (response.status === 404) Alert.alert('Error', 'Could not find paitent information')
                            else {
                                const item =  await response.json()
                                Alert.alert('Paitent Information', `${item.firstName} ${item.lastName}\n\nHealth ID: ${item.healthId}\nInternal ID: ${item._id}`)
                            }
                            }} />

                    <WideButton title="Get QR Code" onPress={
                        async () => {
                            const response = await API.getPaitentCode(undefined, form)
                            if (response.status === 404) Alert.alert('Error', 'Could not find paitent information')
                            else {
                                const item =  await response.json()
                                navigation.navigate('HealthCode', item)
                            }
                            }} />
            </View>
        </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        borderRadius: 15,
        width: 300,
        marginVertical: 6,
        padding: 15,
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor('systemFill'),
                color: PlatformColor('label')
            },
            default: {
                backgroundColor: 'white',
                color: 'black'
            }
        })

    },
});
