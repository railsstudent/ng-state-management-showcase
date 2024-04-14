import{a as M,b as w,c as F,d as Q,e as X,f as P,g}from"./chunk-QS2UKZXK.js";import{$a as u,Fa as O,Ga as V,Gb as L,Ma as _,Oa as A,Qa as h,Ra as W,Sa as B,Ta as e,Ua as n,Va as I,Wa as N,X as c,Xa as f,Ya as s,Z as b,Za as i,_ as p,_a as y,ab as x,bb as v,cb as S,eb as C,ha as T,hb as j,ia as D,jb as U,oa as k,za as l}from"./chunk-ATDAGXIH.js";var z=(()=>{let t=class t{constructor(){this.cartFacade=c(g),this.item=k.required(),this.quantity=V(0)}delete(d){return this.cartFacade.deleteCart(d)}update(d,o){return this.cartFacade.updateCart(d,o)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart-item"]],inputs:{item:[b.SignalBased,"item"],quantity:[b.SignalBased,"quantity"]},outputs:{quantity:"quantityChange"},standalone:!0,features:[C],decls:16,vars:5,consts:[[1,"row"],[2,"width","10%"],[2,"width","20%"],[2,"width","40%"],["type","number","min","1",2,"width","50px",3,"ngModelChange","ngModel"],[1,"btnUpdate",3,"click"],[3,"click"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"p",1),i(2),n(),e(3,"p",2),i(4),n(),e(5,"p",3),i(6),n(),e(7,"p",1),i(8),n(),e(9,"p",1)(10,"input",4),S("ngModelChange",function(E){return v(r.quantity,E)||(r.quantity=E),E}),n()(),e(11,"p",1)(12,"button",5),f("click",function(){return r.update(r.item().id,r.quantity())}),i(13,"Update"),n(),e(14,"button",6),f("click",function(){return r.delete(r.item().id)}),i(15,"X"),n()()()),o&2&&(l(2),y(r.item().id),l(2),y(r.item().title),l(2),y(r.item().description),l(2),y(r.item().price),l(2),x("ngModel",r.quantity))},dependencies:[P,M,Q,w,X,F],styles:[".row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{border:1px solid black}.btnUpdate[_ngcontent-%COMP%]{margin-right:.25rem}"],changeDetection:0});let a=t;return a})();function J(a,t){if(a&1&&(e(0,"div",1)(1,"div",2),i(2),j(3,"percent"),n(),e(4,"div",2),i(5),n()()),a&2){let m=s();l(2),u("Minus ",U(3,2,m.discountPercent(),"2.2-2"),""),l(3),u("Discount: ",m.summary().discount,"")}}var G=(()=>{let t=class t{constructor(){this.cartFacade=c(g),this.discountPercent=this.cartFacade.discountPercent,this.summary=this.cartFacade.summary}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart-total"]],standalone:!0,features:[C],decls:12,vars:4,consts:[[1,"summary"],[1,"row"],[1,"col"]],template:function(o,r){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2),i(3),n(),e(4,"div",2),i(5),n()(),_(6,J,6,5,"div",1),e(7,"div",1)(8,"div",2),i(9,"\xA0"),n(),e(10,"div",2),i(11),n()()()),o&2&&(l(3),u("Qty: ",r.summary().quantity,""),l(2),u("Subtotal: ",r.summary().subtotal,""),l(),h(6,r.discountPercent()>0?6:-1),l(5),u("Total: ",r.summary().total,""))},dependencies:[L],styles:[".summary[_ngcontent-%COMP%]{border:1px solid black;margin-bottom:1rem}.row[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.col[_ngcontent-%COMP%]{width:20%}"],changeDetection:0});let a=t;return a})();var K=(a,t)=>t.id;function R(a,t){if(a&1&&I(0,"app-cart-item",5),a&2){let m=t.$implicit;A("item",m)("quantity",m.quantity)}}function Z(a,t){if(a&1){let m=N();e(0,"div",0)(1,"div",1)(2,"p",2),i(3,"Id"),n(),e(4,"p",3),i(5,"Title"),n(),e(6,"p",4),i(7,"Description"),n(),e(8,"p",2),i(9,"Price"),n(),e(10,"p",2),i(11,"Qty"),n(),e(12,"p",2),i(13,"\xA0"),n()(),W(14,R,1,2,"app-cart-item",5,K),I(16,"app-cart-total"),e(17,"span"),i(18,"Promotion code: "),n(),e(19,"input",6),S("ngModelChange",function(o){T(m);let r=s();return v(r.promoCode,o)||(r.promoCode=o),D(o)}),n(),e(20,"button",7),f("click",function(){T(m);let o=s();return D(o.updatePromoCode(o.promoCode()))}),i(21,"Apply"),n()()}if(a&2){let m=s();l(14),B(m.cart()),l(5),x("ngModel",m.promoCode)}}function $(a,t){a&1&&(e(0,"p"),i(1,"Your cart is empty, please buy something."),n())}var ht=(()=>{let t=class t{constructor(){this.cartFacade=c(g),this.promoCode=O(this.cartFacade.promoCode()),this.cart=this.cartFacade.cart}updatePromoCode(d){return this.cartFacade.updatePromoCode(d)}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=p({type:t,selectors:[["app-cart"]],standalone:!0,features:[C],decls:2,vars:1,consts:[[1,"cart"],[1,"row"],[2,"width","10%"],[2,"width","20%"],[2,"width","40%"],[3,"item","quantity"],[3,"ngModelChange","ngModel"],[3,"click"]],template:function(o,r){o&1&&_(0,Z,22,1,"div",0)(1,$,2,0),o&2&&h(0,r.cart().length>0?0:1)},dependencies:[z,G,P,M,w,F],styles:[".row[_ngcontent-%COMP%]{display:flex}.row[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{border:1px solid black}input[_ngcontent-%COMP%]{margin-right:.25rem}"],changeDetection:0});let a=t;return a})();export{ht as CartComponent};
