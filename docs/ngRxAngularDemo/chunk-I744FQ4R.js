import{a as M,b as w,c as F,d as Q,e as X,f as P,g}from"./chunk-HXONKBG6.js";import{$a as x,Db as L,Ea as O,Fa as V,La as _,Na as A,Pa as h,Qa as W,Ra as B,Sa as e,Ta as i,Ua as I,Va as N,W as m,Wa as f,Xa as s,Y as b,Ya as n,Z as p,Za as y,_a as u,ab as v,bb as S,db as C,ga as T,gb as j,ha as D,ib as U,na as k,ya as c}from"./chunk-UWJZMJWC.js";var z=(()=>{let t=class t{constructor(){this.cartFacade=m(g),this.item=k.required(),this.quantity=V(0)}delete(){return this.cartFacade.deleteCart(this.item().id)}update(){return this.cartFacade.updateCart(this.item().id,this.quantity())}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart-item"]],inputs:{item:[b.SignalBased,"item"],quantity:[b.SignalBased,"quantity"]},outputs:{quantity:"quantityChange"},standalone:!0,features:[C],decls:16,vars:5,consts:[[1,"row"],[2,"width","10%"],[2,"width","20%"],[2,"width","40%"],["type","number","min","1",2,"width","50px",3,"ngModelChange","ngModel"],[1,"btnUpdate",3,"click"],[3,"click"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"p",1),n(2),i(),e(3,"p",2),n(4),i(),e(5,"p",3),n(6),i(),e(7,"p",1),n(8),i(),e(9,"p",1)(10,"input",4),S("ngModelChange",function(E){return v(r.quantity,E)||(r.quantity=E),E}),i()(),e(11,"p",1)(12,"button",5),f("click",function(){return r.update()}),n(13,"Update"),i(),e(14,"button",6),f("click",function(){return r.delete()}),n(15,"X"),i()()()),o&2&&(c(2),y(r.item().id),c(2),y(r.item().title),c(2),y(r.item().description),c(2),y(r.item().price),c(2),x("ngModel",r.quantity))},dependencies:[P,M,Q,w,X,F],styles:[".row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{border:1px solid black}.btnUpdate[_ngcontent-%COMP%]{margin-right:.25rem}"],changeDetection:0});let a=t;return a})();function J(a,t){if(a&1&&(e(0,"div",1)(1,"div",2),n(2),j(3,"percent"),i(),e(4,"div",2),n(5),i()()),a&2){let d=s();c(2),u("Minus ",U(3,2,d.discountPercent(),"2.2-2"),""),c(3),u("Discount: ",d.summary().discount,"")}}var G=(()=>{let t=class t{constructor(){this.cartFacade=m(g),this.discountPercent=this.cartFacade.discountPercent,this.cart=this.cartFacade.cart,this.summary=this.cartFacade.summary}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart-total"]],standalone:!0,features:[C],decls:12,vars:4,consts:[[1,"summary"],[1,"row"],[1,"col"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),n(3),i(),e(4,"div",2),n(5),i()(),_(6,J,6,5,"div",1),e(7,"div",1)(8,"div",2),n(9,"\xA0"),i(),e(10,"div",2),n(11),i()()()),o&2&&(c(3),u("Qty: ",r.summary().quantity,""),c(2),u("Subtotal: ",r.summary().subtotal,""),c(),h(6,r.discountPercent()>0?6:-1),c(5),u("Total: ",r.summary().total,""))},dependencies:[L],styles:[".summary[_ngcontent-%COMP%]{border:1px solid black;margin-bottom:1rem}.row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.col[_ngcontent-%COMP%]{width:20%}"],changeDetection:0});let a=t;return a})();var K=(a,t)=>t.id;function R(a,t){if(a&1&&I(0,"app-cart-item",5),a&2){let d=t.$implicit;A("item",d)("quantity",d.quantity)}}function Z(a,t){if(a&1){let d=N();e(0,"div",0)(1,"div",1)(2,"p",2),n(3,"Id"),i(),e(4,"p",3),n(5,"Title"),i(),e(6,"p",4),n(7,"Description"),i(),e(8,"p",2),n(9,"Price"),i(),e(10,"p",2),n(11,"Qty"),i(),e(12,"p",2),n(13,"\xA0"),i()(),W(14,R,1,2,"app-cart-item",5,K),I(16,"app-cart-total"),e(17,"span"),n(18,"Promotion code: "),i(),e(19,"input",6),S("ngModelChange",function(o){T(d);let r=s();return v(r.promoCode,o)||(r.promoCode=o),D(o)}),i(),e(20,"button",7),f("click",function(){T(d);let o=s();return D(o.updatePromoCode(o.promoCode()))}),n(21,"Apply"),i()()}if(a&2){let d=s();c(14),B(d.cart()),c(5),x("ngModel",d.promoCode)}}function $(a,t){a&1&&(e(0,"p"),n(1,"Your cart is empty, please buy something."),i())}var ht=(()=>{let t=class t{constructor(){this.cartFacade=m(g),this.promoCode=O(this.cartFacade.promoCode()),this.cart=this.cartFacade.cart}updatePromoCode(l){return this.cartFacade.updatePromoCode(l)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart"]],standalone:!0,features:[C],decls:2,vars:1,consts:[[1,"cart"],[1,"row"],[2,"width","10%"],[2,"width","20%"],[2,"width","40%"],[3,"item","quantity"],[3,"ngModelChange","ngModel"],[3,"click"]],template:function(o,r){o&1&&_(0,Z,22,1,"div",0)(1,$,2,0),o&2&&h(0,r.cart().length>0?0:1)},dependencies:[z,G,P,M,w,F],styles:[".row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{border:1px solid black}input[_ngcontent-%COMP%]{margin-right:.25rem}"],changeDetection:0});let a=t;return a})();export{ht as CartComponent};
