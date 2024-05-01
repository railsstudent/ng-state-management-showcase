import{a as tt}from"./chunk-PT7YKKZE.js";import{a as b,b as Q,c as G,d as W,e as Y,f as Z,g as S,h as q,i as z,j as J,k as K,l as X}from"./chunk-KYWB336G.js";import{A as M,Eb as V,J as u,Ma as y,O as h,Oa as U,Qa as E,R as C,Ta as p,Ua as n,Va as _,X as a,Za as c,_ as g,eb as v,fa as j,fb as N,hb as F,ib as $,ja as A,l as B,mb as O,n as f,na as L,qb as H,r as R,s as d,y as k,z as m,za as D}from"./chunk-E2VPYGYD.js";var et=[{path:"products",loadComponent:()=>import("./chunk-4BMJCRPK.js").then(t=>t.ProductCatalogueComponent),title:"Product list"},{path:"products/:id",loadComponent:()=>import("./chunk-WP7KNNIC.js").then(t=>t.ProductDetailsComponent),title:"Product"},{path:"my-cart",loadComponent:()=>import("./chunk-AWFTDC7C.js").then(t=>t.CartComponent),title:"My shopping cart"},{path:"categories/:category",loadComponent:()=>import("./chunk-Q2IPAXOY.js").then(t=>t.CategoryProductsComponent),title:"Category"},{path:"",pathMatch:"full",redirectTo:"products"},{path:"**",redirectTo:"products"}];var ot="https://fakestoreapi.com/products",pt="https://gist.githubusercontent.com/railsstudent/ae150ae2b14abb207f131596e8b283c3/raw/131a6b3a51dfb4d848b75980bfe3443b1665704b/featured-products.json",P=(()=>{let e=class e{constructor(){this.httpClient=a(b),this.featuredProductIds$=this.httpClient.get(pt).pipe(u(3),d(({ids:o})=>o),m(o=>(console.error(o),f([])))),this.products$=this.httpClient.get(ot).pipe(u(3),m(o=>(console.error(o),f([]))))}getProduct(o){if(!o)return Promise.resolve(null);let r=this.httpClient.get(`${ot}/${o}`).pipe(u(3),m(i=>(console.error(i),f(null))));return R(r)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var rt=(()=>{let e=class e extends S{constructor(){super(...arguments),this.title=a(W),this.productService=a(P)}updateTitle(o){let r=this.buildTitle(o)||"",i=o.root.firstChild?.params.id||"";i?this.productService.getProduct(i).then(I=>{let x=I?.title||"";this.title.setTitle(`Product - ${x}`)}):this.title.setTitle(r)}};e.\u0275fac=(()=>{let o;return function(i){return(o||(o=A(e)))(i||e)}})(),e.\u0275prov=C({token:e,factory:e.\u0275fac});let t=e;return t})();function ct(t,e,s,o){let r="https://fakestoreapi.com/products/categories";return()=>{t.get(r).pipe(u(3),M(o.products$,o.featuredProductIds$),h(([l,I,x])=>s.updateCategoryInfo({categories:l,products:I,featuredProductIds:x})),tt(e),m(l=>(s.updateCategoryInfo({categories:[],products:[],featuredProductIds:[]}),console.error(l),B))).subscribe()}}var it={providers:[Q(),J(et,K()),{provide:S,useClass:rt},{provide:O,multi:!0,deps:[b,L,X,P],useFactory:(t,e,s,o)=>ct(t,e,s,o)}]};var T=(...t)=>{j(T);let e=a(q),s=a(H);return e.events.pipe(k(o=>o instanceof Y),d(o=>o),d(({url:o,urlAfterRedirects:r})=>!t.includes(o)&&!t.includes(r)),h(()=>s.markForCheck()))};var st=()=>["my-cart"];function mt(t,e){t&1&&(p(0,"a",0),c(1,"Home"),n())}function ut(t,e){t&1&&(p(0,"span"),c(1,"\xA0"),n())}function dt(t,e){t&1&&(p(0,"a",1),c(1,"View Cart"),n()),t&2&&U("routerLink",N(1,st))}function lt(t,e){t&1&&(p(0,"span"),c(1,"\xA0"),n())}var nt=(()=>{let e=class e{constructor(){this.isShowHomeButton$=T("/","/products"),this.isShowViewCartButton$=T("/my-cart")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-nav-bar"]],standalone:!0,features:[v],decls:7,vars:6,consts:[["routerLink","/"],[3,"routerLink"]],template:function(r,i){r&1&&(p(0,"div"),y(1,mt,2,0,"a",0),F(2,"async"),y(3,ut,2,0)(4,dt,2,2,"a",1),F(5,"async"),y(6,lt,2,0),n()),r&2&&(D(),E(1,$(2,2,i.isShowHomeButton$)?1:3),D(3),E(4,$(5,4,i.isShowViewCartButton$)?4:6))},dependencies:[z,V],styles:["div[_ngcontent-%COMP%]{background:#daa520;height:50px;padding:.25rem;margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center}"],changeDetection:0});let t=e;return t})();var at=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:5,vars:0,template:function(r,i){r&1&&(p(0,"div")(1,"h2"),c(2,"State Management using Angular Signal Demo"),n(),_(3,"app-nav-bar")(4,"router-outlet"),n())},dependencies:[Z,nt],styles:["div[_ngcontent-%COMP%]{padding:.75rem}h2[_ngcontent-%COMP%]{margin-bottom:.75rem}"],changeDetection:0});let t=e;return t})();G(at,it).catch(t=>console.error(t));