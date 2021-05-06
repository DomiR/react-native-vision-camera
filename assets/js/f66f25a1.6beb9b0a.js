(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[9706],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return s}});var r=n(2263),i=n(3919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,s=a.forcePrependBaseUrl,o=void 0!==s&&s,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(o)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(a,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},9596:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),s=n(4996),o={id:"setup",title:"Getting Started",sidebar_label:"Getting Started",slug:"/guides"},u={unversionedId:"guides/setup",id:"guides/setup",isDocsHomePage:!1,title:"Getting Started",description:"Installing the library",source:"@site/docs/guides/SETUP.mdx",sourceDirName:"guides",slug:"/guides",permalink:"/react-native-vision-camera/docs/guides",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/guides/SETUP.mdx",version:"current",sidebar_label:"Getting Started",frontMatter:{id:"setup",title:"Getting Started",sidebar_label:"Getting Started",slug:"/guides"},sidebar:"visionSidebar",next:{title:"Camera Devices",permalink:"/react-native-vision-camera/docs/guides/devices"}},l=[{value:"Installing the library",id:"installing-the-library",children:[]},{value:"Updating manifests",id:"updating-manifests",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Getting/Requesting Permissions",id:"gettingrequesting-permissions",children:[{value:"Getting Permissions",id:"getting-permissions",children:[]},{value:"Requesting Permissions",id:"requesting-permissions",children:[]}]},{value:"Use the <code>&lt;Camera&gt;</code> view",id:"use-the-camera-view",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",null,(0,a.kt)("img",{align:"right",width:"283",src:(0,s.Z)("img/example_intro.png")})),(0,a.kt)("h2",{id:"installing-the-library"},"Installing the library"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-vision-camera"},(0,a.kt)("strong",{parentName:"a"},"react-native-vision-camera"))," through npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"npm i react-native-vision-camera\nnpx pod-install\n")),(0,a.kt)("p",null,"VisionCamera requires ",(0,a.kt)("strong",{parentName:"p"},"iOS 11 or higher"),", and ",(0,a.kt)("strong",{parentName:"p"},"Android-SDK version 21 or higher"),". See ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/troubleshooting"},"Troubleshooting")," if you're having installation issues."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"(Optional)")," If you want to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/frame-processors"},(0,a.kt)("strong",{parentName:"a"},"Frame Processors")),", you need to install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},(0,a.kt)("strong",{parentName:"a"},"react-native-reanimated"))," 2.1.0 or higher.")),(0,a.kt)("h2",{id:"updating-manifests"},"Updating manifests"),(0,a.kt)("p",null,"To use a Camera or Microphone you must first specify that your app requires camera and microphone permissions."),(0,a.kt)("h3",{id:"ios"},"iOS"),(0,a.kt)("p",null,"Open your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," and add the following lines inside the outermost ",(0,a.kt)("inlineCode",{parentName:"p"},"<dict>")," tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSCameraUsageDescription</key>\n<string>$(PRODUCT_NAME) needs access to your Camera to record videos and capture photos.</string>\n<key>NSMicrophoneUsageDescription</key>\n<string>$(PRODUCT_NAME) needs access to your Microphone to record videos with audio.</string>\n")),(0,a.kt)("h3",{id:"android"},"Android"),(0,a.kt)("p",null,"Open your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," and add the following lines inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"<manifest>")," tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.CAMERA" />\n<uses-permission android:name="android.permission.RECORD_AUDIO" />\n')),(0,a.kt)("h2",{id:"gettingrequesting-permissions"},"Getting/Requesting Permissions"),(0,a.kt)("p",null,"VisionCamera also provides functions to easily get and request Microphone and Camera permissions."),(0,a.kt)("h3",{id:"getting-permissions"},"Getting Permissions"),(0,a.kt)("p",null,"Simply use the ",(0,a.kt)("strong",{parentName:"p"},"get")," functions to find out if a user has granted or denied permission before:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const cameraPermission = await Camera.getCameraPermissionStatus()\nconst microphonePermission = await Camera.getMicrophonePermissionStatus()\n")),(0,a.kt)("p",null,"A permission status can have the following values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authorized"),": Your app is authorized to use said permission. Continue with ",(0,a.kt)("a",{parentName:"li",href:"#use-the-camera-view"},(0,a.kt)("strong",{parentName:"a"},"using the ",(0,a.kt)("inlineCode",{parentName:"strong"},"<Camera>")," view")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"not-determined"),": Your app has not yet requested permission from the user. ",(0,a.kt)("a",{parentName:"li",href:"#requesting-permissions"},"Continue by calling the ",(0,a.kt)("strong",{parentName:"a"},"request")," functions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"denied"),": Your app has already requested permissions from the user, but was explicitly denied. You cannot use the ",(0,a.kt)("strong",{parentName:"li"},"request")," functions again, but you can use the ",(0,a.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/linking#opensettings"},(0,a.kt)("inlineCode",{parentName:"a"},"Linking")," API")," to redirect the user to the Settings App where he can manually grant the permission."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"restricted"),": (iOS only) Your app cannot use the Camera or Microphone because that functionality has been restricted, possibly due to active restrictions such as parental controls being in place.")),(0,a.kt)("h3",{id:"requesting-permissions"},"Requesting Permissions"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("strong",{parentName:"p"},"request")," functions to prompt the user to give your app permission to use the Camera or Microphone."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("strong",{parentName:"p"},"request")," functions only have effect if the current permission status is ",(0,a.kt)("inlineCode",{parentName:"p"},"not-determined"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const newCameraPermission = await Camera.requestCameraPermission()\nconst newMicrophonePermission = await Camera.requestMicrophonePermission()\n")),(0,a.kt)("p",null,"The permission request status can have the following values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"authorized"),": Your app is authorized to use said permission. Continue with ",(0,a.kt)("a",{parentName:"li",href:"#use-the-camera-view"},(0,a.kt)("strong",{parentName:"a"},"using the ",(0,a.kt)("inlineCode",{parentName:"strong"},"<Camera>")," view")),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"denied"),": The user explicitly denied the permission request alert. You cannot use the ",(0,a.kt)("strong",{parentName:"li"},"request")," functions again, but you can use the ",(0,a.kt)("a",{parentName:"li",href:"https://reactnative.dev/docs/linking#opensettings"},(0,a.kt)("inlineCode",{parentName:"a"},"Linking")," API")," to redirect the user to the Settings App where he can manually grant the permission."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"restricted"),": (iOS only) Your app cannot use the Camera or Microphone because that functionality has been restricted, possibly due to active restrictions such as parental controls being in place.")),(0,a.kt)("h2",{id:"use-the-camera-view"},"Use the ",(0,a.kt)("inlineCode",{parentName:"h2"},"<Camera>")," view"),(0,a.kt)("p",null,"If your app has permission to use the Camera and Microphone, simply use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/modules/hooks_usecameradevices"},(0,a.kt)("inlineCode",{parentName:"a"},"useCameraDevices(...)"))," hook to get a Camera device (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/devices"},"Camera Devices"),") and mount the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Camera>")," view:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const devices = useCameraDevices()\n  const device = devices.back\n\n  if (device == null) return <LoadingView />\n  return (\n    <Camera\n      style={StyleSheet.absoluteFill}\n      device={device}\n      isActive={true}\n    />\n  )\n}\n")),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"-hooray-youre-ready-to-learn-about-camera-devices"},"\ud83c\udf89 Hooray! You're ready to learn about ",(0,a.kt)("a",{parentName:"h4",href:"/docs/guides/devices"},"Camera Devices"),"!"))}c.isMDXComponent=!0}}]);