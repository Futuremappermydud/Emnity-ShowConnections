//Based off Review db
// main dependencies and components
import { Image, Text, TouchableOpacity, View } from 'enmity/components';
import { bulk, filters } from 'enmity/metro';
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import manifest from "../../manifest.json";

export interface CreditsProps {
    manifest: typeof manifest;
}

type DefaultObject = { [key: string]: string | number | DefaultObject }
const shadow = (opacity: number = 0.10): DefaultObject => ({
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 4,
    },
    shadowOpacity: opacity,
    shadowRadius: 4.65,
    elevation: 8
});

const styles = StyleSheet.createThemedStyleSheet({
    container: {
        marginTop: 25,
        marginLeft: '5%',
        marginBottom: -15,
        flexDirection: "row"
    },
    textContainer: {
        paddingLeft: 15,
        paddingTop: 5,
        flexDirection: 'column',
        flexWrap: 'wrap',
        ...shadow
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 10,
        ...shadow
    },
    mainText: {
        opacity: 0.975,
        letterSpacing: 0.25
    },
    header: {
        color: Constants.ThemeColorMap.HEADER_PRIMARY,
        fontFamily: Constants.Fonts.DISPLAY_BOLD,
        fontSize: 25,
        letterSpacing: 0.25
    },
    subHeader: {
        color: Constants.ThemeColorMap.HEADER_SECONDARY,
        fontSize: 12.75,
    } 
})
// @ts-ignore
const Animated = window.enmity.modules.common.Components.General.Animated

const [
    Router
] = bulk(
    filters.byProps('transitionToGuild', "openURL")
);

export default ({ manifest }: CreditsProps) => {
    const animatedButtonScale = React.useRef(new Animated.Value(1)).current

    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
        }).start();
    };

    const onPress = () => Router.openURL(manifest.links.source);
    const animatedScaleStyle = { transform: [{ scale: animatedButtonScale }] }

    return <View style={styles.container}>
            <TouchableOpacity 
                onPress={onPress}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
            >
                <Animated.View style={animatedScaleStyle}>
                    <Image
                        style={[styles.image]}
                        source={{
                            uri: "https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png", 
                        }}
                    />
                </Animated.View>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={(): void => Router.openURL(manifest.links.source)}>
                    <Text style={[styles.mainText, styles.header]}>
                        {manifest.name}
                    </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.mainText, styles.subHeader]}>
                        A project by {manifest.authors[0].name}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={[styles.mainText, styles.subHeader]}>
                            Version: 
                        </Text>

                        <Text style={[styles.mainText, styles.subHeader, {
                            paddingLeft: 4,
                            fontFamily: Constants.Fonts.DISPLAY_BOLD
                        }]}>
                            {manifest.version}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
};