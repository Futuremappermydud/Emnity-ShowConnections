function k(e){window.enmity.plugins.registerPlugin(e)}const s=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const C=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const I={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function M(...e){return window.enmity.modules.bulk(...e)}function u(...e){return window.enmity.modules.getByProps(...e)}function z(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function V(e){return window.enmity.patcher.create(e)}var U="ShowConnections",H="1.0.1",Y="",$=[{name:"FutureMapper",profile:"https://github.com/Futuremappermydud",id:"741727188809810181"}],G={source:"https://github.com/Futuremappermydud/Emnity-ShowConnections/",dist:"https://github.com/Futuremappermydud/Emnity-ShowConnections/blob/main/dist/ShowConnections.js"},r={name:U,version:H,description:Y,authors:$,links:G};const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const N=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal;const j=o.Pressable;o.RefreshControl;const K=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const g=o.Text;o.TextInput,o.TouchableHighlight;const E=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const w=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon;const W=o.FormInput;o.FormLabel;const F=o.FormRadio,f=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function S(e,t,i){window.enmity.settings.set(e,t,i)}function b(e,t,i){return window.enmity.settings.get(e,t,i)}const _=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),m=C.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",..._},image:{width:75,height:75,borderRadius:10,..._},mainText:{opacity:.975,letterSpacing:.25},header:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:s.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),T=window.enmity.modules.common.Components.General.Animated,[x,se]=M(I.byProps("transitionToGuild","openURL"),I.byProps("setString"));var X=({manifest:e})=>{const t=n.useRef(new T.Value(1)).current,i=()=>{T.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},l=()=>{T.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>x.openURL(e.links.source),d={transform:[{scale:t}]};return n.createElement(w,{style:m.container},n.createElement(E,{onPress:a,onPressIn:i,onPressOut:l},n.createElement(T.View,{style:d},n.createElement(N,{style:[m.image],source:{uri:"https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png"}}))),n.createElement(w,{style:m.textContainer},n.createElement(E,{onPress:()=>x.openURL(e.links.source)},n.createElement(g,{style:[m.mainText,m.header]},e.name)),n.createElement(w,{style:{flexDirection:"row"}},n.createElement(g,{style:[m.mainText,m.subHeader]},"A project by ",e.authors[0].name)),n.createElement(w,null,n.createElement(E,{style:{flexDirection:"row"}},n.createElement(g,{style:[m.mainText,m.subHeader]},"Version:"),n.createElement(g,{style:[m.mainText,m.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD}]},e.version)))))};const q=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),J=C.createThemedStyleSheet({container:{width:"90%",marginTop:25,marginLeft:"5%",borderRadius:10,backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadow:q}});var Q=({settings:e})=>n.createElement(K,null,n.createElement(X,{manifest:r}),n.createElement(w,{style:[J.container]},n.createElement(f,{label:"Compact",trailing:n.createElement(F,{selected:b(r.name,"mode","cozy")==="compact"}),onPress:()=>{S(r.name,"mode","compact")}}),n.createElement(f,{label:"Cozy",trailing:n.createElement(F,{selected:b(r.name,"mode","cozy")==="cozy"}),onPress:()=>{S(r.name,"mode","cozy")}}),n.createElement(f,{label:"Roomy",trailing:n.createElement(F,{selected:b(r.name,"mode","cozy")==="roomy"}),onPress:()=>{S(r.name,"mode","roomy")}}),n.createElement(f,{label:"Icon Size",subLabel:"Changes the size of connection icons",trailing:n.createElement(W,{value:b(r.name,"iconSize","32"),onChange:t=>{S(r.name,"iconSize",t.replace(/\D/g,""))}})})));function Z(e,t,i){return window.enmity.utilities.findInReactTree(e,t,i)}function L(e){return window.enmity.assets.getIDByName(e)}const{useThemeContext:ee}=u("useThemeContext"),{meta:{resolveSemanticColor:oe}}=u("colors","meta"),ne=z("UserProfileSection"),te=u("getUserProfile");C.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,width:"100%",marginTop:-4,marginRight:-12},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:s.ThemeColorMap.BACKGROUND_SECONDARY_ALT},text:{fontFamily:s.Fonts.DISPLAY_NORMAL}});function ie({connection:e,userTheme:t}){let i=L(`img_account_sync_${e.type}_light_and_dark`);return i||(i=L(`img_account_sync_${e.type}_${t}`)),n.createElement(j,{onPress:()=>console.log("hi")},n.createElement(N,{accessibilityLabel:e.name,source:i,style:{width:32,height:32}}))}var me=({userId:e,theme:t})=>{const i=ee();oe(i.theme,s.ThemeColorMap.TEXT_NORMAL);const l=te.getUserProfile(e);if(!l)return null;const a=l.connectedAccounts;return a!=null&&a.length?n.createElement(ne,{title:"Connections"},n.createElement(w,{style:{flexDirection:"row"}},a.map(d=>n.createElement(ie,{connection:d,userTheme:t})))):null};const O=u("startTyping"),v=V("show-connections"),re=u("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING");u("theme","primaryColor");const ae={...r,onStart(){v.instead(O,"startTyping",()=>{}),v.instead(O,"stopTyping",()=>{}),v.after(re.default,"type",(e,t,i)=>{var l,a,d,R,P;const h=(a=(l=Z(i,c=>{var y,p;return((y=c==null?void 0:c.type)==null?void 0:y.displayName)==="View"&&((p=c==null?void 0:c.props)==null?void 0:p.children.findIndex(D=>{var A;return((A=D==null?void 0:D.type)==null?void 0:A.name)==="UserProfileBio"}))!==-1}))==null?void 0:l.props)==null?void 0:a.children;if(!h)return i;const{userId:B}=(P=(R=(d=h==null?void 0:h.find(c=>{var y,p;return typeof((p=(y=c==null?void 0:c.props)==null?void 0:y.displayProfile)==null?void 0:p.userId)=="string"}))==null?void 0:d.props)==null?void 0:R.displayProfile)!=null?P:{};h.unshift(n.createElement(me,{userId:B,theme:"light"}))})},onStop(){v.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(Q,{settings:e})}};k(ae);
