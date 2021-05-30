import * as React from 'react';
import { TouchableOpacity, StyleSheet, PlatformColor, Platform, GestureResponderEvent, Text} from 'react-native'

const WideSelect = ({ onPress, title, description, selected }: { onPress: (event: GestureResponderEvent) => void, title: string, description?: string, selected: boolean }) => {
    const styles = StyleSheet.create({
        touchable: {
            padding: 20,
            width: '85%',
            marginVertical: 5,
            borderRadius: 15,
            borderWidth: 1,
            borderStyle: 'solid',
            ...Platform.select({
                ios: {
                    borderColor: PlatformColor('tertiarySystemFill'),
                    backgroundColor: PlatformColor('tertiarySystemFill'),
                },
                android: {
                    borderColor: PlatformColor('@android:color/holo_blue_bright'),
                    backgroundColor: PlatformColor('@android:color/holo_blue_bright'),
                }
            })
        },
        touchableSelected: {
            ...Platform.select({
                ios: {
                    borderColor: PlatformColor('systemBlue'),
                },
                android: {
                    borderColor: PlatformColor('@android:color/holo_blue_bright')
                }
            }),
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


    return <TouchableOpacity style={[styles.touchable, selected && styles.touchableSelected]} onPress={onPress}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        {description && <Text style={[styles.text, styles.description]}>{description}</Text>}
    </TouchableOpacity>




}

export default WideSelect