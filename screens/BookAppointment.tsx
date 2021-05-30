import * as React from "react";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { StyleSheet, Button, Alert } from "react-native";

import { Text, View } from "../components/Themed";
import WideButton from "../components/WideButton";

const Stack = createNativeStackNavigator();

const Index = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text>Welcome to the COVID-19 Booking Tool</Text>

    <WideButton title="Continue" onPress={() => navigation.navigate("HealthID")} />
  </View>
);

const HealthID = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Please enter your Health ID</Text>
  </View>
);

export default function BookAppointment({ navigation }: { navigation: any }) {
  enableScreens();

  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerRight: () => (
          <Button
            title="Exit"
            onPress={() => {
              Alert.alert("Exit", "Are you sure you would like to exit?", [
                { text: "No" },
                {
                  text: "Yes",
                  onPress: () => navigation.goBack(),
                  style: "destructive",
                },
              ]);
            }}
          />
        ),
        headerLargeTitle: true,
      }}
    >
      <Stack.Screen
        name="Index"
        component={Index}
        options={{ title: "Book Appointment", headerRight: undefined }}
      />
      <Stack.Screen
        name="HealthID"
        component={HealthID}
        options={{ title: "Health Card" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
