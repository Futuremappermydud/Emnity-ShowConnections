function G(e){window.enmity.plugins.registerPlugin(e)}const y=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const L=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const T={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function _(...e){return window.enmity.modules.bulk(...e)}function A(...e){return window.enmity.modules.getByProps(...e)}function Y(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function $(e){return window.enmity.patcher.create(e)}var K="ShowConnections",W="1.0.5",j="",q=[{name:"FutureMapper",profile:"https://github.com/Futuremappermydud",id:"741727188809810181"}],J={source:"https://github.com/Futuremappermydud/Emnity-ShowConnections/",dist:"https://github.com/Futuremappermydud/Emnity-ShowConnections/blob/main/dist/ShowConnections.js"},r={name:K,version:W,description:j,authors:q,links:J};const{components:t}=window.enmity;t.Alert,t.Button,t.FlatList;const O=t.Image;t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl;const k=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const b=t.Text;t.TextInput;const Q=t.TouchableHighlight,F=t.TouchableOpacity;t.TouchableWithoutFeedback,t.Touchable;const p=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox,t.FormDivider,t.FormHint,t.FormIcon,t.FormInput,t.FormLabel;const S=t.FormRadio,g=t.FormRow;t.FormSection,t.FormSelect,t.FormSubLabel;const X=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function h(e,n,i){window.enmity.settings.set(e,n,i)}function f(e,n,i){return window.enmity.settings.get(e,n,i)}function B(e,n,i){return window.enmity.settings.getBoolean(e,n,i)}const z=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),c=L.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...z},image:{width:75,height:75,borderRadius:10,...z},mainText:{opacity:.975,letterSpacing:.25},header:{color:y.ThemeColorMap.HEADER_PRIMARY,fontFamily:y.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:y.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),E=window.enmity.modules.common.Components.General.Animated,[V]=_(T.byProps("transitionToGuild","openURL"));var Z=({manifest:e})=>{const n=o.useRef(new E.Value(1)).current,i=()=>{E.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},s=()=>{E.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},m=()=>V.openURL(e.links.source),d={transform:[{scale:n}]};return o.createElement(p,{style:c.container},o.createElement(F,{onPress:m,onPressIn:i,onPressOut:s},o.createElement(E.View,{style:d},o.createElement(O,{style:[c.image],source:{uri:"https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png"}}))),o.createElement(p,{style:c.textContainer},o.createElement(F,{onPress:()=>V.openURL(e.links.source)},o.createElement(b,{style:[c.mainText,c.header]},e.name)),o.createElement(p,{style:{flexDirection:"row"}},o.createElement(b,{style:[c.mainText,c.subHeader]},"A project by ",e.authors[0].name)),o.createElement(p,null,o.createElement(F,{style:{flexDirection:"row"}},o.createElement(b,{style:[c.mainText,c.subHeader]},"Version:"),o.createElement(b,{style:[c.mainText,c.subHeader,{paddingLeft:4,fontFamily:y.Fonts.DISPLAY_BOLD}]},e.version)))))};const ee=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),te=L.createThemedStyleSheet({container:{width:"90%",marginTop:25,marginLeft:"5%",borderRadius:10,backgroundColor:y.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadow:ee}});var oe=({settings:e})=>o.createElement(k,null,o.createElement(Z,{manifest:r}),o.createElement(p,{style:[te.container]},o.createElement(g,{label:"Compact",trailing:o.createElement(S,{selected:f(r.name,"mode","cozy")==="compact"}),onPress:()=>{h(r.name,"mode","compact")}}),o.createElement(g,{label:"Cozy",trailing:o.createElement(S,{selected:f(r.name,"mode","cozy")==="cozy"}),onPress:()=>{h(r.name,"mode","cozy")}}),o.createElement(g,{label:"Roomy",trailing:o.createElement(S,{selected:f(r.name,"mode","cozy")==="roomy"}),onPress:()=>{h(r.name,"mode","roomy")}}),o.createElement(g,{label:"Extreme",trailing:o.createElement(S,{selected:f(r.name,"mode","cozy")==="extreme"}),onPress:()=>{h(r.name,"mode","extreme")}}),o.createElement(g,{label:"Keep Original Connections",subLabel:"Whether to keep the original connections in popout or to hide them",trailing:o.createElement(X,{value:B(r.name,"keepOg",!1),onChange:n=>{h(r.name,"keepOg",n)}})})));function M(e,n,i){return window.enmity.utilities.findInReactTree(e,n,i)}function C(e){return window.enmity.assets.getIDByName(e)}const ne=Y("UserProfileSection"),ie=A("getUserProfile"),[me,re]=_(T.byProps("transitionToGuild","openURL"),T.byProps("setString")),P=[{type:"domain",url:"",usage:"name"},{type:"twitter",url:"https://twitter.com/",usage:"name"},{type:"reddit",url:"https://www.reddit.com/user/",usage:"name"},{type:"github",url:"https://github.com/",usage:"name"},{type:"twitch",url:"https://www.twitch.tv/",usage:"name"},{type:"youtube",url:"https://www.youtube.com/channel/",usage:"id"},{type:"steam",url:"https://steamcommunity.com/profiles/",usage:"id"},{type:"spotify",url:"https://open.spotify.com/user/",usage:"id"}];function se({connection:e,userTheme:n,margin:i}){let s=C(`img_account_sync_${e.type.replace("riotgames","riot")}_light_and_dark`);return s||(s=C(`img_account_sync_${e.type.replace("riotgames","riot")}_${n.replace("dark","white")}`)),e.type==="domain"&&(s=C("ic_globe_24px")),console.log(i),o.createElement(Q,{activeOpacity:.45,onPress:()=>{if(P.findIndex(m=>m.type==e.type)==-1)re.setString(e.name);else{const m=P==null?void 0:P.find(d=>d.type==e.type);m&&me.openURL((m==null?void 0:m.url)+((m==null?void 0:m.usage)=="name"?e.name:e.id))}},marginHorizontal:i},o.createElement(O,{accessibilityLabel:e.type,source:s,style:{width:48,height:48,margin:{margin:i}}}))}var ae=({userId:e,theme:n})=>{const i=ie.getUserProfile(e);if(!i)return null;const s=i.connectedAccounts;if(!(s!=null&&s.length))return null;let m=f(r.name,"mode","cozy"),d=(()=>{switch(m){case"compact":return 0;case"cozy":return 5;case"roomy":return 10;case"extreme":return 15;default:return 1}})();return o.createElement(ne,{title:"Connections"},o.createElement(k,{horizontal:!0,style:{flexDirection:"row",gap:{result:d}}},s.map(v=>o.createElement(se,{connection:v,userTheme:n,margin:d}))))};const U=$("show-connections"),le=A("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),ce={...r,onStart(){U.after(le.default,"type",(e,n,i)=>{var s,m,d,v,x,R;let w=(m=(s=M(i,a=>{var l,u;return((l=a==null?void 0:a.type)==null?void 0:l.displayName)==="View"&&((u=a==null?void 0:a.props)==null?void 0:u.children.findIndex(D=>{var N;return((N=D==null?void 0:D.type)==null?void 0:N.name)==="UserProfileBio"}))!==-1}))==null?void 0:s.props)==null?void 0:m.children;const I=(d=M(i,a=>{var l;return((l=a==null?void 0:a.type)==null?void 0:l.name)==="ThemeContextProvider"}))==null?void 0:d.props;if(!w)return i;const{userId:H}=(R=(x=(v=w==null?void 0:w.find(a=>{var l,u;return typeof((u=(l=a==null?void 0:a.props)==null?void 0:l.displayProfile)==null?void 0:u.userId)=="string"}))==null?void 0:v.props)==null?void 0:x.displayProfile)!=null?R:{};if(!B(r.name,"keepOg",!1)){const a=w.findIndex(l=>{var u;return((u=l==null?void 0:l.type)==null?void 0:u.name)==="UserProfileConnections"});w.splice(a,1)}w.unshift(o.createElement(ae,{userId:H,theme:I==null?void 0:I.theme}))})},onStop(){U.unpatchAll()},getSettingsPanel({settings:e}){return o.createElement(oe,{settings:e})}};G(ce);
