import * as React from 'react';
import { StyleSheet, Button, ScrollView, TouchableOpacity, Platform, PlatformColor } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function HealthProviderScreen({ navigation }: { navigation: any }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.listButton} onPress={() => console.log('clicked')}>
                    <View style={styles.listButtonView}>
                        <AntDesign name="scan1" size={24} style={styles.listIcon} />
                        <Text>Scan Paitent Health Card</Text>
                        <Entypo name="chevron-small-right" size={24} color="white" style={styles.listChevron}/>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
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
        width: '90%',
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

