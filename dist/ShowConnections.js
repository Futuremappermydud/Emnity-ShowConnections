function V(e){window.enmity.plugins.registerPlugin(e)}const d=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const E=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const A={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function U(...e){return window.enmity.modules.bulk(...e)}function S(...e){return window.enmity.modules.getByProps(...e)}function H(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function Y(e){return window.enmity.patcher.create(e)}var G="ShowConnections",$="1.0.5",j="",K=[{name:"FutureMapper",profile:"https://github.com/Futuremappermydud",id:"741727188809810181"}],W={source:"https://github.com/Futuremappermydud/Emnity-ShowConnections/",dist:"https://github.com/Futuremappermydud/Emnity-ShowConnections/blob/main/dist/ShowConnections.js"},m={name:G,version:$,description:j,authors:K,links:W};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const _=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal;const X=o.Pressable;o.RefreshControl;const L=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const b=o.Text;o.TextInput,o.TouchableHighlight;const C=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const h=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon;const q=o.FormInput;o.FormLabel;const v=o.FormRadio,g=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function f(e,t,i){window.enmity.settings.set(e,t,i)}function w(e,t,i){return window.enmity.settings.get(e,t,i)}const O=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),r=E.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...O},image:{width:75,height:75,borderRadius:10,...O},mainText:{opacity:.975,letterSpacing:.25},header:{color:d.ThemeColorMap.HEADER_PRIMARY,fontFamily:d.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:d.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),T=window.enmity.modules.common.Components.General.Animated,[z,ce]=U(A.byProps("transitionToGuild","openURL"),A.byProps("setString"));var J=({manifest:e})=>{const t=n.useRef(new T.Value(1)).current,i=()=>{T.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},s=()=>{T.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>z.openURL(e.links.source),u={transform:[{scale:t}]};return n.createElement(h,{style:r.container},n.createElement(C,{onPress:a,onPressIn:i,onPressOut:s},n.createElement(T.View,{style:u},n.createElement(_,{style:[r.image],source:{uri:"https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png"}}))),n.createElement(h,{style:r.textContainer},n.createElement(C,{onPress:()=>z.openURL(e.links.source)},n.createElement(b,{style:[r.mainText,r.header]},e.name)),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(b,{style:[r.mainText,r.subHeader]},"A project by ",e.authors[0].name)),n.createElement(h,null,n.createElement(C,{style:{flexDirection:"row"}},n.createElement(b,{style:[r.mainText,r.subHeader]},"Version:"),n.createElement(b,{style:[r.mainText,r.subHeader,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},e.version)))))};const Q=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),Z=E.createThemedStyleSheet({container:{width:"90%",marginTop:25,marginLeft:"5%",borderRadius:10,backgroundColor:d.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadow:Q}});var ee=({settings:e})=>n.createElement(L,null,n.createElement(J,{manifest:m}),n.createElement(h,{style:[Z.container]},n.createElement(g,{label:"Compact",trailing:n.createElement(v,{selected:w(m.name,"mode","cozy")==="compact"}),onPress:()=>{f(m.name,"mode","compact")}}),n.createElement(g,{label:"Cozy",trailing:n.createElement(v,{selected:w(m.name,"mode","cozy")==="cozy"}),onPress:()=>{f(m.name,"mode","cozy")}}),n.createElement(g,{label:"Roomy",trailing:n.createElement(v,{selected:w(m.name,"mode","cozy")==="roomy"}),onPress:()=>{f(m.name,"mode","roomy")}}),n.createElement(g,{label:"Extreme",trailing:n.createElement(v,{selected:w(m.name,"mode","cozy")==="extreme"}),onPress:()=>{f(m.name,"mode","extreme")}}),n.createElement(g,{label:"Icon Size",subLabel:"Changes the size of connection icons",trailing:n.createElement(q,{value:w(m.name,"iconSize","32"),onChange:t=>{f(m.name,"iconSize",t.replace(/\D/g,""))}})})));function B(e,t,i){return window.enmity.utilities.findInReactTree(e,t,i)}function F(e){return window.enmity.assets.getIDByName(e)}const{useThemeContext:oe}=S("useThemeContext"),{meta:{resolveSemanticColor:ne}}=S("colors","meta"),te=H("UserProfileSection"),ie=S("getUserProfile");E.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,width:"100%",marginTop:-4,marginRight:-12},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:d.ThemeColorMap.BACKGROUND_SECONDARY_ALT},text:{fontFamily:d.Fonts.DISPLAY_NORMAL}});function me({connection:e,userTheme:t}){let i=F(`img_account_sync_${e.type.replace("riotgames","riot")}_light_and_dark`);i||(i=F(`img_account_sync_${e.type.replace("riotgames","riot")}_${t.replace("dark","white")}`)),e.type==="domain"&&(i=F("ic_globe_24px"));let s=w(m.name,"mode","cozy"),a=(()=>{switch(s){case"compact":return 0;case"cozy":return 5;case"roomy":return 10;case"extreme":return 15;default:return 1}})();return n.createElement(X,{onPress:()=>console.log("hi"),style:{marginRight:{result:a}}},n.createElement(_,{accessibilityLabel:e.name,source:i,style:{width:48,height:48}}))}var re=({userId:e,theme:t})=>{const i=oe();ne(i.theme,d.ThemeColorMap.TEXT_NORMAL);const s=ie.getUserProfile(e);if(!s)return null;const a=s.connectedAccounts;return a!=null&&a.length?n.createElement(te,{title:"Connections"},n.createElement(L,{horizontal:!0,style:{flexDirection:"row"}},a.map(u=>n.createElement(me,{connection:u,userTheme:t})))):null};const k=Y("show-connections"),ae=S("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING");function le(e){for(;e.length>0;)e.pop()}const se={...m,onStart(){k.after(ae.default,"type",(e,t,i)=>{var s,a,u,R,P,x;const y=(a=(s=B(i,l=>{var c,p;return((c=l==null?void 0:l.type)==null?void 0:c.displayName)==="View"&&((p=l==null?void 0:l.props)==null?void 0:p.children.findIndex(I=>{var N;return((N=I==null?void 0:I.type)==null?void 0:N.name)==="UserProfileBio"}))!==-1}))==null?void 0:s.props)==null?void 0:a.children,D=(u=B(i,l=>{var c;return((c=l==null?void 0:l.type)==null?void 0:c.name)==="ThemeContextProvider"}))==null?void 0:u.props;if(!y)return i;const{userId:M}=(x=(P=(R=y==null?void 0:y.find(l=>{var c,p;return typeof((p=(c=l==null?void 0:l.props)==null?void 0:c.displayProfile)==null?void 0:p.userId)=="string"}))==null?void 0:R.props)==null?void 0:P.displayProfile)!=null?x:{};le(y),y.unshift(n.createElement(re,{userId:M,theme:D==null?void 0:D.theme}))})},onStop(){k.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(ee,{settings:e})}};V(se);
