import { get } from "enmity/api/settings";
import { Image, TouchableHighlight, ScrollView, View } from "enmity/components";
import { React } from "enmity/metro/common";
import { getByName, getByProps, bulk, filters } from "enmity/metro";
import { getIDByName } from "enmity/api/assets"

const UserProfileSection = getByName("UserProfileSection");
const UserProfileStore = getByProps("getUserProfile");
const platforms: { get(type: string): ConnectionPlatform; } = getByProps("isSupported", "getByUrl");
import manifest from "../../manifest.json";

const [
    Router,
    Clipboard,
] = bulk(
    filters.byProps('transitionToGuild', "openURL"),
    filters.byProps('setString'),
);

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

function ConnectionComponent ({connection, userTheme}: {connection: any, userTheme: string}) {
    let platform = platforms.get(connection.type);
    let url = platform.getPlatformUserUrl?.(connection);
    let img = userTheme === "light" ? platform.icon.lightSVG : platform.icon.darkSVG;
    //hack
    var y: number = +img;
    img = ""+(y - 2);
	
    return (
        <TouchableHighlight 
			activeOpacity={0.45}
            onPress={() => {
				if(url)
				{
                    Router.openURL(url);
				}
				else
				{
					Clipboard.setString(connection.name);
				}
            }}
        >

            <Image
                accessibilityLabel={connection.type}
                source={img}
                style={{
                    width: 48,
                    height: 48
                }}
            />
        </TouchableHighlight>
    );
}

export default ({ userId, theme }: { userId: string, theme: string }) => {
    const profile = UserProfileStore.getUserProfile(userId);
    if (!profile)
        return null;

    const connections: Connection[] = profile.connectedAccounts;
    if (!connections?.length)
        return null;

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

    return <UserProfileSection title={"Connections"}>
        <ScrollView 
            horizontal={true} 
            style={{ flexDirection: 'row' }}
        >
            <View
                style={{ 
                    flexDirection: 'row',
                    gap: result
                }}
            >
            {
                connections.map((connection: Connection)=> {
                    return (
                        <ConnectionComponent
							connection={connection}
                            userTheme={theme}
                        />
                    )
                })
            }
            </View>
        </ScrollView>
    </UserProfileSection>
}