"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2428],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2262:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={"sidebar position":5},p=void 0,s={unversionedId:"mapillary.utils/mapillary.utils.format",id:"mapillary.utils/mapillary.utils.format",isDocsHomePage:!1,title:"mapillary.utils.format",description:"mapillary.utils.format",source:"@site/docs/mapillary.utils/mapillary.utils.format.md",sourceDirName:"mapillary.utils",slug:"/mapillary.utils/mapillary.utils.format",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils.format",editUrl:"https://github.com/mapillary/mapillary-python-sdk/tree/main/docs/docs/mapillary.utils/mapillary.utils.format.md",tags:[],version:"current",frontMatter:{"sidebar position":5},sidebar:"tutorialSidebar",previous:{title:"mapillary.utils.filter",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils.filter"},next:{title:"mapillary.utils",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils"}},m=[{value:"mapillary.utils.format",id:"mapillaryutilsformat",children:[]},{value:"mapillary.utils.format.decode_pixel_geometry(base64_string: str, normalized: bool = True, width: int = 4096, height: int = 4096)",id:"mapillaryutilsformatdecode_pixel_geometrybase64_string-str-normalized-bool--true-width-int--4096-height-int--4096",children:[]},{value:"mapillary.utils.format.decode_pixel_geometry_in_geojson(geojson: Uniondict, mapillary.models.geojson.GeoJSON, normalized: bool = True, width: int = 4096, height: int = 4096)",id:"mapillaryutilsformatdecode_pixel_geometry_in_geojsongeojson-uniondict-mapillarymodelsgeojsongeojson-normalized-bool--true-width-int--4096-height-int--4096",children:[]},{value:"mapillary.utils.format.detection_features_to_geojson(feature_list: list)",id:"mapillaryutilsformatdetection_features_to_geojsonfeature_list-list",children:[]},{value:"mapillary.utils.format.feature_to_geojson(json_data: dict)",id:"mapillaryutilsformatfeature_to_geojsonjson_data-dict",children:[]},{value:"mapillary.utils.format.flatten<em>dictionary(data: Uniondict, collections.abc.MutableMapping, parent_key: str = &#39;&#39;, sep: str = &#39;</em>&#39;)",id:"mapillaryutilsformatflattendictionarydata-uniondict-collectionsabcmutablemapping-parent_key-str---sep-str--",children:[]},{value:"mapillary.utils.format.flatten_geojson(geojson: dict)",id:"mapillaryutilsformatflatten_geojsongeojson-dict",children:[]},{value:"mapillary.utils.format.geojson_to_features_list(json_data: dict)",id:"mapillaryutilsformatgeojson_to_features_listjson_data-dict",children:[]},{value:"mapillary.utils.format.geojson_to_polygon(geojson: dict)",id:"mapillaryutilsformatgeojson_to_polygongeojson-dict",children:[]},{value:"mapillary.utils.format.join_geojson_with_keys(geojson_src: dict, geojson_src_key: str, geojson_dest: dict, geojson_dest_key: str)",id:"mapillaryutilsformatjoin_geojson_with_keysgeojson_src-dict-geojson_src_key-str-geojson_dest-dict-geojson_dest_key-str",children:[]},{value:"mapillary.utils.format.merged_features_list_to_geojson(features_list: list)",id:"mapillaryutilsformatmerged_features_list_to_geojsonfeatures_list-list",children:[]},{value:"mapillary.utils.format.normalize_list(coordinates: list, width: int = 4096, height: int = 4096)",id:"mapillaryutilsformatnormalize_listcoordinates-list-width-int--4096-height-int--4096",children:[]}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"mapillaryutilsformat"},"mapillary.utils.format"),(0,l.kt)("p",null,"This module deals with converting data to and from different file formats."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copyright: (c) 2021 Facebook")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"License: MIT LICENSE")),(0,l.kt)("h3",{id:"mapillaryutilsformatdecode_pixel_geometrybase64_string-str-normalized-bool--true-width-int--4096-height-int--4096"},"mapillary.utils.format.decode_pixel_geometry(base64_string: str, normalized: bool = True, width: int = 4096, height: int = 4096)"),(0,l.kt)("p",null,"Decodes the pixel geometry, and return the coordinates, which can be specified to be\nnormalized"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"base64_string")," (",(0,l.kt)("em",{parentName:"li"},"str"),") \u2013 The pixel geometry encoded as a vector tile")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* **normalized** (*bool*) \u2013 If normalization is required, defaults to True\n\n\n* **width** (*int*) \u2013 The width of the pixel geometry, defaults to 4096\n\n\n* **height** (*int*) \u2013 The height of the pixel geometry, defaults to 4096\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A dictionary with coordinates as key, and value as the normalized list"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  list"))),(0,l.kt)("h3",{id:"mapillaryutilsformatdecode_pixel_geometry_in_geojsongeojson-uniondict-mapillarymodelsgeojsongeojson-normalized-bool--true-width-int--4096-height-int--4096"},"mapillary.utils.format.decode_pixel_geometry_in_geojson(geojson: Union","[dict, mapillary.models.geojson.GeoJSON]",", normalized: bool = True, width: int = 4096, height: int = 4096)"),(0,l.kt)("p",null,"Decodes all the pixel_geometry"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"geojson")," \u2013 The GeoJSON representation to be decoded")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* **normalized** (*bool*) \u2013 If normalization is required, defaults to True\n\n\n* **width** (*int*) \u2013 The width of the pixel geometry, defaults to 4096\n\n\n* **height** (*int*) \u2013 The height of the pixel geometry, defaults to 4096\n")),(0,l.kt)("h3",{id:"mapillaryutilsformatdetection_features_to_geojsonfeature_list-list"},"mapillary.utils.format.detection_features_to_geojson(feature_list: list)"),(0,l.kt)("p",null,"Converts a preprocessed list (i.e, features from the detections of either images or\nmap_features from multiple segments) into a fully featured GeoJSON"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"feature_list")," (",(0,l.kt)("em",{parentName:"p"},"list"),") \u2013 A list of processed features merged from different segments within a\ndetection"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  GeoJSON formatted as expected in a detection format"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  dict"))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> # From\n>>> [{'created_at': '2021-05-20T17:49:01+0000', 'geometry':\n... 'GjUKBm1weS1vchIVEgIAABgDIg0JhiekKBoqAABKKQAPGgR0eXBlIgkKB3BvbHlnb24ogCB4AQ==',\n... 'image': {'geometry': {'type': 'Point', 'coordinates': [-97.743279722222,\n... 30.270651388889]}, 'id': '1933525276802129'}, 'value': 'regulatory--no-parking--g2',\n... 'id': '1942105415944115'}, ... ]\n>>> # To\n>>> {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry':\n... {'type': 'Point', 'coordinates': [-97.743279722222, 30.270651388889]}, 'properties': {\n... 'image_id': '1933525276802129', 'created_at': '2021-05-20T17:49:01+0000',\n... 'pixel_geometry':\n... 'GjUKBm1weS1vchIVEgIAABgDIg0JhiekKBoqAABKKQAPGgR0eXBlIgkKB3BvbHlnb24ogCB4AQ==',\n... 'value': 'regulatory--no-parking--g2', 'id': '1942105415944115' } }, ... ]}\n")),(0,l.kt)("h3",{id:"mapillaryutilsformatfeature_to_geojsonjson_data-dict"},"mapillary.utils.format.feature_to_geojson(json_data: dict)"),(0,l.kt)("p",null,"Converts feature into a GeoJSON, returns output"),(0,l.kt)("p",null,"From:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> {'geometry': {'type': 'Point', 'coordinates': [30.003755665554, 30.985948744314]},\n... 'id':'506566177256016'}\n")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry': {'type':\n... 'Point','coordinates': [30.98594605922699, 30.003757307208872]}, 'properties': {}}]}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"json_data")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 The feature as a JSON"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  The formatted GeoJSON"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  dict"))),(0,l.kt)("h3",{id:"mapillaryutilsformatflattendictionarydata-uniondict-collectionsabcmutablemapping-parent_key-str---sep-str--"},"mapillary.utils.format.flatten",(0,l.kt)("em",{parentName:"h3"},"dictionary(data: Union","[dict, collections.abc.MutableMapping]",", parent_key: str = '', sep: str = '"),"')"),(0,l.kt)("p",null,"Flattens dictionaries"),(0,l.kt)("p",null,"From:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> {'mpy-or': {'extent': 4096, 'version': 2, 'features': [{'geometry': {'type':\n... 'Polygon', 'coordinates': [[[2402, 2776], [2408, 2776]]]}, 'properties': {}, 'id': 1,\n... 'type': 3}]}}\n")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> {'mpy-or_extent': 4096, 'mpy-or_version': 2, 'mpy-or_features': [{'geometry':\n... {'type':'Polygon', 'coordinates': [[[2402, 2776], [2408, 2776]]]}, 'properties':\n... {}, 'id': 1,'type': 3}]}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"data")," (",(0,l.kt)("em",{parentName:"li"},"dict"),") \u2013 The dictionary itself")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* **parent_key** (*str*) \u2013 The root key to start from\n\n\n* **sep** (*str*) \u2013 The separator\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A flattened dictionary"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  dict"))),(0,l.kt)("h3",{id:"mapillaryutilsformatflatten_geojsongeojson-dict"},"mapillary.utils.format.flatten_geojson(geojson: dict)"),(0,l.kt)("p",null,"Flattens a GeoJSON dictionary to a dictionary with only the relevant keys.\nThis is useful for writing to a CSV file."),(0,l.kt)("p",null,"Output Structure:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'>>> {\n...     "geometry": {\n...         "type": "Point",\n...         "coordinates": [71.45343, 12.523432]\n...     },\n...     "first_seen_at": "UNIX_TIMESTAMP",\n...     "last_seen_at": "UNIX_TIMESTAMP",\n...     "value": "regulatory--no-parking--g2",\n...     "id": "FEATURE_ID",\n...     "image_id": "IMAGE_ID"\n... }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"geojson")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 The GeoJSON to flatten"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A flattened GeoJSON"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  dict"))),(0,l.kt)("p",null,"Note,"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. The geometry key is always present in the output\n\n\n2. The properties are flattened to the following keys:\n\n\n        * \u201cfirst_seen_at\u201d   (optional)\n\n\n        * \u201clast_seen_at\u201d    (optional)\n\n\n        * \u201cvalue\u201d           (optional)\n\n\n        * \u201cid\u201d              (required)\n\n\n        * \u201cimage_id\u201d        (optional)\n\n\n        * etc.\n\n\n3. If the \u2018geometry\\` type is Point, two more properties will be added:\n\n\n        * \u201clongitude\u201d\n\n\n        * \u201clatitude\u201d\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"TODO"),": Further testing needed with different geometries, e.g., Polygon, etc."),(0,l.kt)("h3",{id:"mapillaryutilsformatgeojson_to_features_listjson_data-dict"},"mapillary.utils.format.geojson_to_features_list(json_data: dict)"),(0,l.kt)("p",null,"Converts a decoded output GeoJSON to a list of feature objects"),(0,l.kt)("p",null,"The purpose of this formatting utility is to obtain a list of individual features for\ndecoded tiles that can be later extended to the output GeoJSON"),(0,l.kt)("p",null,"From:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry':\n... {'type': 'Point','coordinates': [30.98594605922699, 30.003757307208872]},\n... 'properties': {}}]}\n")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> [{'type': 'Feature', 'geometry': {'type': 'Point',\n... 'coordinates': [30.98594605922699, 30.003757307208872]}, 'properties': {}}]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"json_data")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 The given json data"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  The feature list"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  list"))),(0,l.kt)("h3",{id:"mapillaryutilsformatgeojson_to_polygongeojson-dict"},"mapillary.utils.format.geojson_to_polygon(geojson: dict)"),(0,l.kt)("p",null,"Converts a GeoJSON into a collection of only geometry coordinates for the purpose of\nchecking whether a given coordinate point exists within a shapely polygon"),(0,l.kt)("p",null,"From:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'>>> {\n...     "type": "FeatureCollection",\n...     "features": [\n...         {\n...             "geometry": {\n...                 "coordinates": [\n...                     -80.13069927692413,\n...                     25.78523699486192\n...                 ],\n...                 "type": "Point"\n...             },\n...             "properties": {\n...                 "first_seen_at": 1422984049000,\n...                 "id": 481978503020355,\n...                 "last_seen_at": 1422984049000,\n...                 "value": "object--street-light"\n...             },\n...             "type": "Feature"\n...         },\n...         {\n...             "geometry": {\n...                 "coordinates": [\n...                     -80.13210475444794,\n...                     25.78362849816017\n...                 ],\n...                 "type": "Point"\n...             },\n...             "properties": {\n...                 "first_seen_at": 1423228306666,\n...                 "id": 252538103315239,\n...                 "last_seen_at": 1423228306666,\n...                 "value": "object--street-light"\n...             },\n...             "type": "Feature"\n...         },\n...         ...\n...     ]\n... }\n')),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'>>> {\n... "type": "FeatureCollection",\n... "features": [\n...         {\n...             "type": "Feature",\n...             "properties": {},\n...             "geometry": {\n...                 "type": "Polygon",\n...                 "coordinates": [\n...                     [\n...                         [\n...                             7.2564697265625,\n...                             43.69716905314008\n...                         ],\n...                         [\n...                             7.27020263671875,\n...                             43.69419030566581\n...                         ],\n...                         ...\n...                     ]\n...                 ]\n...             }\n...         }\n...     ]\n... }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"geojson")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 The input GeoJSON"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A geojson of the format mentioned under \u2018To\u2019"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  dict"))),(0,l.kt)("h3",{id:"mapillaryutilsformatjoin_geojson_with_keysgeojson_src-dict-geojson_src_key-str-geojson_dest-dict-geojson_dest_key-str"},"mapillary.utils.format.join_geojson_with_keys(geojson_src: dict, geojson_src_key: str, geojson_dest: dict, geojson_dest_key: str)"),(0,l.kt)("p",null,"Combines two GeoJSONS based on the similarity of their specified keys, similar to\nthe SQL join functionality"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"geojson_src")," (",(0,l.kt)("em",{parentName:"li"},"dict"),") \u2013 The starting GeoJSO source")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* **geojson_src_key** (*str*) \u2013 The key in properties specified for the GeoJSON source\n\n\n* **geojson_dest** (*dict*) \u2013 The GeoJSON to merge into\n\n\n* **geojson_dest_key** (*dict*) \u2013 The key in properties specified for the GeoJSON to merge into\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  The merged GeoJSON"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  dict"))),(0,l.kt)("p",null,"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> join_geojson_with_keys(\n...     geojson_src=geojson_src,\n...     geojson_src_key='id',\n...     geojson_dest=geojson_dest,\n...     geojson_dest_key='id'\n... )\n")),(0,l.kt)("h3",{id:"mapillaryutilsformatmerged_features_list_to_geojsonfeatures_list-list"},"mapillary.utils.format.merged_features_list_to_geojson(features_list: list)"),(0,l.kt)("p",null,"Converts a processed features list (i.e. a features list with all the needed features merged\nfrom multiple tiles) into a fully-featured GeoJSON"),(0,l.kt)("p",null,"From:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> [{'type': 'Feature', 'geometry': {'type': 'Point',\n... 'coordinates': [30.98594605922699, 30.003757307208872]}, 'properties': {}}, ...]\n")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry':\n... {'type': 'Point','coordinates': [30.98594605922699, 30.003757307208872]},\n... 'properties': {}}, ...]}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"features_list")," (",(0,l.kt)("em",{parentName:"p"},"list"),") \u2013 a list of processed features merged from different tiles within a bbox"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  GeoJSON string formatted with all the extra commas removed."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  str"))),(0,l.kt)("h3",{id:"mapillaryutilsformatnormalize_listcoordinates-list-width-int--4096-height-int--4096"},"mapillary.utils.format.normalize_list(coordinates: list, width: int = 4096, height: int = 4096)"),(0,l.kt)("p",null,"Normalizes a list of coordinates with the respective width and the height"),(0,l.kt)("p",null,"From:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> [[[2402, 2776], [2408, 2776]]]\n")),(0,l.kt)("p",null,"To:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> normalize_list(coordinates)\n... # [[[0.58642578125, 0.677734375], [0.587890625, 0.677734375]]]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"coordinates")," (",(0,l.kt)("em",{parentName:"li"},"list"),") \u2013 The coordinate list to normalize")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* **width** (*int*) \u2013 The width of the coordinates to normalize with, defaults to 4096\n\n\n* **height** (*int*) \u2013 The height of the coordinates to normalize with, defaults to 4096\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  The normalized list"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  list"))))}d.isMDXComponent=!0}}]);