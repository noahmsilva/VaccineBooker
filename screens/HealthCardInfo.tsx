import * as React from "react";
import { KeyboardAvoidingView, TextInput, StyleSheet, Platform, PlatformColor, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Text, View } from "../components/Themed";
import WideButton from "../components/WideButton";

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
                    <WideButton title="Submit" onPress={() => console.log(form)} />
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
