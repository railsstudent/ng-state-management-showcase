import{b as N,c as W}from"./chunk-PT7YKKZE.js";import{a as z,b as R,c as U,d as G,e as H,f as J,g as K}from"./chunk-732D6KLU.js";import{i as B,l as j}from"./chunk-KYWB336G.js";import{Fa as S,Fb as A,M as y,Ma as _,Na as b,Oa as f,Qa as C,Ta as i,Ua as n,Va as E,Wa as F,X as m,Xa as D,Ya as l,Z as M,Za as r,_ as v,_a as p,ab as I,bb as O,c as x,cb as V,eb as k,gb as T,ha as u,hb as q,ia as g,ib as L,oa as w,wa as P,za as c}from"./chunk-E2VPYGYD.js";var Q=o=>["/categories",o];function X(o,d){if(o&1){let a=F();i(0,"div",0)(1,"div",1),E(2,"img",2),n(),i(3,"div",1)(4,"span"),r(5,"Id:"),n(),i(6,"span"),r(7),n()(),i(8,"div",1)(9,"span"),r(10,"Category: "),n(),i(11,"a",3),r(12),q(13,"titlecase"),n()(),i(14,"div",1)(15,"span"),r(16,"Description: "),n(),i(17,"span"),r(18),n()(),i(19,"div",1)(20,"span"),r(21,"Price: "),n(),i(22,"span"),r(23),n()()(),i(24,"div",4)(25,"input",5),V("ngModelChange",function(e){u(a);let s=l(2);return O(s.quantity,e)||(s.quantity=e),g(e)}),n(),i(26,"button",6),D("click",function(){u(a);let e=l(),s=l();return g(s.addItem(e))}),r(27,"Add"),n()()}if(o&2){let a=l(),t=l();c(2),f("src",a.image,P),b("alt",a.title||"product image"),c(5),p(a.id),c(4),f("routerLink",T(10,Q,a.category)),c(),p(L(13,8,a.category)),c(6),p(a.description),c(5),p(a.price),c(2),I("ngModel",t.quantity)}}function Y(o,d){o&1&&_(0,X,28,12),o&2&&C(0,d?0:-1)}var lt=(()=>{let d=class d{constructor(){this.id=w(void 0,{transform:t=>typeof t<"u"?+t:void 0}),this.cartFacade=m(K),this.categoryFacade=m(j),this.quantity=S(1),this.products=this.categoryFacade.products,this.cart=this.cartFacade.cart,this.product=W(N(this.id).pipe(y(t=>this.getProduct(t))),{initialValue:void 0})}getProduct(t){return x(this,null,function*(){try{return t?this.products().find(e=>e.id===t):void 0}catch{return}})}addItem(t){let e=this.cart().findIndex(s=>s.id===t.id);console.log("addItem",e),this.cartFacade.addCart(e,t,this.quantity())}};d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=v({type:d,selectors:[["app-product-details"]],inputs:{id:[M.SignalBased,"id"]},standalone:!0,features:[k],decls:2,vars:1,consts:[[1,"product"],[1,"row"],["width","200","height","200",3,"src"],[3,"routerLink"],[1,"buttons"],["type","number","min","1",1,"order",3,"ngModelChange","ngModel"],[3,"click"]],template:function(e,s){if(e&1&&(i(0,"div"),_(1,Y,1,1),n()),e&2){let h;c(),C(1,(h=s.product())?1:-1,h)}},dependencies:[A,J,z,G,R,H,U,B],styles:[".product[_ngcontent-%COMP%], .buttons[_ngcontent-%COMP%]{margin-bottom:1rem}.row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;margin-bottom:.25rem}.row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-of-type{color:#aaa;width:20%}.row[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-of-type(2){width:80%}input.order[_ngcontent-%COMP%]{width:100px;height:30px;margin-right:.5rem}"],changeDetection:0});let o=d;return o})();export{lt as ProductDetailsComponent};