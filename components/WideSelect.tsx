import * as React from 'react';
import { TouchableOpacity, StyleSheet, PlatformColor, Platform, GestureResponderEvent, Text} from 'react-native'

const WideSelect = ({ onPress, title, description, selected }: { onPress: (event: GestureResponderEvent) => void, title: string, description?: string, selected: boolean }) => {
    const styles = StyleSheet.create({
        touchable: {
            padding: 20,
            width: '70%',
            marginVertical: 5,
            borderRadius: 15,
            ...Platform.select({
                ios: {
                    backgroundColor: PlatformColor('secondarySystemFill'),
                },
                android: {
                    backgroundColor: PlatformColor('@android:color/holo_blue_bright'),
                }
            })
        },
        touchableSelected: {
            borderWidth: 1,
            ...Platform.select({
                ios: {
                    borderColor: PlatformColor('systemBlue'),
                },
                android: {
                    borderColor: PlatformColor('@android:color/holo_blue_bright')
                }
            }),
            borderStyle: 'solid'
        },
        title: {
            
            fontSize: 18,
            fontWeight: 'bold',
        },
        text: {
            ...Platform.select({
                ios: {
                    color: PlatformColor('label')
                },
                default: {
                    color: 'black'
                }
            })
        },
        description: {
            marginTop: 4
        }
    })


    return <TouchableOpacity style={[styles.touchable, selected && styles.touchableSelected]} activeOpacity={0.8} onPress={onPress}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        {description && <Text style={[styles.text, styles.description]}>{description}</Text>}
    </TouchableOpacity>




}

export default WideSelect