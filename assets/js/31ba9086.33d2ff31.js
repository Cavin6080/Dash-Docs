"use strict";(self.webpackChunkboilerplate_docs=self.webpackChunkboilerplate_docs||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),s=n(6550),l=n(1980),p=n(7392),u=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,p]=h({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=l??m;return c({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var k=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(m(t),l(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},3062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const o={sidebar_position:4,description:"Learn the API integration process of the boilerplate."},i="Implementing a Feature",s={unversionedId:"tutorial-basics/implementing-a-feature",id:"tutorial-basics/implementing-a-feature",title:"Implementing a Feature",description:"Learn the API integration process of the boilerplate.",source:"@site/docs/tutorial-basics/implementing-a-feature.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/implementing-a-feature",permalink:"/Dash-Docs/docs/tutorial-basics/implementing-a-feature",draft:!1,editUrl:"#/docs/tutorial-basics/implementing-a-feature.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn the API integration process of the boilerplate."},sidebar:"tutorialSidebar",previous:{title:"Routing",permalink:"/Dash-Docs/docs/tutorial-basics/router"},next:{title:"Tutorial - Extras",permalink:"/Dash-Docs/docs/category/tutorial---extras"}},l={},p=[{value:"Create necessary folders \ud83d\udcc1",id:"create-necessary-folders-",level:2},{value:"Creating UI \ud83c\udfa8",id:"creating-ui-",level:2},{value:"Integrating API in Repository \ud83c\udf10",id:"integrating-api-in-repository-",level:2},{value:"1. Make an HTTP request \ud83c\udf81",id:"1-make-an-http-request-",level:3},{value:"2. Check for a valid response \u2714\ufe0e",id:"2-check-for-a-valid-response-\ufe0e",level:3},{value:"3. Decode the response from JSON \ud83d\udd01",id:"3-decode-the-response-from-json-",level:3},{value:"4. Validate the response format and convert to Dart objects \u2705",id:"4-validate-the-response-format-and-convert-to-dart-objects-",level:3},{value:"BLoC Layer \ud83e\uddf1",id:"bloc-layer-",level:2},{value:"1. Creating the Events file \u23ed\ufe0e",id:"1-creating-the-events-file-\ufe0e",level:3},{value:"2. Creating the State file \ud83d\udccc",id:"2-creating-the-state-file-",level:3},{value:"3. Creating the BLoC file \ud83d\udc68\u200d\ud83d\udcbc",id:"3-creating-the-bloc-file-",level:3},{value:"4. Providing the BLoCs and Repositories in the UI \ud83c\udf81",id:"4-providing-the-blocs-and-repositories-in-the-ui-",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"implementing-a-feature"},"Implementing a Feature"),(0,r.kt)("p",null,"This boilerplate is designed on feature first focus. So to implement any new feature,\nfollow the steps below:"),(0,r.kt)("h2",{id:"create-necessary-folders-"},"Create necessary folders \ud83d\udcc1"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a folder inside the ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/modules"),". The name of the folder should be your\nfeature name. Let's take an example of ",(0,r.kt)("strong",{parentName:"li"},"home")," feature.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="boilerplate"',title:'"boilerplate"'},"lib\n\u2514\u2500\u2500 modules\n    \u2514\u2500\u2500 home\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("strong",{parentName:"p"},"auth"),", ",(0,r.kt)("strong",{parentName:"p"},"home"),", ",(0,r.kt)("strong",{parentName:"p"},"profile"),", etc."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Now, Create 4 folders like this:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="boilerplate-structure"',title:'"boilerplate-structure"'},"lib\n\u2514\u2500\u2500 modules\n    \u251c\u2500\u2500 home\n    \u2502   \u251c\u2500\u2500 bloc\n    \u2502   \u2502   \u251c\u2500\u2500 home_event.dart\n    \u2502   \u2502   \u251c\u2500\u2500 home_state.dart\n    \u2502   \u2502   \u2514\u2500\u2500 home_bloc.dart\n    \u2502   \u2502\u2500\u2500 model\n    \u2502   \u2502   \u2514\u2500\u2500 home_model.dart\n    \u2502   \u251c\u2500\u2500 repository\n    \u2502   \u2502   \u2514\u2500\u2500 home_repository.dart\n    \u2502   \u251c\u2500\u2500 screen\n    \u2502   \u2502   \u2514\u2500\u2500 home_screen.dart\n")),(0,r.kt)("p",null,"Now, let's understand the purpose of each folder:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Folder Name \ud83d\udcc2"),(0,r.kt)("th",{parentName:"tr",align:null},"Use - case \ud83d\udd20"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Home \ud83c\udfe0"),(0,r.kt)("td",{parentName:"tr",align:null},"Feature name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bloc \ud83e\uddf1"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains BLoC, Event and States related to the feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model \ud83c\udfea"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains Dart Model that can be used in converting from JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"repository \ud83e\udea3"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains functions for API calling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"screen \ud83d\udcf2"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains UI of the feature")))),(0,r.kt)("h2",{id:"creating-ui-"},"Creating UI \ud83c\udfa8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating the UI should be straight-forward. Create your UI's as per Figma or using\nguidlines as you want to.")),(0,r.kt)("p",null,"We'll come back to this later as we'll need to initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"RepositoryProvider")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"BlocProvider")," in it. "),(0,r.kt)("h2",{id:"integrating-api-in-repository-"},"Integrating API in Repository \ud83c\udf10"),(0,r.kt)("p",null,"API integration is the core part of any App. Because it involves error handling, data fetching,\ndata manipulating and so on. We'll use ",(0,r.kt)("a",{parentName:"p",href:"https://www.pub.dev/packages/fpdart"},(0,r.kt)("strong",{parentName:"a"},"fp-dart"))," to handle\nall the logic throughout the App."),(0,r.kt)("p",null,"Integration of any API can be divided into 4 steps:"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"To do")),(0,r.kt)("p",null,"To integrate any API in your Flutter app, follow the steps below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Any API integration process starts from the ",(0,r.kt)("strong",{parentName:"p"},"repository")," file. Because in this file, user will\nwrite the actual logic of error handling and data manipulating(converting JSON to Dart objects)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Let's take an example of ",(0,r.kt)("strong",{parentName:"p"},"GET")," request. To implement it, create an ",(0,r.kt)("strong",{parentName:"p"},"abstract interface class")," like\nshown below:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="lib/modules/repository/home_repository.dart"',title:'"lib/modules/repository/home_repository.dart"'},"abstract interface class IHomeRepository {\n  /// This functions returns TaskEither. In this, Task is indicating that this function\n  /// is returning Future and Either is indcating that the function can either\n  /// successfully return a value or return a Failure Object.\n  TaskEither<Failure, List<HomeModel>> fetchPosts();\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Here, we're declaring one method called ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchPosts")," that returns a ",(0,r.kt)("a",{parentName:"li",href:"https://www.sandromaglione.com/techblog/how-to-use-task-either-fpdart-functional-programming"},(0,r.kt)("inlineCode",{parentName:"a"},"TaskEither")),". Meaning\nit can either return an Object of class ",(0,r.kt)("inlineCode",{parentName:"li"},"Faliure")," or it can succesfully retrive the data and send\nyou the ",(0,r.kt)("inlineCode",{parentName:"li"},"List<HomeModel>"),".")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This ",(0,r.kt)("inlineCode",{parentName:"p"},"IHomeRepository")," is marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"abstract")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"interface"),", meaning we should override\nall the methods of the base class. So that no instance can be created of ",(0,r.kt)("inlineCode",{parentName:"p"},"IHomeRepository")," class.\n",(0,r.kt)("a",{parentName:"p",href:"https://dart.dev/language/class-modifiers"},"Reference"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Now, let's divide the steps that you've to perform in the API integration \ud83d\udd17, so that you can understand\nthe whole flow of this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"1. Make an HTTP request \ud83c\udf81\n2. Check for a valid response \u2714\ufe0e\n3. Decode the response from JSON \ud83d\udd01\n4. Validate the response format and convert to Dart objects \u2705\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finally, let's implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"IHomeRepository")," class step by step. We'll implement the class\nin the same file as it will be easier to find the implementation and abstract class in the same file."))),(0,r.kt)("h3",{id:"1-make-an-http-request-"},"1. Make an HTTP request \ud83c\udf81"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We'll create seperate functions for each steps described earlier. First, create a\nfunction that makes an API call and returns ",(0,r.kt)("inlineCode",{parentName:"li"},"TaskEither<Failure, Response>"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="lib/modules/repository/home_repository.dart"',jsx:!0,title:'"lib/modules/repository/home_repository.dart"'},"class HomeRepository implements IHomeRepository {\n  @override\n  TaskEither<Failure, List<HomeModel>> fetchPosts() => makefetchPostsRequest('posts');\n\n  /// This functions calls the API and returns [Faliure] in case of any error\n  /// and [Response] in case of a successful API call\n  TaskEither<Failure, Response> makefetchPostsRequest(String url) {\n    return ApiClient.request(\n      path: url,\n      queryParameters: {'_limit': 10},\n      requestType: RequestType.get,\n    );\n  }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Faliure")," class will be integrated into the boilerplate. You can look up the\nimplementation of it by going into ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/core/domain/failure.dart"),".")),(0,r.kt)("h3",{id:"2-check-for-a-valid-response-\ufe0e"},"2. Check for a valid response \u2714\ufe0e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The beauty of using ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskEither")," along with the function approach is that anyone can\ncreate their functions and chain \ud83d\udd17 them directly to the exisisting chain \u222b without knowing\nmuch about other functions \ud83d\udccf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We can refactor the above code to chain multiple functions like this:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="lib/modules/repository/home_repository.dart"',jsx:!0,title:'"lib/modules/repository/home_repository.dart"'},"class HomeRepository implements IHomeRepository {\n  @override\n  TaskEither<Failure, List<HomeModel>> fetchPosts() => mappingRequest('posts');\n\n  /// This mapping request function is basically a wrapper around all of the function\n  ///  that makes API requets and hanldes the validation logic and Faliure handling\n  TaskEither<Failure, List<HomeModel>> mappingRequest(String url) =>\n      makefetchPostsRequest(url)\n      .chainEither(checkStatusCode);\n\n  TaskEither<Failure, Response> makefetchPostsRequest(String url, int page) {...}\n\n  /// This functions checks if the status code is valid or not\n  /// and based on that it returns the Response in case of success \n  /// or returns error in case of the Error.\n  Either<Failure, Response> checkStatusCode(Response response) => \n      Either<Failure, Response>.fromPredicate(\n        response,\n        (response) => response.statusCode == 200 || response.statusCode == 304,\n        (error) => APIFailure(error: error),\n      );\n}\n")),(0,r.kt)("h3",{id:"3-decode-the-response-from-json-"},"3. Decode the response from JSON \ud83d\udd01"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After you verify the status code, the next thing that we want to do it to convert the response\nof type ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Map<String,dynamic>"),". But as we know that this can also give us an error,\nwe'll create one other function that performs the operation of converting the ",(0,r.kt)("inlineCode",{parentName:"li"},"dynamic response"),"\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"Map<String,dynamic> response"),".")),(0,r.kt)("p",null,"Let's look at the implementation of this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="lib/modules/repository/home_repository.dart"',jsx:!0,title:'"lib/modules/repository/home_repository.dart"'},"class HomeRepository implements IHomeRepository {\n  @override\n  TaskEither<Failure, List<HomeModel>> fetchPosts() => mappingRequest('posts');\n\n  TaskEither<Failure, List<HomeModel>> mappingRequest(String url) =>\n      makefetchPostsRequest(url)\n      .chainEither(checkStatusCode)\n      .chainEither(mapToList);\n      \n\n  TaskEither<Failure, Response> makefetchPostsRequest(String url, int page) {...}\n\n  Either<Failure, Response> checkStatusCode(Response response) {...};\n\n  /// This function is responsible for converting the reponse to the dynamic list\n  /// which can also return Failure in case of any casting Error. That's why it\n  /// returns Either instead of List<dynamic>\n  Either<Failure, List<Map<String, dynamic>>> mapToList(Response response) {\n    return Either<Failure, List<Map<String, dynamic>>>.safeCast(\n      response.data,\n      (error) => ModelConversionFailure(error: error),\n    );\n  }\n}\n")),(0,r.kt)("h3",{id:"4-validate-the-response-format-and-convert-to-dart-objects-"},"4. Validate the response format and convert to Dart objects \u2705"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The last step that we want to perform in this repository is to convert the ",(0,r.kt)("inlineCode",{parentName:"li"},"Map<String,dynamic>"),"\ninto the Dart Models. As you might have gussed, we're gonna create a function for that too. ")),(0,r.kt)("p",null,"Let's look at the code for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="lib/modules/repository/home_repository.dart"',jsx:!0,title:'"lib/modules/repository/home_repository.dart"'},"class HomeRepository implements IHomeRepository {\n  @override\n  TaskEither<Failure, List<HomeModel>> fetchPosts() => mappingRequest('posts');\n\n  TaskEither<Failure, List<HomeModel>> mappingRequest(String url, int page) =>\n      makefetchPostsRequest(url, page)\n          .chainEither(checkStatusCode)\n          .chainEither(mapToList)\n          .flatMap(mapToModel);\n\n      \n\n  TaskEither<Failure, Response> makefetchPostsRequest(String url, int page) {...}\n\n  Either<Failure, Response> checkStatusCode(Response response) {...};\n\n  Either<Failure, List<Map<String, dynamic>>> mapToList(Response response) {...}\n\n  /// This function maps the List<Map<String,dynamic>> to List<HomeModel>. Since this conversion can also\n  /// thow error, we have to return TaskEither.\n  TaskEither<Failure, List<HomeModel>> mapToModel(List<Map<String, dynamic>> responseList) =>\n      TaskEither<Failure, List<HomeModel>>.tryCatch(\n        () async => responseList.map(HomeModel.fromJson).toList(),\n        (error, stackTrace) => ModelConversionFailure(\n          error: error,\n          stackTrace: stackTrace,\n        ),\n      );\n}\n")),(0,r.kt)("p",null,"This concludes all the steps you've to perform in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository Layer"),". Next thing you've\nto do is to implement this Repository in the ",(0,r.kt)("inlineCode",{parentName:"p"},"BLoC layer"),"."),(0,r.kt)("h2",{id:"bloc-layer-"},"BLoC Layer \ud83e\uddf1"),(0,r.kt)("p",null,"The next layer after the ",(0,r.kt)("strong",{parentName:"p"},"Repository Layer")," that a user has to develop is the ",(0,r.kt)("strong",{parentName:"p"},"BLoC layer"),". BLoC\nlayer will communaticate with the repository and based on the response. It will ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," the state."),(0,r.kt)("p",null,"To integrate BLoC, we've to create 3 files as followed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Component Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1. State file \ud83d\udcbd"),(0,r.kt)("td",{parentName:"tr",align:null},"This file holds the reference to the data that you want to display in the UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2. Event file \u25b6\ufe0e"),(0,r.kt)("td",{parentName:"tr",align:null},"This file hold the reference to events that will be triggerd from the UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3. BLoC file \ud83d\udd17"),(0,r.kt)("td",{parentName:"tr",align:null},"This file connects ",(0,r.kt)("inlineCode",{parentName:"td"},"State")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Event")," and performs operations based on ",(0,r.kt)("inlineCode",{parentName:"td"},"Events")," and ",(0,r.kt)("strong",{parentName:"td"},"emits")," the new",(0,r.kt)("inlineCode",{parentName:"td"},"State"))))),(0,r.kt)("h3",{id:"1-creating-the-events-file-\ufe0e"},"1. Creating the Events file \u23ed\ufe0e"),(0,r.kt)("p",null,"In BLoC, if a user wants to send the data from the UI to BLoC or they want to add any kind of triggers then\nit is done via events. Here're some things that you can keep in mind while creating the events."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create ",(0,r.kt)("inlineCode",{parentName:"li"},"sealed class")," instead of an ",(0,r.kt)("inlineCode",{parentName:"li"},"abstract class")," for the events. ",(0,r.kt)("a",{parentName:"li",href:"https://dart.dev/language/class-modifiers"},"Reference")),(0,r.kt)("li",{parentName:"ul"},"Whenever implmenting these sealed classes, create ",(0,r.kt)("inlineCode",{parentName:"li"},"final class")," for it.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Events should be named in the past tense because events are things that have already\noccurred from the bloc's perspective.")),(0,r.kt)("p",null,"Here's an example for it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="lib/modules/repository/home_repository.dart"',jsx:!0,title:'"lib/modules/repository/home_repository.dart"'},"part of 'home.bloc.dart';\n\nsealed class HomeEvent extends Equatable {\n  const HomeEvent();\n\n  @override\n  List<Object> get props => [];\n}\n\nfinal class HomeGetPostEvent extends HomeEvent {\n  const HomeGetPostEvent();\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Initial load events should follow the convention: ",(0,r.kt)("inlineCode",{parentName:"p"},"BlocSubject")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"Started"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The base event class should be name: ",(0,r.kt)("inlineCode",{parentName:"p"},"BlocSubject")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"Event"))),(0,r.kt)("h3",{id:"2-creating-the-state-file-"},"2. Creating the State file \ud83d\udccc"),(0,r.kt)("p",null,"Anyone watching this documentation would know about the ",(0,r.kt)("inlineCode",{parentName:"p"},"State class")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"BLoC State Management")," is the\nbasic requirement of this boilerplate."),(0,r.kt)("p",null,"Thus, the requirement of writing about the ",(0,r.kt)("inlineCode",{parentName:"p"},"State Class")," is to specify the format we're gonna use to create\n",(0,r.kt)("inlineCode",{parentName:"p"},"State Classes")," in the project."),(0,r.kt)("p",null,"Let's continue the example of the Home feature \ud83d\ude09:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="lib/modules/home/bloc/home_state.dart"',jsx:!0,title:'"lib/modules/home/bloc/home_state.dart"'},"part of 'home.bloc.dart';\n\nclass HomeState extends Equatable {\n  final List<HomeModel> postsList;\n  final bool hasReachedMax;\n  final ApiStatus status;\n  const HomeState._({\n    this.postsList = const <HomeModel>[],\n    this.hasReachedMax = false,\n    this.status = ApiStatus.initial,\n  });\n\n  const HomeState.initial() : this._(status: ApiStatus.initial);\n  const HomeState.loading() : this._(status: ApiStatus.loading);\n  const HomeState.loaded(List<HomeModel> postList, bool hasReachedMax)\n      : this._(\n          status: ApiStatus.loaded,\n          postsList: postList,\n          hasReachedMax: hasReachedMax,\n        );\n  const HomeState.error() : this._(status: ApiStatus.error);\n\n  HomeState copyWith({\n    ApiStatus? status,\n    List<HomeModel>? postsList,\n    bool? hasReachedMax,\n  }) {\n    return HomeState._(\n      status: status ?? this.status,\n      postsList: postsList ?? this.postsList,\n      hasReachedMax: hasReachedMax ?? this.hasReachedMax,\n    );\n  }\n\n\n  @override\n  List<Object?> get props => [postsList, hasReachedMax, status];\n\n  @override\n  bool get stringify => true;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In this approach, we tried to merge 2 approaches together so that anyone can work with either of them\nwithout facing any issues in it. This class contains both ",(0,r.kt)("inlineCode",{parentName:"p"},"Named Constructor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy with")," method that\ndevelopers can use to ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," ",(0,r.kt)("strong",{parentName:"p"},"states"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This example of state is for the paginated data. ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiStatus")," is an enum that can be found in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"lib/app/enum.dart")," file."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The base state class should always be named: ",(0,r.kt)("inlineCode",{parentName:"p"},"BlocSubject")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"State"))),(0,r.kt)("h3",{id:"3-creating-the-bloc-file-"},"3. Creating the BLoC file \ud83d\udc68\u200d\ud83d\udcbc"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BLoC")," file is one of the core files of this whole API integation process. Because ",(0,r.kt)("inlineCode",{parentName:"p"},"BLoC")," emits states\nin response to an incoming event within an ",(0,r.kt)("inlineCode",{parentName:"p"},"EventHandler"),"."),(0,r.kt)("p",null,"Let's continue the example of the Home feature for implmenting the BLoC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="lib/modules/home/bloc/home_bloc.dart"',jsx:!0,title:'"lib/modules/home/bloc/home_bloc.dart"'},"class HomeBloc extends Bloc<HomeEvent, HomeState> {\n  HomeBloc({required this.repository}) : super(const HomeState.initial()) {\n    /// Here, we're using droppable transformer, because it will process\n    /// only one event and ignore (drop) any new events until the current event is done.\n    on<HomeGetPostEvent>(_onHomeGetPostEvent, transformer: droppable());\n  }\n  final IHomeRepository repository;\n\n  int _pageCount = 1;\n\n  FutureOr<void> _onHomeGetPostEvent(\n    HomeGetPostEvent event,\n    Emitter<HomeState> emit,\n  ) async {\n    if (state.hasReachedMax) return;\n\n    /// If the user is coming for the first time then show the loader, it that's not the case\n    /// that means user wants to more load data, which implies that they should have some data\n    /// That's why we're not emitting the loading state in case the user has any data.\n    state.status == ApiStatus.initial\n        ? emit(const HomeState.loading())\n        : emit(HomeState.loaded(state.postsList, false));\n    final fetchPostEither = await repository.fetchPosts(page: _pageCount).run();\n    fetchPostEither.fold(\n      (error) => emit(const HomeState.error()),\n      (result) {\n        emit(\n          HomeState.loaded(\n            state.postsList.followedBy(result).toList(),\n            false,\n          ),\n        );\n        _pageCount++;\n      },\n    );\n  }\n}\n")),(0,r.kt)("p",null,"In this file, we're doing the following things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Taking an instance of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Repository"),"."),(0,r.kt)("li",{parentName:"ul"},"Adding an ",(0,r.kt)("inlineCode",{parentName:"li"},"_onHomeGetPostEvent")," which will trigger the API call"),(0,r.kt)("li",{parentName:"ul"},"On ",(0,r.kt)("inlineCode",{parentName:"li"},"_onHomeGetPostEvent"),", we're checking if we're adding this event for the first time or not,\nand based on it we're further triggering the API call."),(0,r.kt)("li",{parentName:"ul"},"After the API call has been made and we've given the response, we're using the ",(0,r.kt)("inlineCode",{parentName:"li"},"fold")," method of ",(0,r.kt)("inlineCode",{parentName:"li"},"fpdart")," package,\nthat gives us the error in case of any ",(0,r.kt)("inlineCode",{parentName:"li"},"Failure")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"result")," in case of an successful API call.")),(0,r.kt)("h3",{id:"4-providing-the-blocs-and-repositories-in-the-ui-"},"4. Providing the BLoCs and Repositories in the UI \ud83c\udf81"),(0,r.kt)("p",null,"You've already created UI in the first step. But injecting the ",(0,r.kt)("inlineCode",{parentName:"p"},"BLoC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Repository")," will also happen in this\nfile, because we want to scope our ",(0,r.kt)("inlineCode",{parentName:"p"},"BLoCs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Cubits")," to it's respective modules."),(0,r.kt)("p",null,"Let's look at the example for it: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'jsx title="lib/modules/home/screen/home_screen.dart"',jsx:!0,title:'"lib/modules/home/screen/home_screen.dart"'},"\n class HomeScreen extends StatefulWidget implements AutoRouteWrapper {\n const HomeScreen({super.key});\n\n @override\n Widget wrappedRoute(BuildContext context) {\n   return RepositoryProvider<HomeRepository>(\n     create: (context) => HomeRepository(),\n     child: BlocProvider(\n       lazy: false,\n       create: (context) => HomeBloc(\n         repository: RepositoryProvider.of<HomeRepository>(context),\n       )..add(const HomeGetPostEvent()),\n       child: this,\n     ),\n   );\n }\n\n @override\n State<HomeScreen> createState() => _HomeScreenState();\n}\n\nclass _HomeScreenState extends State<HomeScreen> {\n @override\n Widget build(BuildContext context) {\n   return Scaffold(...)\n   }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Here, we're using ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoRouteWrapper")," which is provided by ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/auto_route"},(0,r.kt)("inlineCode",{parentName:"a"},"AutoRoute")),"\npackage.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"By implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoRouteWrapper"),", we've to ",(0,r.kt)("strong",{parentName:"p"},"override")," one method called ",(0,r.kt)("inlineCode",{parentName:"p"},"wrappedRoute"),". In this\nmethod, we've to provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlocProvider")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"RepositoryProvider")," in this function.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After we add this, we've to generate the necessary files by using the build runner. You can run this command\nin the terminal to run the build runner."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flutter packages pub run build_runner build\n")),(0,r.kt)("h1",{id:"references"},"References"),(0,r.kt)("p",null,"Here're some references that you can look up to know more about these things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fpdart")," : ",(0,r.kt)("a",{parentName:"li",href:"https://www.sandromaglione.com/techblog/real_example_fpdart_open_meteo_api_part_2"},"Integration of API's using ",(0,r.kt)("inlineCode",{parentName:"a"},"fpdart"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"auto_route"),": ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@CavinMac/list/auto-route-in-flutter-105bbe608e12"},"Blog series of ",(0,r.kt)("inlineCode",{parentName:"a"},"AutoRoute")," by Cavin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bloc"),": ",(0,r.kt)("a",{parentName:"li",href:"https://bloclibrary.dev/#/gettingstarted"},(0,r.kt)("inlineCode",{parentName:"a"},"BLoC"),"'s official documentation website"))))}d.isMDXComponent=!0}}]);