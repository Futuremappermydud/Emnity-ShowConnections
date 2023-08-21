import { get } from "enmity/api/settings";
import { Image, Pressable } from "enmity/components";
import { Constants, React, StyleSheet } from "enmity/metro/common";
import { getByName, getByProps } from "enmity/metro";
import { getIDByName } from "enmity/api/assets"

const { useThemeContext } = getByProps("useThemeContext");
const { meta: { resolveSemanticColor } } = getByProps("colors", "meta");
const UserProfileSection = getByName("UserProfileSection");
const UserProfileStore = getByProps("getUserProfile");

const styles = StyleSheet.createThemedStyleSheet({
    container: {
        alignSelf: 'flex-start',
        padding: 1,
        borderRadius: 9,
        width: "100%",

        marginTop: -4,
        marginRight: -12
    },
    innerContainer: {
        paddingHorizontal: 6,
        paddingVertical: 8,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10/2,
        marginRight: 6
    },
    fallback: {
        color: Constants.ThemeColorMap.BACKGROUND_SECONDARY_ALT
    },
    text: {
        fontFamily: Constants.Fonts.DISPLAY_NORMAL,
    }
})

interface Connection {
    type: string;
    id: string;
    name: string;
    verified: boolean;
}

function ConnectionComponent ({connection, userTheme}: {connection: any, userTheme: string}) {
    const img = getIDByName("img_account_sync_${connection.type}_light_and_dark");

    return (
        <Pressable 
            onPress={() => console.log("hi")}
        >
            <Image
                accessibilityLabel={connection.name}
                source={img}
                style={{
                    width: 64,
                    height: 64
                }}
            />
        </Pressable>
    );
}

export default ({ userId, theme }: { userId: string, theme: string }) => {
    const themeContext = useThemeContext();
    const textColor = resolveSemanticColor(themeContext.theme, Constants.ThemeColorMap.TEXT_NORMAL);

    const profile = UserProfileStore.getUserProfile(userId);
    if (!profile)
        return null;

    const connections: Connection[] = profile.connectedAccounts;
    if (!connections?.length)
        return null;

    return <UserProfileSection title="Connections">
        {
            connections.map((connection: Connection)=> {
                return (
                    <ConnectionComponent connection={connection}
                        userTheme={theme}
                    />
                )
            })
        }
    </UserProfileSection>
}