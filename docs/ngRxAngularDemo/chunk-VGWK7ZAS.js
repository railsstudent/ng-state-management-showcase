import{a as h}from"./chunk-2LXCXWYB.js";import{l as P}from"./chunk-IWF6CWLE.js";import{Cb as D,La as m,Na as y,Pa as l,Qa as u,Ra as f,Sa as i,Ta as r,Ua as p,W as g,Xa as x,Ya as C,Z as d,Za as F,db as s,gb as M,hb as T,ya as c}from"./chunk-UWJZMJWC.js";var E=(e,t)=>t.id;function $(e,t){if(e&1&&p(0,"app-product",1),e&2){let n=t.$implicit;y("product",n)}}function b(e,t){e&1&&(i(0,"div",0),u(1,$,1,1,"app-product",1,E),r()),e&2&&(c(),f(t))}function L(e,t){if(e&1&&(i(0,"h2"),C(1,"Featured Products"),r(),m(2,b,3,0,"div",0),p(3,"hr")),e&2){let n,a=x();c(2),l(2,(n=a.featuredProducts())?2:-1,n)}}var w=(()=>{let t=class t{constructor(){this.categoryFacade=g(P),this.featuredProducts=this.categoryFacade.featuredProducts}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-feature-products"]],standalone:!0,features:[s],decls:1,vars:1,consts:[[1,"featured"],[1,"item",3,"product"]],template:function(o,_){o&1&&m(0,L,4,1),o&2&&l(0,_.featuredProducts().length>0?0:-1)},dependencies:[h],styles:["h2[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]{margin-bottom:.5rem}div.featured[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:.75rem}div.featured[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{flex-basis:250px}"],changeDetection:0});let e=t;return e})();var k=(e,t)=>t.category,j=(e,t)=>t.id;function B(e,t){if(e&1&&p(0,"app-product",1),e&2){let n=t.$implicit;y("product",n)}}function I(e,t){if(e&1&&(i(0,"h3"),C(1),M(2,"titlecase"),r(),i(3,"div",0),u(4,B,1,1,"app-product",1,j),r()),e&2){let n=t.$implicit;c(),F(T(2,1,n.category)),c(3),f(n.products)}}function q(e,t){e&1&&u(0,I,6,3,null,null,k),e&2&&f(t)}var O=(()=>{let t=class t{constructor(){this.categoryFacade=g(P),this.categoryProducts=this.categoryFacade.categoryProducts}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-product-list"]],standalone:!0,features:[s],decls:4,vars:1,consts:[[1,"products"],[3,"product"]],template:function(o,_){if(o&1&&(i(0,"h2"),C(1,"Catalogue"),r(),i(2,"div"),m(3,q,2,0),r()),o&2){let v;c(3),l(3,(v=_.categoryProducts())?3:-1,v)}},dependencies:[h,D],styles:["div.products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:stretch}app-product[_ngcontent-%COMP%]{flex-basis:250px;height:300px;margin-bottom:1rem}"],changeDetection:0});let e=t;return e})();var tt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-product-catalogue"]],standalone:!0,features:[s],decls:2,vars:0,template:function(o,_){o&1&&p(0,"app-feature-products")(1,"app-product-list")},dependencies:[w,O],encapsulation:2,changeDetection:0});let e=t;return e})();export{tt as ProductCatalogueComponent};