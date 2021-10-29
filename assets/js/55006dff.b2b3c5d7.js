"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4171],{3905:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return y}});var a=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var o=a.createContext({}),s=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},c=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=s(r),y=i,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return r?a.createElement(d,n(n({ref:e},c),{},{components:r})):a.createElement(d,n({ref:e},c))}));function y(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=r.length,n=new Array(l);n[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:i,n[1]=p;for(var s=2;s<l;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5250:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=r(7462),i=r(3366),l=(r(7294),r(3905)),n=["components"],p={"sidebar position":3},o=void 0,s={unversionedId:"mapillary.utils/mapillary.utils.extract",id:"mapillary.utils/mapillary.utils.extract",isDocsHomePage:!1,title:"mapillary.utils.extract",description:"mapillary.utils.extract",source:"@site/docs/mapillary.utils/mapillary.utils.extract.md",sourceDirName:"mapillary.utils",slug:"/mapillary.utils/mapillary.utils.extract",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils.extract",editUrl:"https://github.com/mapillary/mapillary-python-sdk/tree/main/docs/docs/mapillary.utils/mapillary.utils.extract.md",tags:[],version:"current",frontMatter:{"sidebar position":3},sidebar:"tutorialSidebar",previous:{title:"mapillary.utils.auth",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils.auth"},next:{title:"mapillary.utils.filter",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils.filter"}},c=[{value:"mapillary.utils.extract",id:"mapillaryutilsextract",children:[]},{value:"mapillary.utils.extract.extract_properties(geojson: dict, properties: list)",id:"mapillaryutilsextractextract_propertiesgeojson-dict-properties-list",children:[]}],u={toc:c};function m(t){var e=t.components,r=(0,i.Z)(t,n);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"mapillaryutilsextract"},"mapillary.utils.extract"),(0,l.kt)("p",null,"This module deals with extracting multiple fields nested within a GeoJSON packet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copyright: (c) 2021 Facebook")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"License: MIT LICENSE")),(0,l.kt)("h3",{id:"mapillaryutilsextractextract_propertiesgeojson-dict-properties-list"},"mapillary.utils.extract.extract_properties(geojson: dict, properties: list)"),(0,l.kt)("p",null,"Extracts specific properties from a complete GeoJSON"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"geojson")," (",(0,l.kt)("em",{parentName:"li"},"dict"),") \u2013 GeoJSON object")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* **properties** (*list*) \u2013 A list of properties to extract\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  The extracted fields as a dict"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  dict"))),(0,l.kt)("p",null,"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'>>> from utils.extract import extract_properties\n>>> extract_properties(geojson={"type":"FeatureCollection","features":[{"type":"Feature",\n... "geometry":{"type":"Point","coordinates":[-80.12991070747375,25.787652114106322]},\n... "properties":{"captured_at":1540386861135, "compass_angle":252.04260253906,"id":\n... 1274987139570038,"is_pano":\'False\',"sequence_id":"Vf8Iwxx5SemxI7_b_7J5Kw"}},{"type":\n... "Feature","geometry":{"type":"Point","coordinates":[-80.13223886489868,\n... 25.78756517066695]}, "properties":{"captured_at":1422989164000,"compass_angle":\n... 89.781,"id":169629268373019,"is_pano": "True","sequence_id":"dqjuprkOwUnmdEVt5gx-Iw"}}]}\n... , properties=[\'id\']) # id most likely exists\n')))}m.isMDXComponent=!0}}]);