import { get } from "enmity/api/settings";
import { Image, Pressable, ScrollView } from "enmity/components";
import { Constants, React, StyleSheet } from "enmity/metro/common";
import { getByName, getByProps } from "enmity/metro";
import { getIDByName } from "enmity/api/assets"

const { useThemeContext } = getByProps("useThemeContext");
const { meta: { resolveSemanticColor } } = getByProps("colors", "meta");
const UserProfileSection = getByName("UserProfileSection");
const UserProfileStore = getByProps("getUserProfile");
import { find, Asset } from 'enmity/api/assets'
import Settings from "./Settings";
import manifest from "../../manifest.json";

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
    let img = getIDByName(`img_account_sync_${connection.type.replace('riotgames', 'riot')}_light_and_dark`);
    if(!img)
    {
        img = getIDByName(`img_account_sync_${connection.type.replace('riotgames', 'riot')}_${userTheme.replace('dark', 'white')}`);
    }
    let size = get(manifest.name, "mode", "cozy");
    let result = (()=>{
        switch (size) {
          case 'compact' : return 0;
          case 'cozy' : return 5;
          case 'roomy' : return 10;
          case 'extreme' : return 15;
          default : return 1;
        }
      })();

    return (
        <Pressable 
            onPress={() => console.log("hi")}
            style={{
                marginRight: {result}
            }}
        >

            <Image
                accessibilityLabel={connection.name}
                source={img}
                style={{
                    width: 48,
                    height: 48
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

    return <UserProfileSection title={"Connections"}>
        <ScrollView horizontal={true} style={{ flexDirection: 'row'}}>
            {
                connections.map((connection: Connection)=> {
                    return (
                        <ConnectionComponent connection={connection}
                            userTheme={theme}
                        />
                    )
                })
            }
        </ScrollView>
    </UserProfileSection>
}