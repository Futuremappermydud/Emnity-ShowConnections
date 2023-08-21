import { get } from "enmity/api/settings";
import { View, Text, TouchableOpacity } from "enmity/components";
import { Constants, React, StyleSheet, Toasts } from "enmity/metro/common";
import { getByName, getByProps } from "enmity/metro";
import { Account } from "enmity/common";    
import Settings from "./Settings";
import manifest from "../../manifest.json"

const { useThemeContext } = getByProps("useThemeContext");
const { meta: { resolveSemanticColor } } = getByProps("colors", "meta");
const UserProfileSection = getByName("UserProfileSection");
const { UserProfileGradientCard } = getByProps("UserProfileGradientCard");
const { triggerHaptic } = getByProps("triggerHaptic");
const UserProfileStore = getByProps("getUserProfile");
const Platforms = getByProps("isSupported", "getByUrl");

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

interface ConnectionPlatform {
    getPlatformUserUrl(connection: Connection): string;
    icon: { lightSVG: string, darkSVG: string; };
}

function ConnectionComponent ({connection, userTheme}: {connection: Connection, userTheme: string}) {
    const platform = Platforms.get(connection.type);
    const url = platform.getPlatformUserUrl?.(connection);

    const img = (
        <img
            aria-label={connection.name}
            src={userTheme === "light" ? platform.icon.lightSVG : platform.icon.darkSVG}
            style={{
                width: get(manifest.name, 'iconSize', 32),
                height: get(manifest.name, 'iconSize', 32)
            }}
        />
    );

    return (
        url
            ? <a
                    className="vc-user-connection"
                    href={url}
                    target="_blank"
                    onClick={e => {
                    }}
                >
                    {img}
                </a>
            : <button
                    className="vc-user-connection"
                    onClick={() => console.log("hi")}
                >
                    {img}
                </button>
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
        
    </UserProfileSection>
}