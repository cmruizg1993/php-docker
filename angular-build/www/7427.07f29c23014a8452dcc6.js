(self.webpackChunksmart_urban_farm=self.webpackChunksmart_urban_farm||[]).push([[7427],{7427:(t,e,i)=>{"use strict";i.r(e),i.d(e,{InvernaderosPageModule:()=>p});var n=i(1116),o=i(1462),r=i(6498),s=i(6687),c=i(5366),Z=i(3957);function a(t,e){1&t&&(c.TgZ(0,"span"),c._uU(1,"SI"),c.qZA())}function d(t,e){1&t&&(c.TgZ(0,"span"),c._uU(1,"NO"),c.qZA())}function g(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"th",24),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c.YNc(6,a,2,0,"span",25),c.YNc(7,d,2,0,"span",25),c.qZA(),c.TgZ(8,"td"),c._uU(9),c.qZA(),c.TgZ(10,"td"),c.TgZ(11,"button",26),c.NdJ("click",function(){const e=c.CHM(t).$implicit,i=c.oxw();return i.item=e,i.edit=!0}),c._UZ(12,"i",27),c.qZA(),c.TgZ(13,"button",28),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().delete(e.id)}),c._UZ(14,"i",29),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(2),c.Oqu(t.id),c.xp6(2),c.Oqu(t.description),c.xp6(2),c.Q6J("ngIf",t.state),c.xp6(1),c.Q6J("ngIf",!t.state),c.xp6(2),c.Oqu(t.observations)}}const l=[{path:"",component:(()=>{class t{constructor(t){this.api=t,this.endpoint="/greenHouse",this.edit=!1,this.item={}}ngOnInit(){this.index()}index(){this.api.get(this.endpoint).toPromise().then(t=>{this.data=t})}create(){this.api.post(this.endpoint,this.item).toPromise().then(t=>{this.item={},this.index()})}update(){this.api.put(this.endpoint+"/"+this.item.id,this.item).toPromise().then(t=>{this.item={},this.edit=!1,this.index()})}delete(t){this.api.delete(this.endpoint+"/"+t).toPromise().then(t=>{this.index()})}save(){this.edit?this.update():this.create()}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(Z.s))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-invernaderos"]],decls:52,vars:4,consts:[[1,"container-fluid","mt-4"],[1,"welcome-card"],["color","primary"],[1,"row","mt-2"],[1,"col-4"],[1,"row"],[1,"col-9"],[1,"form-group","row"],["for","",1,"col-form-label","col-4"],[1,"col-8"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-3"],[1,"form-check"],["type","checkbox","id","flexCheckDefault",1,"form-check-input",3,"ngModel","ngModelChange"],["for","flexCheckDefault",1,"form-check-label"],[1,"col-9","mt-2"],["name","","id","","cols","30","rows","10",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-block","btn-primary",3,"click"],[1,"col"],[1,"table-responsive-md"],[1,"table","table-hover"],[1,"bg-black","text-light","p-1"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[4,"ngIf"],[1,"btn","btn-sm","btn-warning",3,"click"],[1,"class","fa","fa-edit"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"class","fa","fa-trash"]],template:function(t,e){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-title"),c._uU(3,"invernaderos"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(4,"ion-content"),c.TgZ(5,"div",0),c.TgZ(6,"ion-card",1),c.TgZ(7,"ion-card-header",2),c.TgZ(8,"ion-card-title"),c._uU(9,"Gesti\xf3n de Invernaderos"),c.qZA(),c._UZ(10,"ion-card-subtitle"),c.qZA(),c.TgZ(11,"ion-card-content"),c.TgZ(12,"div",3),c.TgZ(13,"div",4),c.TgZ(14,"div",5),c.TgZ(15,"div",6),c.TgZ(16,"div",7),c.TgZ(17,"label",8),c._uU(18," Descripci\xf3n "),c.qZA(),c.TgZ(19,"div",9),c.TgZ(20,"input",10),c.NdJ("ngModelChange",function(t){return e.item.description=t}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(21,"div",11),c.TgZ(22,"div",12),c.TgZ(23,"input",13),c.NdJ("ngModelChange",function(t){return e.item.state=t}),c.qZA(),c.TgZ(24,"label",14),c._uU(25," Estado "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(26,"div",15),c.TgZ(27,"div",7),c.TgZ(28,"label",8),c._uU(29,"Observ."),c.qZA(),c.TgZ(30,"div",9),c.TgZ(31,"textarea",16),c.NdJ("ngModelChange",function(t){return e.item.observations=t}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(32,"div",11),c.TgZ(33,"button",17),c.NdJ("click",function(){return e.save()}),c._uU(34," Guardar"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(35,"div",18),c.TgZ(36,"div",19),c.TgZ(37,"table",20),c.TgZ(38,"thead",21),c.TgZ(39,"tr"),c.TgZ(40,"th",22),c._uU(41,"Id"),c.qZA(),c.TgZ(42,"th",22),c._uU(43,"Descripcion"),c.qZA(),c.TgZ(44,"th",22),c._uU(45,"Estado"),c.qZA(),c.TgZ(46,"th",22),c._uU(47,"Observ"),c.qZA(),c.TgZ(48,"th",22),c._uU(49,"Acciones"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(50,"tbody"),c.YNc(51,g,15,5,"tr",23),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(20),c.Q6J("ngModel",e.item.description),c.xp6(3),c.Q6J("ngModel",e.item.state),c.xp6(8),c.Q6J("ngModel",e.item.observations),c.xp6(20),c.Q6J("ngForOf",e.data))},directives:[r.Gu,r.sr,r.wd,r.W2,r.PM,r.Zi,r.gZ,r.tO,r.FN,o.Fj,o.JJ,o.On,o.Wl,n.sg,n.O5],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(l)],s.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,o.u5,r.Pc,u]]}),t})()}}]);