function z(e){window.enmity.plugins.registerPlugin(e)}const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const C=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const N={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function _(...e){return window.enmity.modules.bulk(...e)}function c(...e){return window.enmity.modules.getByProps(...e)}function M(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function V(e){return window.enmity.patcher.create(e)}var U="ShowConnections",G="1.0.5",H="",Y=[{name:"FutureMapper",profile:"https://github.com/Futuremappermydud",id:"741727188809810181"}],$={source:"https://github.com/Futuremappermydud/Emnity-ShowConnections/",dist:"https://github.com/Futuremappermydud/Emnity-ShowConnections/blob/main/dist/ShowConnections.js"},r={name:U,version:G,description:H,authors:Y,links:$};const{components:o}=window.enmity;o.Alert;const I=o.Button;o.FlatList;const x=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const j=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const f=o.Text;o.TextInput,o.TouchableHighlight;const E=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const h=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon;const K=o.FormInput;o.FormLabel;const F=o.FormRadio,S=o.FormRow;o.FormSection,o.FormSelect,o.FormSubLabel,o.FormSwitch,o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function b(e,t,i){window.enmity.settings.set(e,t,i)}function w(e,t,i){return window.enmity.settings.get(e,t,i)}const L=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),a=C.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...L},image:{width:75,height:75,borderRadius:10,...L},mainText:{opacity:.975,letterSpacing:.25},header:{color:l.ThemeColorMap.HEADER_PRIMARY,fontFamily:l.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:l.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),T=window.enmity.modules.common.Components.General.Animated,[O,se]=_(N.byProps("transitionToGuild","openURL"),N.byProps("setString"));var W=({manifest:e})=>{const t=n.useRef(new T.Value(1)).current,i=()=>{T.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},m=()=>{T.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},s=()=>O.openURL(e.links.source),d={transform:[{scale:t}]};return n.createElement(h,{style:a.container},n.createElement(E,{onPress:s,onPressIn:i,onPressOut:m},n.createElement(T.View,{style:d},n.createElement(x,{style:[a.image],source:{uri:"https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png"}}))),n.createElement(h,{style:a.textContainer},n.createElement(E,{onPress:()=>O.openURL(e.links.source)},n.createElement(f,{style:[a.mainText,a.header]},e.name)),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(f,{style:[a.mainText,a.subHeader]},"A project by ",e.authors[0].name)),n.createElement(h,null,n.createElement(E,{style:{flexDirection:"row"}},n.createElement(f,{style:[a.mainText,a.subHeader]},"Version:"),n.createElement(f,{style:[a.mainText,a.subHeader,{paddingLeft:4,fontFamily:l.Fonts.DISPLAY_BOLD}]},e.version)))))};const X=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),q=C.createThemedStyleSheet({container:{width:"90%",marginTop:25,marginLeft:"5%",borderRadius:10,backgroundColor:l.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadow:X}});var J=({settings:e})=>n.createElement(j,null,n.createElement(W,{manifest:r}),n.createElement(h,{style:[q.container]},n.createElement(S,{label:"Compact",trailing:n.createElement(F,{selected:w(r.name,"mode","cozy")==="compact"}),onPress:()=>{b(r.name,"mode","compact")}}),n.createElement(S,{label:"Cozy",trailing:n.createElement(F,{selected:w(r.name,"mode","cozy")==="cozy"}),onPress:()=>{b(r.name,"mode","cozy")}}),n.createElement(S,{label:"Roomy",trailing:n.createElement(F,{selected:w(r.name,"mode","cozy")==="roomy"}),onPress:()=>{b(r.name,"mode","roomy")}}),n.createElement(S,{label:"Icon Size",subLabel:"Changes the size of connection icons",trailing:n.createElement(K,{value:w(r.name,"iconSize","32"),onChange:t=>{b(r.name,"iconSize",t.replace(/\D/g,""))}})})));function Q(e,t,i){return window.enmity.utilities.findInReactTree(e,t,i)}const{useThemeContext:Z}=c("useThemeContext"),{meta:{resolveSemanticColor:ee}}=c("colors","meta"),oe=M("UserProfileSection");c("UserProfileGradientCard"),c("triggerHaptic");const ne=c("getUserProfile"),te=c("isSupported","getByUrl");C.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,width:"100%",marginTop:-4,marginRight:-12},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:l.ThemeColorMap.BACKGROUND_SECONDARY_ALT},text:{fontFamily:l.Fonts.DISPLAY_NORMAL}});function ie({connection:e,userTheme:t}){var i;const m=te.get(e.type),s=(i=m.getPlatformUserUrl)==null?void 0:i.call(m,e),d=n.createElement(x,{accessibilityLabel:e.name,source:t==="light"?m.icon.lightSVG:m.icon.darkSVG,style:{width:w(r.name,"iconSize",32),height:w(r.name,"iconSize",32)}});return s?n.createElement(I,{className:"vc-user-connection",onClick:()=>console.log("hi")},d):n.createElement(I,{className:"vc-user-connection",onClick:()=>console.log("hi")},d)}var me=({userId:e,theme:t})=>{const i=Z();ee(i.theme,l.ThemeColorMap.TEXT_NORMAL);const m=ne.getUserProfile(e);if(!m)return null;const s=m.connectedAccounts;return s!=null&&s.length?n.createElement(oe,{title:"Connections"},n.createElement(ie,{connection:{type:"github",id:"54294576",name:"Futuremappermydud",verified:!0},userTheme:t})):null};const k=c("startTyping"),v=V("show-connections"),re=c("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),ae={...r,onStart(){v.instead(k,"startTyping",()=>{}),v.instead(k,"stopTyping",()=>{}),v.after(re.default,"type",(e,t,i)=>{var m,s,d,R,P;const g=(s=(m=Q(i,u=>{var y,p;return((y=u==null?void 0:u.type)==null?void 0:y.displayName)==="View"&&((p=u==null?void 0:u.props)==null?void 0:p.children.findIndex(A=>{var D;return((D=A==null?void 0:A.type)==null?void 0:D.name)==="UserProfileBio"}))!==-1}))==null?void 0:m.props)==null?void 0:s.children;if(!g)return i;const{userId:B}=(P=(R=(d=g==null?void 0:g.find(u=>{var y,p;return typeof((p=(y=u==null?void 0:u.props)==null?void 0:y.displayProfile)==null?void 0:p.userId)=="string"}))==null?void 0:d.props)==null?void 0:R.displayProfile)!=null?P:{};g.unshift(n.createElement(me,{userId:B,theme:"dark"}))})},onStop(){v.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(J,{settings:e})}};z(ae);
