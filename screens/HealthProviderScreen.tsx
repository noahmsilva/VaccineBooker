import * as React from 'react';
import { StyleSheet, Button, ScrollView, TouchableOpacity, Platform, PlatformColor, FlatList, GestureResponderEvent } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';


const styles = StyleSheet.create({
    list: {
        width: '90%',
    },
    container: {
        paddingVertical: 30,
        flex: 1,
        height: 1000,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    listButton: {
        width: '100%',
        marginBottom: 5,
    },
    listButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor('tertiarySystemFill')
            },
            default: {
                backgroundColor: 'gray'
            }
        }),
    },
    listIcon: {
        paddingRight: 10,
        ...Platform.select({
            ios: {
                color: PlatformColor('label')
            },
            default: {
                backgroundColor: 'white'
            }
        }),
    },
    listChevron: {
        marginLeft: 'auto',
        ...Platform.select({
            ios: {
                color: PlatformColor('tertiaryLabel')
            },
            default: {
                backgroundColor: 'white'
            }
        }),
    }
});



const LIST_ITEMS = [
    {
        id: '0',
        name: 'Scan Paitent Health Card',
        icon: () => <AntDesign name="scan1" size={24} style={styles.listIcon} />,
        onPress: () => console.log('clicked')
    },
    {
        id: '1',
        name: 'Edit Paitent Details',
        icon: () => <AntDesign name="edit" size={24} style={styles.listIcon} />,
        onPress: () => console.log('clicked')
    },
    {
        id: '2',
        name: 'Submit New Paitent Information',
        icon: () => <Ionicons name="person-add-outline" size={24} style={styles.listIcon} />,
        onPress: () => console.log('clicked')
    }
]

const ListButton = ({ name, Icon, onPress }: { name: string, Icon: any, onPress: (event: GestureResponderEvent) => void }) => <TouchableOpacity style={styles.listButton} onPress={onPress}>
    <View style={styles.listButtonView}>

        <Icon />
        <Text>{name}</Text>
        <Entypo name="chevron-right" size={24} style={styles.listChevron} />
    </View>

</TouchableOpacity>


export default function HealthProviderScreen({ navigation }: { navigation: any }) {

    const renderItem = ({ item }: { item: any }) => <ListButton name={item.name} Icon={item.icon} onPress={item.onPress} />

    return (
        <ScrollView>
            <View style={styles.container}>

                <FlatList
                    style={styles.list}
                    data={LIST_ITEMS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} />

            </View>
        </ScrollView>
    );
}

