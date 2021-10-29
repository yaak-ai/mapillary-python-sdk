"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6256],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||n;return a?l.createElement(f,i(i({ref:t},m),{},{components:a})):l.createElement(f,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3973:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var l=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],o={"sidebar position":3},p=void 0,s={unversionedId:"mapillary.models.api/mapillary.models.api.vector_tiles",id:"mapillary.models.api/mapillary.models.api.vector_tiles",isDocsHomePage:!1,title:"mapillary.models.api.vector_tiles",description:"mapillary.models.api.vector_tiles",source:"@site/docs/mapillary.models.api/mapillary.models.api.vector_tiles.md",sourceDirName:"mapillary.models.api",slug:"/mapillary.models.api/mapillary.models.api.vector_tiles",permalink:"/mapillary-python-sdk/docs/mapillary.models.api/mapillary.models.api.vector_tiles",editUrl:"https://github.com/mapillary/mapillary-python-sdk/tree/main/docs/docs/mapillary.models.api/mapillary.models.api.vector_tiles.md",tags:[],version:"current",frontMatter:{"sidebar position":3},sidebar:"tutorialSidebar",previous:{title:"mapillary.models.api",permalink:"/mapillary-python-sdk/docs/mapillary.models.api/mapillary.models.api"},next:{title:"mapillary.models.client",permalink:"/mapillary-python-sdk/docs/mapillary.models/mapillary.models.client"}},m=[{value:"mapillary.models.api.vector_tiles",id:"mapillarymodelsapivector_tiles",children:[]},{value:"class mapillary.models.api.vector_tiles.VectorTilesAdapter()",id:"class-mapillarymodelsapivector_tilesvectortilesadapter",children:[]},{value:"Module contents",id:"module-contents",children:[{value:"mapillary.models.api.<strong>init</strong>",id:"mapillarymodelsapiinit",children:[]}]}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"mapillarymodelsapivector_tiles"},"mapillary.models.api.vector_tiles"),(0,n.kt)("p",null,"This module contains the adapter design for the Vector Tiles API of Mapillary API v4, Vector tiles\nprovide an easy way to visualize vast amounts of data. Vector tiles support filtering and querying\nrendered features. Mapillary vector tiles follow the Mapbox tile specification."),(0,n.kt)("p",null,"For more information, please check out ",(0,n.kt)("a",{parentName:"p",href:"https://www.mapillary.com/developer/api-documentation/"},"https://www.mapillary.com/developer/api-documentation/"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copyright: (c) 2021 Facebook")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"License: MIT LICENSE")),(0,n.kt)("h3",{id:"class-mapillarymodelsapivector_tilesvectortilesadapter"},"class mapillary.models.api.vector_tiles.VectorTilesAdapter()"),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("inlineCode",{parentName:"p"},"object")),(0,n.kt)("p",null,"Adapter model for dealing with the VectorTiles API, through the DRY principle. The\nVectorTilesAdapter class can be instantiated in the controller modules, providing an\nabstraction layer that uses the Client class, endpoints provided by the API v4 under\n/config/api/vector_tiles.py."),(0,n.kt)("p",null,"It performs parsing, handling of layers, properties, and fields to make it easier to\nwrite higher level logic for extracing information, and lets developers to focus only\non writing the high level business logic without having to repeat the process of parsing\nand using libraries such as mercantile, \u2018vt2geojson\u2019 and others, caring only about\ninputs/outputs"),(0,n.kt)("p",null,"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'>>> import mapillary\n>>> from mapillary.models.api.vector_tiles import VectorTilesAdapter\n>>> latitude, longitude = 30, 31\n>>> VectorTilesAdapter().fetch_layer(layer="image", zoom=14, longitude=longitude,\n...     latitude=latitude,\n... )\n>>> VectorTilesAdapter().fetch_layer(layer="sequence", zoom=10, longitude=longitude,\n...     latitude=latitude,\n... )\n>>> VectorTilesAdapter().fetch_layer(layer="overview", zoom=3, longitude=longitude,\n...     latitude=latitude,\n... )\n')),(0,n.kt)("h4",{id:"fetch_computed_layerlayer-str-zoom-int-longitude-float-latitude-float"},"fetch_computed_layer(layer: str, zoom: int, longitude: float, latitude: float)"),(0,n.kt)("p",null,"Same as fetch_layer, but gets in return computed tiles only.\nDepends on the layer, zoom level, longitude and the latitude specifications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"layer")," (",(0,n.kt)("em",{parentName:"li"},"str"),") \u2013 Either \u2018overview\u2019, \u2018sequence\u2019, \u2018image\u2019")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* **zoom** (*int*) \u2013 The zoom level, [0, 14], inclusive\n\n\n* **longitude** (*float*) \u2013 The longitude of the coordinates\n\n\n* **latitude** (*float*) \u2013 The latitude of the coordinates\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A GeoJSON for that specific layer and the specified zoom level"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("p",{parentName:"li"},"  dict"))),(0,n.kt)("h4",{id:"fetch_featuresfeature_type-str-zoom-int-longitude-float-latitude-float"},"fetch_features(feature_type: str, zoom: int, longitude: float, latitude: float)"),(0,n.kt)("p",null,"Fetches specified features from the coordinates with the appropriate zoom level"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"feature_type")," (",(0,n.kt)("em",{parentName:"li"},"str"),") \u2013 Either point, or tiles")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* **zoom** (*int*) \u2013 The zoom level\n\n\n* **longitude** (*float*) \u2013 The longitude of the coordinates\n\n\n* **latitude** (*float*) \u2013 The latitude of the coordinates\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A GeoJSON for that specific layer and the specified zoom level"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("p",{parentName:"li"},"  dict"))),(0,n.kt)("h4",{id:"fetch_layerlayer-str-longitude-float-latitude-float-zoom-int--14"},"fetch_layer(layer: str, longitude: float, latitude: float, zoom: int = 14)"),(0,n.kt)("p",null,"Fetches an image tile layer depending on the coordinates, and the layer selected\nalong with the zoom level"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"layer")," (",(0,n.kt)("em",{parentName:"li"},"str"),") \u2013 Either \u2018overview\u2019, \u2018sequence\u2019, \u2018image\u2019")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* **longitude** (*float*) \u2013 The longitude of the coordinates\n\n\n* **latitude** (*float*) \u2013 The latitude of the coordinates\n\n\n* **zoom** (*int*) \u2013 The zoom level, [0, 14], inclusive\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A GeoJSON for that specific layer and the specified zoom level"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("p",{parentName:"li"},"  dict"))),(0,n.kt)("h4",{id:"fetch_layerscoordinates-listlist-layer-str--image-zoom-int--14-is_computed-bool--false"},"fetch_layers(coordinates: list","[list]",", layer: str = 'image', zoom: int = 14, is_computed: bool = False)"),(0,n.kt)("p",null,"Fetches multiple vector tiles based on a list of multiple coordinates in a listed format"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"coordinates")," (",(0,n.kt)("em",{parentName:"li"},'"list',(0,n.kt)("strong",{parentName:"em"},"["),"list",(0,n.kt)("strong",{parentName:"em"},"]"),'"'),") \u2013 A list of lists of coordinates to get the vector tiles for")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* **layer** (*str*) \u2013 Either \u201coverview\u201d, \u201csequence\u201d, \u201cimage\u201d, \u201ctraffic_sign\u201d, or \u201cmap_feature\u201d,\ndefaults to \u201cimage\u201d\n\n\n* **zoom** (*int*) \u2013 the zoom level [0, 14], inclusive. Defaults to 14\n\n\n* **is_computed** (*bool*) \u2013 Will to be fetched layers be computed? Defaults to False\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A geojson with merged features from all unique vector tiles"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("p",{parentName:"li"},"  dict"))),(0,n.kt)("h4",{id:"fetch_map_featurescoordinates-listlist-feature_type-str-zoom-int--14"},"fetch_map_features(coordinates: list","[list]",", feature_type: str, zoom: int = 14)"),(0,n.kt)("p",null,"Fetches map features based on a list Polygon object"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"coordinates")," (",(0,n.kt)("em",{parentName:"li"},'"list',(0,n.kt)("strong",{parentName:"em"},"["),"list",(0,n.kt)("strong",{parentName:"em"},"]"),'"'),") \u2013 A list of lists of coordinates to get the map features for")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* **feature_type** (*str*) \u2013 Either \u201cpoint\u201d, \u201ctraffic_signs\u201d, defaults to \u201cpoint\u201d\n\n\n* **zoom** (*int*) \u2013 the zoom level [0, 14], inclusive. Defaults to 14\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  A geojson with merged features from all unique vector tiles"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Return type")),(0,n.kt)("p",{parentName:"li"},"  dict"))),(0,n.kt)("h2",{id:"module-contents"},"Module contents"),(0,n.kt)("h3",{id:"mapillarymodelsapiinit"},"mapillary.models.api.",(0,n.kt)("strong",{parentName:"h3"},"init")),(0,n.kt)("p",null,"This package contains the class adaptors of the API logic within the Mapillary Python SDK."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copyright: (c) 2021 Facebook")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"License: MIT LICENSE")))}c.isMDXComponent=!0}}]);