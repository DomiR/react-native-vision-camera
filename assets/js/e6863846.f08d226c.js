(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[8191],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return o},Z:function(){return i}});var n=r(2263),a=r(3919);function o(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(s)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},5226:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=r(4996),s=["components"],l={id:"frame-processors-plugins-overview",title:"Creating Frame Processor Plugins",sidebar_label:"Overview"},c={unversionedId:"guides/frame-processors-plugins-overview",id:"guides/frame-processors-plugins-overview",isDocsHomePage:!1,title:"Creating Frame Processor Plugins",description:"Overview",source:"@site/docs/guides/FRAME_PROCESSORS_CREATE_OVERVIEW.mdx",sourceDirName:"guides",slug:"/guides/frame-processors-plugins-overview",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-overview",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/guides/FRAME_PROCESSORS_CREATE_OVERVIEW.mdx",version:"current",sidebar_label:"Overview",frontMatter:{id:"frame-processors-plugins-overview",title:"Creating Frame Processor Plugins",sidebar_label:"Overview"},sidebar:"visionSidebar",previous:{title:"Frame Processors",permalink:"/react-native-vision-camera/docs/guides/frame-processors"},next:{title:"Creating Frame Processor Plugins for iOS",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-ios"}},u=[{value:"Overview",id:"overview",children:[{value:"Return Types",id:"return-types",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Long-running Frame Processors",id:"long-running-frame-processors",children:[]},{value:"Async Frame Processors with Event Emitters",id:"async-frame-processors-with-event-emitters",children:[]},{value:"Benchmarking Frame Processor Plugins",id:"benchmarking-frame-processor-plugins",children:[]}]}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Frame Processor Plugins are ",(0,o.kt)("strong",{parentName:"p"},"native functions")," which can be directly called from a JS Frame Processor. (See ",(0,o.kt)("a",{parentName:"p",href:"frame-processors"},"Frame Processors"),")"),(0,o.kt)("p",null,"They ",(0,o.kt)("strong",{parentName:"p"},"receive a frame from the Camera")," as an input and can return any kind of output. For example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"scanQRCodes")," function returns an array of detected QR code strings in the frame:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{4-5}","{4-5}":!0},"function App() {\n  const frameProcessor = useFrameProcessor((frame) => {\n    'worklet'\n    const qrCodes = scanQRCodes(frame)\n    _log(`QR Codes in Frame: ${qrCodes}`)\n  }, [])\n\n  return (\n    <Camera frameProcessor={frameProcessor} {...cameraProps} />\n  )\n}\n")),(0,o.kt)("p",null,"To achieve ",(0,o.kt)("strong",{parentName:"p"},"maximum performance"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"scanQRCodes")," function is written in a native language (e.g. Objective-C), but it will be directly called from the VisionCamera Frame Processor JavaScript-Runtime."),(0,o.kt)("h3",{id:"return-types"},"Return Types"),(0,o.kt)("p",null,"Frame Processors can return any primitive value that is representable in JS. So for Objective-C that maps to:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"JS Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Objective-C Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Java Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NSNumber")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"double"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NSNumber")," (boolean)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NSString")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NSArray")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Array<Object>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NSDictionary")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HashMap<Object>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"nil")," / ",(0,o.kt)("inlineCode",{parentName:"td"},"NSNull")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"null"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(any, any) => void")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RCTResponseSenderBlock")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(Object, Object) -> void"))))),(0,o.kt)("p",null,"The values will automatically be converted to JS values, so the following Objective-C frame processor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'static inline id detectObject(CMSampleBufferRef buffer, NSArray args) {\n  return @"cat";\n}\n')),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," in JS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function detectObject(frame: Frame): string {\n  'worklet';\n  const result =  __detectObject(frame);\n  _log(result) // <-- \"cat\"\n}\n")),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"Frame Processors can also accept parameters, following the same type convention as ",(0,o.kt)("a",{parentName:"p",href:"#return-types"},"return values"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const frameProcessor = useFrameProcessor((frame) => {\n  'worklet'\n  const codes = scanCodes(frame, ['qr', 'barcode'])\n}, [])\n")),(0,o.kt)("p",null,"Or with multiple parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const frameProcessor = useFrameProcessor((frame) => {\n  'worklet'\n  const codes = scanCodes(frame, true, 'hello-world', 42)\n}, [])\n")),(0,o.kt)("h3",{id:"long-running-frame-processors"},"Long-running Frame Processors"),(0,o.kt)("p",null,"If your Frame Processor takes longer than a single frame interval to execute, or runs asynchronously, you can create a ",(0,o.kt)("strong",{parentName:"p"},"copy of the frame")," and dispatch the actual frame processing to a ",(0,o.kt)("strong",{parentName:"p"},"separate thread"),"."),(0,o.kt)("p",null,"For example, a realtime video chat application might use WebRTC to send the frames to the server. I/O operations (networking) are asynchronous, and we don't ",(0,o.kt)("em",{parentName:"p"},"need")," to wait for the upload to succeed before pushing the next frame, so we copy the frame and perform the upload on another Thread."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"static dispatch_queue_t queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0ul);\n\nstatic inline id sendFrameToWebRTC(CMSampleBufferRef buffer, NSArray args) {\n  CMSampleBufferRef bufferCopy;\n  CMSampleBufferCreateCopy(kCFAllocatorDefault, buffer, &bufferCopy);\n\n  dispatch_async(queue, ^{\n    NSString* serverURL = (NSString*)args[0];\n    [WebRTC uploadFrame:bufferCopy toServer:serverURL];\n  });\n\n  return nil;\n}\n")),(0,o.kt)("h3",{id:"async-frame-processors-with-event-emitters"},"Async Frame Processors with Event Emitters"),(0,o.kt)("p",null,"You might also run some very complex AI algorithms which are not fast enough to smoothly run at ",(0,o.kt)("strong",{parentName:"p"},"30 FPS")," (",(0,o.kt)("strong",{parentName:"p"},"33ms"),'). To not drop any frames you can create a custom "frame queue" which processes the copied frames and calls back into JS via a React event emitter. For this you\'ll have to create a Native Module that handles the asynchronous native -> JS communication, see ',(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/native-modules-android#sending-events-to-javascript"},'"Sending events to JavaScript" (Android)')," and ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/native-modules-ios#sending-events-to-javascript"},'"Sending events to JavaScript" (iOS)'),"."),(0,o.kt)("p",null,"This might look like this for the user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const frameProcessor = useFrameProcessor((frame) => {\n    'worklet'\n    SomeAI.process(frame) // does not block frame processor, runs async\n  }, [])\n\n  useEffect(() => {\n    SomeAI.addListener((results) => {\n      // gets called asynchronously, goes through the React Event Emitter system\n      console.log(`AI results: ${results}`)\n    })\n  }, [])\n\n  return (\n    <Camera frameProcessor={frameProcessor} {...cameraProps} />\n  )\n}\n")),(0,o.kt)("p",null,"This way you can handle queueing up the frames yourself and asynchronously call back into JS at some later point in time using event emitters."),(0,o.kt)("h3",{id:"benchmarking-frame-processor-plugins"},"Benchmarking Frame Processor Plugins"),(0,o.kt)("p",null,"Your Frame Processor Plugins have to be fast. VisionCamera automatically detects slow Frame Processors and outputs relevant information in the native console (Xcode: ",(0,o.kt)("strong",{parentName:"p"},"Debug Area"),", Android Studio: ",(0,o.kt)("strong",{parentName:"p"},"Logcat"),"):"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,i.Z)("img/slow-log.png"),width:"80%"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:(0,i.Z)("img/slow-log-2.png"),width:"80%"})),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"-create-your-first-frame-processor-plugin-for-ios-or-android"},"\ud83d\ude80 Create your first Frame Processor Plugin for ",(0,o.kt)("a",{parentName:"h4",href:"frame-processors-plugins-ios"},"iOS")," or ",(0,o.kt)("a",{parentName:"h4",href:"frame-processors-plugins-android"},"Android"),"!"))}m.isMDXComponent=!0}}]);