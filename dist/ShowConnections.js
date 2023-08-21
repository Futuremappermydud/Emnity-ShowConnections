function L(o){window.enmity.plugins.registerPlugin(o)}const d=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const R=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const P={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,t)=>window.enmity.modules.filters.byName(o,t),byTypeName:(o,t)=>window.enmity.modules.filters.byTypeName(o,t),byDisplayName:(o,t)=>window.enmity.modules.filters.byDisplayName(o,t)};function O(...o){return window.enmity.modules.bulk(...o)}function r(...o){return window.enmity.modules.getByProps(...o)}function k(...o){return window.enmity.modules.getByName(...o)}window.enmity.modules.common;function B(o){return window.enmity.patcher.create(o)}var _="ShowConnections",M="1.0.0",V="",H=[{name:"FutureMapper",profile:"https://github.com/Futuremappermydud",id:"741727188809810181"}],U={source:"https://github.com/Futuremappermydud/Emnity-ShowConnections/",dist:"https://github.com/Futuremappermydud/Emnity-ShowConnections/blob/main/dist/ShowConnections.js"},A={name:_,version:M,description:V,authors:H,links:U};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const Y=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const G=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const p=e.Text;e.TextInput;const z=e.TouchableHighlight,S=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const g=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const j=e.FormDivider;e.FormHint,e.FormIcon,e.FormInput,e.FormLabel;const v=e.FormRadio,T=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const D=(o=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:o,shadowRadius:4.65,elevation:8}),i=R.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...D},image:{width:75,height:75,borderRadius:10,...D},mainText:{opacity:.975,letterSpacing:.25},header:{color:d.ThemeColorMap.HEADER_PRIMARY,fontFamily:d.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:d.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),h=window.enmity.modules.common.Components.General.Animated,[x,ne]=O(P.byProps("transitionToGuild","openURL"),P.byProps("setString"));var $=({manifest:o})=>{const t=n.useRef(new h.Value(1)).current,m=()=>{h.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},l=()=>{h.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>x.openURL(o.links.source),w={transform:[{scale:t}]};return n.createElement(g,{style:i.container},n.createElement(S,{onPress:a,onPressIn:m,onPressOut:l},n.createElement(h.View,{style:w},n.createElement(Y,{style:[i.image],source:{uri:"https://cdn.discordapp.com/avatars/741727188809810181/8bb5f28abad304e8f5983d077bdf9ae9.png"}}))),n.createElement(g,{style:i.textContainer},n.createElement(S,{onPress:()=>x.openURL(o.links.source)},n.createElement(p,{style:[i.mainText,i.header]},o.name)),n.createElement(g,{style:{flexDirection:"row"}},n.createElement(p,{style:[i.mainText,i.subHeader]},"A project by")),n.createElement(g,null,n.createElement(S,{style:{flexDirection:"row"}},n.createElement(p,{style:[i.mainText,i.subHeader]},"Version:"),n.createElement(p,{style:[i.mainText,i.subHeader,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},o.version)))))},K=({settings:o})=>n.createElement(G,null,n.createElement($,{manifest:A}),n.createElement(j,null),n.createElement(z,null,n.createElement(T,{label:"Compact",trailing:n.createElement(v,{value:!1})})),n.createElement(T,{label:"Cozy",trailing:n.createElement(v,{value:!0})}),n.createElement(T,{label:"Roomy",trailing:n.createElement(v,{value:!1})}));function W(o,t,m){return window.enmity.utilities.findInReactTree(o,t,m)}const{useThemeContext:X}=r("useThemeContext"),{meta:{resolveSemanticColor:q}}=r("colors","meta"),J=k("UserProfileSection");r("UserProfileGradientCard"),r("triggerHaptic");const Q=r("getUserProfile");r("isSupported","getByUrl"),R.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,width:"100%",marginTop:-4,marginRight:-12},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:d.ThemeColorMap.BACKGROUND_SECONDARY_ALT},text:{fontFamily:d.Fonts.DISPLAY_NORMAL}});var Z=({userId:o,theme:t})=>{const m=X();q(m.theme,d.ThemeColorMap.TEXT_NORMAL);const l=Q.getUserProfile(o);if(!l)return null;const a=l.connectedAccounts;return a!=null&&a.length?n.createElement(J,{title:"Connections"}):null};const N=r("startTyping"),f=B("show-connections"),ee=r("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),oe={...A,onStart(){f.instead(N,"startTyping",()=>{}),f.instead(N,"stopTyping",()=>{}),f.after(ee.default,"type",(o,t,m)=>{var l,a,w,b,F;const y=(a=(l=W(m,s=>{var c,u;return((c=s==null?void 0:s.type)==null?void 0:c.displayName)==="View"&&((u=s==null?void 0:s.props)==null?void 0:u.children.findIndex(C=>{var E;return((E=C==null?void 0:C.type)==null?void 0:E.name)==="UserProfileBio"}))!==-1}))==null?void 0:l.props)==null?void 0:a.children;if(!y)return m;const{userId:I}=(F=(b=(w=y==null?void 0:y.find(s=>{var c,u;return typeof((u=(c=s==null?void 0:s.props)==null?void 0:c.displayProfile)==null?void 0:u.userId)=="string"}))==null?void 0:w.props)==null?void 0:b.displayProfile)!=null?F:{};y.unshift(n.createElement(Z,{userId:I,theme:"dark"}))})},onStop(){f.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(K,{settings:o})}};L(oe);
