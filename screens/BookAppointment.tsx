import * as React from "react";
import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { StyleSheet, Button, Alert } from "react-native";

import { Text, View } from "../components/Themed";
import WideButton from "../components/WideButton";
import WideSelect from "../components/WideSelect";

const Stack = createNativeStackNavigator();

const AGE_GROUPS = [
  {title: "75+", description: "Priority group #1", id: 0},
  {title: "65+", description: "Priority group #2", id: 1},
  {title: "55+", description: "Priority group #3", id: 2},
  {title: "45+", description: "Priority group #4", id: 3},
  {title: "18+", description: "All remaining adults", id: 4},
]


export default function BookAppointment({ navigation }: { navigation: any }) {

  const [selected, setSelected] = React.useState<number>()
  
  const Index = ({ navigation }: { navigation: any }) => (
    <View style={styles.container}>
      <Text>Welcome to the COVID-19 Booking Tool</Text>
  
      <WideButton title="Continue" onPress={() => navigation.navigate("AgeGroup")} />
    </View>
  );
  
  const AgeGroup = () => (
    <View style={styles.container}>
      <Text>Select your age group from the list below</Text>
      {AGE_GROUPS.map(item => 
        // FIXME component re-rendering too quick so animation cuts off, fix up with state changes
      <WideSelect key={item.id} onPress={() => setSelected(item.id)} title={item.title} description={item.description} selected={selected !== undefined && selected === item.id} />
        )}
  
    </View>
  );


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
        name="AgeGroup"
        component={AgeGroup}
        options={{ title: "Age Group" }}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
