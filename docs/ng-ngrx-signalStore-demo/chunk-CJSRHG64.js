import{a as l}from"./chunk-XWBFBSEG.js";import{J as i,R as p,X as u,n,r as c,s as a,z as s}from"./chunk-B6SZTSEB.js";var b="https://fakestoreapi.com/products",h="https://gist.githubusercontent.com/railsstudent/ae150ae2b14abb207f131596e8b283c3/raw/131a6b3a51dfb4d848b75980bfe3443b1665704b/featured-products.json",U=(()=>{let t=class t{constructor(){this.httpClient=u(l),this.featuredProductIds$=this.httpClient.get(h).pipe(i(3),a(({ids:r})=>r),s(r=>(console.error(r),n([]))))}getProduct(r){if(!r)return Promise.resolve(null);let o=this.httpClient.get(`${b}/${r}`).pipe(i(3),s(f=>(console.error(f),n(null))));return c(o)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{U as a};