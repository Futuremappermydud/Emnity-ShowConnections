function Y(e){window.enmity.plugins.registerPlugin(e)}const c=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const P=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const O={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,i)=>window.enmity.modules.filters.byName(e,i),byTypeName:(e,i)=>window.enmity.modules.filters.byTypeName(e,i),byDisplayName:(e,i)=>window.enmity.modules.filters.byDisplayName(e,i)};function G(...e){return window.enmity.modules.bulk(...e)}function b(...e){return window.enmity.modules.getByProps(...e)}function $(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function j(e){return window.enmity.patcher.create(e)}var K="ShowConnections",W="1.0.5",X="",q=[{name:"FutureMapper",profile:"https://github.com/Futuremappermydud",id:"741727188809810181"}],J={source:"https://github.com/Futuremappermydud/Emnity-ShowConnections/",dist:"https://github.com/Futuremappermydud/Emnity-ShowConnections/blob/main/dist/ShowConnections.js"},a={name:K,version:W,description:X,authors:q,links:J};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const B=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal;const Q=o.Pressable;o.RefreshControl;const k=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const T=o.Text;o.TextInput,o.TouchableHighlight;const R=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const h=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon;const Z=o.FormInput;o.FormLabel;const C=o.FormRadio,g=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function f(e,i,r){window.enmity.settings.set(e,i,r)}function v(e,i,r){return window.enmity.settings.get(e,i,r)}const z=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),s=P.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...z},image:{width:75,height:75,borderRadius:10,...z},mainText:{opacity:.975,letterSpacing:.25},header:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:c.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:c.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),E=window.enmity.modules.common.Components.General.Animated,[M,ue]=G(O.byProps("transitionToGuild","openURL"),O.byProps("setString"));var ee=({manifest:e})=>{const i=n.useRef(new E.Value(1)).current,r=()=>{E.spring(i,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},u=()=>{E.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start()},d=()=>M.openURL(e.links.source),w={transform:[{scale:i}]};return n.createElement(h,{style:s.container},n.createElement(R,{onPress:d,onPressIn:r,onPressOut:u},n.createElement(E.View,{style:w},n.createElement(B,{style:[s.image],source:{uri:"https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png"}}))),n.createElement(h,{style:s.textContainer},n.createElement(R,{onPress:()=>M.openURL(e.links.source)},n.createElement(T,{style:[s.mainText,s.header]},e.name)),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(T,{style:[s.mainText,s.subHeader]},"A project by ",e.authors[0].name)),n.createElement(h,null,n.createElement(R,{style:{flexDirection:"row"}},n.createElement(T,{style:[s.mainText,s.subHeader]},"Version:"),n.createElement(T,{style:[s.mainText,s.subHeader,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD}]},e.version)))))};const oe=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),ne=P.createThemedStyleSheet({container:{width:"90%",marginTop:25,marginLeft:"5%",borderRadius:10,backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadow:oe}});var te=({settings:e})=>n.createElement(k,null,n.createElement(ee,{manifest:a}),n.createElement(h,{style:[ne.container]},n.createElement(g,{label:"Compact",trailing:n.createElement(C,{selected:v(a.name,"mode","cozy")==="compact"}),onPress:()=>{f(a.name,"mode","compact")}}),n.createElement(g,{label:"Cozy",trailing:n.createElement(C,{selected:v(a.name,"mode","cozy")==="cozy"}),onPress:()=>{f(a.name,"mode","cozy")}}),n.createElement(g,{label:"Roomy",trailing:n.createElement(C,{selected:v(a.name,"mode","cozy")==="roomy"}),onPress:()=>{f(a.name,"mode","roomy")}}),n.createElement(g,{label:"Extreme",trailing:n.createElement(C,{selected:v(a.name,"mode","cozy")==="extreme"}),onPress:()=>{f(a.name,"mode","extreme")}}),n.createElement(g,{label:"Icon Size",subLabel:"Changes the size of connection icons",trailing:n.createElement(Z,{value:v(a.name,"iconSize","32"),onChange:i=>{f(a.name,"iconSize",i.replace(/\D/g,""))}})})));function F(e,i,r){return window.enmity.utilities.findInReactTree(e,i,r)}function V(e){return window.enmity.assets.getIDByName(e)}const{useThemeContext:ie}=b("useThemeContext"),{meta:{resolveSemanticColor:re}}=b("colors","meta"),me=$("UserProfileSection"),le=b("getUserProfile");P.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,width:"100%",marginTop:-4,marginRight:-12},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:c.ThemeColorMap.BACKGROUND_SECONDARY_ALT},text:{fontFamily:c.Fonts.DISPLAY_NORMAL}});function ae({connection:e,userTheme:i}){let r=V(`img_account_sync_${e.type.replace("riotgames","riot")}_light_and_dark`);return r||(r=V(`img_account_sync_${e.type.replace("riotgames","riot")}_${i.replace("dark","white")}`)),n.createElement(Q,{onPress:()=>console.log("hi"),style:{margin:15}},n.createElement(B,{accessibilityLabel:e.name,source:r,style:{width:48,height:48}}))}var se=({userId:e,theme:i})=>{const r=ie();re(r.theme,c.ThemeColorMap.TEXT_NORMAL);const u=le.getUserProfile(e);if(!u)return null;const d=u.connectedAccounts;return d!=null&&d.length?n.createElement(me,{title:"Connections"},n.createElement(k,{horizontal:!0,style:{flexDirection:"row"}},d.map(w=>n.createElement(ae,{connection:w,userTheme:i})))):null};const U=j("show-connections"),de=b("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),ce={...a,onStart(){U.after(de.default,"type",(e,i,r)=>{var u,d,w,x,D,I,N,A;const S=(d=(u=F(r,t=>{var m,l;return((m=t==null?void 0:t.type)==null?void 0:m.displayName)==="View"&&((l=t==null?void 0:t.props)==null?void 0:l.children.findIndex(y=>{var p;return((p=y==null?void 0:y.type)==null?void 0:p.name)==="UserProfileBio"}))!==-1}))==null?void 0:u.props)==null?void 0:d.children,_=(w=F(r,t=>{var m;return((m=t==null?void 0:t.type)==null?void 0:m.name)==="ThemeContextProvider"}))==null?void 0:w.props;if(F(r,t=>{var m,l;return((m=t==null?void 0:t.type)==null?void 0:m.name)==="UserProfileSection"&&((l=t==null?void 0:t.props)==null?void 0:l.title)=="Connections"}),!S)return r;const{userId:H}=(I=(D=(x=S==null?void 0:S.find(t=>{var m,l;return typeof((l=(m=t==null?void 0:t.props)==null?void 0:m.displayProfile)==null?void 0:l.userId)=="string"}))==null?void 0:x.props)==null?void 0:D.displayProfile)!=null?I:{},L=F(r,t=>{var m,l;return((m=t==null?void 0:t.type)==null?void 0:m.displayName)==="View"&&((l=t==null?void 0:t.props)==null?void 0:l.children.findIndex(y=>{var p;return((p=y==null?void 0:y.type)==null?void 0:p.name)==="UserProfileConnections"}))!==-1});(A=(N=L==null?void 0:L.props)==null?void 0:N.children)==null||A.filter(t=>{var m,l;return console.log((m=t==null?void 0:t.type)==null?void 0:m.name),((l=t==null?void 0:t.type)==null?void 0:l.name)!=="UserProfileConnections"}),S.unshift(n.createElement(se,{userId:H,theme:_==null?void 0:_.theme}))})},onStop(){U.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(te,{settings:e})}};Y(ce);
