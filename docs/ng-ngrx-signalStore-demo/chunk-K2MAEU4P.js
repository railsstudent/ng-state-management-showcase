import{a as $}from"./chunk-CJSRHG64.js";import{c as O}from"./chunk-2OBQG36U.js";import{a as P}from"./chunk-ON6OTVDN.js";import{a as v}from"./chunk-LE7OLIJF.js";import"./chunk-XWBFBSEG.js";import{Fb as w,M as F,Ma as f,Oa as y,Qa as g,Ra as C,Sa as _,Ta as r,Ua as a,Va as p,X as l,Ya as S,Za as h,_ as s,_a as M,c as x,eb as u,hb as T,ib as D,za as c}from"./chunk-B6SZTSEB.js";var j=(e,t)=>t.id;function I(e,t){if(e&1&&p(0,"app-product",1),e&2){let i=t.$implicit;y("product",i)}}function B(e,t){e&1&&(r(0,"div",0),C(1,I,1,1,"app-product",1,j),a()),e&2&&(c(),_(t))}function V(e,t){if(e&1&&(r(0,"h2"),h(1,"Featured Products"),a(),f(2,B,3,0,"div",0),p(3,"hr")),e&2){let i,n=S();c(2),g(2,(i=n.featuredProducts())?2:-1,i)}}var b=(()=>{let t=class t{constructor(){this.productService=l($),this.categoryFacade=l(v),this.featuredProducts=O(this.productService.featuredProductIds$.pipe(F(n=>this.getFeaturedProducts(n))),{initialValue:[]})}getFeaturedProducts(n){return x(this,null,function*(){try{if(this.categoryFacade.products().length===0)return[];let o=[];for(let d of n){let m=this.categoryFacade.products().find(k=>k.id===d);m&&o.push(m)}return o}catch{return[]}})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s({type:t,selectors:[["app-feature-products"]],standalone:!0,features:[u],decls:1,vars:1,consts:[[1,"featured"],[1,"item",3,"product"]],template:function(o,d){o&1&&f(0,V,4,1),o&2&&g(0,d.featuredProducts().length>0?0:-1)},dependencies:[P],styles:["h2[_ngcontent-%COMP%], hr[_ngcontent-%COMP%]{margin-bottom:.5rem}div.featured[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-bottom:.75rem}div.featured[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{flex-basis:250px}"],changeDetection:0});let e=t;return e})();var q=(e,t)=>t.category,z=(e,t)=>t.id;function A(e,t){if(e&1&&p(0,"app-product",1),e&2){let i=t.$implicit;y("product",i)}}function G(e,t){if(e&1&&(r(0,"h3"),h(1),T(2,"titlecase"),a(),r(3,"div",0),C(4,A,1,1,"app-product",1,z),a()),e&2){let i=t.$implicit;c(),M(D(2,1,i.category)),c(3),_(i.products)}}function H(e,t){e&1&&C(0,G,6,3,null,null,q),e&2&&_(t)}var L=(()=>{let t=class t{constructor(){this.categoryFacade=l(v),this.categoryProducts=this.categoryFacade.categoryProducts}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s({type:t,selectors:[["app-product-list"]],standalone:!0,features:[u],decls:4,vars:1,consts:[[1,"products"],[3,"product"]],template:function(o,d){if(o&1&&(r(0,"h2"),h(1,"Catalogue"),a(),r(2,"div"),f(3,H,2,0),a()),o&2){let m;c(3),g(3,(m=d.categoryProducts())?3:-1,m)}},dependencies:[P,w],styles:["div.products[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-content:stretch}app-product[_ngcontent-%COMP%]{flex-basis:250px;height:300px;margin-bottom:1rem}"],changeDetection:0});let e=t;return e})();var dt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s({type:t,selectors:[["app-product-catalogue"]],standalone:!0,features:[u],decls:2,vars:0,template:function(o,d){o&1&&p(0,"app-feature-products")(1,"app-product-list")},dependencies:[b,L],encapsulation:2,changeDetection:0});let e=t;return e})();export{dt as ProductCatalogueComponent};
