import{a as k}from"./chunk-PPTD6DWY.js";import{$ as a,Aa as b,C as l,Da as w,Fa as S,Ia as y,O as u,P as f,Qa as F,Z as p,bb as C,da as c,ea as n,f as s,fb as I,gb as j,ma as m,sa as g,ta as d,ua as h,wa as v}from"./chunk-LMBD4G5S.js";var E=(r,e,D)=>({disabled:r,"btn-outline-secondary":e,"btn-secondary":D}),G=(()=>{let e=class e{constructor(i,o,t){this.profileService=i,this.router=o,this.userService=t,this.toggle=new a,this.isSubmitting=!1,this.destroyRef=u(p)}toggleFollowing(){this.isSubmitting=!0,this.userService.isAuthenticated.pipe(l(i=>i?this.profile.following?this.profileService.unfollow(this.profile.username):this.profileService.follow(this.profile.username):(this.router.navigate(["/login"]),s)),j(this.destroyRef)).subscribe({next:i=>{this.isSubmitting=!1,this.toggle.emit(i)},error:()=>this.isSubmitting=!1})}};e.\u0275fac=function(o){return new(o||e)(n(k),n(C),n(I))},e.\u0275cmp=f({type:e,selectors:[["app-follow-button"]],inputs:{profile:"profile"},outputs:{toggle:"toggle"},standalone:!0,features:[S],decls:3,vars:7,consts:[[1,"btn","btn-sm","action-btn",3,"click","ngClass"],[1,"ion-plus-round"]],template:function(o,t){o&1&&(g(0,"button",0),v("click",function(){return t.toggleFollowing()}),h(1,"i",1),b(2),d()),o&2&&(m("ngClass",y(3,E,t.isSubmitting,!t.profile.following,t.profile.following)),c(2),w(" \xA0 ",t.profile.following?"Unfollow":"Follow"," ",t.profile.username," "))},dependencies:[F],encapsulation:2});let r=e;return r})();export{G as a};
