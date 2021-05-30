import * as React from "react";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Text, View } from "../components/Themed";

const Stack = createNativeStackNavigator()

export default function HealthCardInfo({ navigation }: { navigation: any}) {

    const [form, setForm] = React.useState<{firstName: string, lastName: string, healthId?: number}>({firstName: "", lastName: "", healthId: undefined})


        return <View>
            <Text>Hello!</Text>
        </View>
}