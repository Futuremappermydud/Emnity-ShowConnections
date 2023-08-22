import { get } from "enmity/api/settings";
import { Image, TouchableHighlight, ScrollView } from "enmity/components";
import { React } from "enmity/metro/common";
import { getByName, getByProps, bulk, filters } from "enmity/metro";
import { getIDByName } from "enmity/api/assets"

const UserProfileSection = getByName("UserProfileSection");
const UserProfileStore = getByProps("getUserProfile");
import manifest from "../../manifest.json";

const [
    Router,
    Clipboard,
] = bulk(
    filters.byProps('transitionToGuild', "openURL"),
    filters.byProps('setString'),
);

//TODO Unhardcode URLS
const URLS = [
	{
		"type": "domain",
		"url": "",
		"usage": "name"
	},
	{
		"type": "twitter",
		"url": "https://twitter.com/",
		"usage": "name"
	},
	{
		"type": "reddit",
		"url": "https://www.reddit.com/user/",
		"usage": "name"
	},
	{
		"type": "github",
		"url": "https://github.com/",
		"usage": "name"
	},
	{
		"type": "twitch",
		"url": "https://www.twitch.tv/",
		"usage": "name"
	},
	{
		"type": "youtube",
		"url": "https://www.youtube.com/channel/",
		"usage": "id"
	},
	{
		"type": "steam",
		"url": "https://steamcommunity.com/profiles/",
		"usage": "id"
	},
	{
		"type": "spotify",
		"url": "https://open.spotify.com/user/",
		"usage": "id"
	}
]


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
    if(connection.type === "domain")
    {
        img = getIDByName(`ic_globe_24px`);
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

      console.log(result);
    return (
        <TouchableHighlight 
			activeOpacity={0.45}
            onPress={() => {
				if(URLS.findIndex(value => value.type == connection.type) == -1)
				{
					//No url base found, copy
					Clipboard.setString(connection.name);
				}
				else
				{
					//Url base found, open link
					const urlBase = URLS?.find(value => value.type == connection.type);
					if(urlBase)
					{
						Router.openURL(urlBase?.url + (urlBase?.usage == "name" ? connection.name : connection.id));
					}
				}
            }}
			marginHorizontal={result}
        >

            <Image
                accessibilityLabel={connection.type}
                source={img}
                style={{
                    width: 48,
                    height: 48,
					margin: {result}
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

    return <UserProfileSection title={"Connections"}>
        <ScrollView horizontal={true} style={{ flexDirection: 'row'}}>
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
        </ScrollView>
    </UserProfileSection>
}