import * as React from 'react';
import { TouchableOpacity, GestureResponderEvent, Text, StyleSheet, Platform, PlatformColor } from 'react-native'


const WideButton = ({ onPress, title }: { onPress: (event: GestureResponderEvent) => void, title: string }) => {

    const styles = StyleSheet.create({
        touchable: {
            padding: 20,
            width: '70%',
            borderRadius: 15,
            ...Platform.select({
                ios: {
                    backgroundColor: PlatformColor('systemBlue'),
                },
                android: {
                    backgroundColor: PlatformColor('@android:color/holo_blue_bright')
                }
            })
        },
        text: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white'

        }
    })

    return <TouchableOpacity style={styles.touchable} activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>

}

export default WideButton