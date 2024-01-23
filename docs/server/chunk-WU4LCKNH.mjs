import './polyfills.server.mjs';
import{$ as me,A as f,B as ae,C as le,D as l,E as ue,F as m,G as k,H as b,O as de,P as ce,Q as W,S as A,T as he,U as fe,X as pe,a as te,b as ie,c as ne,ca as ge,d as I,e as x,f as v,g as _,h as O,i as g,j as re,k as U,l as H,m as L,n as u,o as c,p as oe,q as N,r as C,s as $,t as V,u as P,v as E,w as s,x as a,y as D,z as se}from"./chunk-GIWZNG34.mjs";import{a as p,b as y}from"./chunk-KRLCULJA.mjs";var Ae=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(c(L),c(H))},e.\u0275dir=g({type:e});let t=e;return t})(),Me=(()=>{let e=class e extends Ae{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=U(e)))(o||e)}})(),e.\u0275dir=g({type:e,features:[C]});let t=e;return t})(),K=new v("NgValueAccessor"),$e={provide:K,useExisting:I(()=>J),multi:!0},J=(()=>{let e=class e extends Me{writeValue(i){this.setProperty("checked",i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=U(e)))(o||e)}})(),e.\u0275dir=g({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,o){r&1&&f("change",function(d){return o.onChange(d.target.checked)})("blur",function(){return o.onTouched()})},features:[k([$e]),C]});let t=e;return t})(),We={provide:K,useExisting:I(()=>B),multi:!0};function qe(){let t=W()?W().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ze=new v("CompositionEventMode"),B=(()=>{let e=class e extends Ae{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!qe())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(c(L),c(H),c(ze,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&f("input",function(d){return o._handleInput(d.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(d){return o._compositionEnd(d.target.value)})},features:[k([We]),C]});let t=e;return t})();var Ze=new v("NgValidators"),Ye=new v("NgAsyncValidators");function Ee(t){return t!=null}function Fe(t){return se(t)?te(t):t}function we(t){let e={};return t.forEach(n=>{e=n!=null?p(p({},e),n):e}),Object.keys(e).length===0?null:e}function Se(t,e){return e.map(n=>n(t))}function Xe(t){return!t.validate}function Ie(t){return t.map(e=>Xe(e)?e:n=>e.validate(n))}function Ke(t){if(!t)return null;let e=t.filter(Ee);return e.length==0?null:function(n){return we(Se(n,e))}}function xe(t){return t!=null?Ke(Ie(t)):null}function Je(t){if(!t)return null;let e=t.filter(Ee);return e.length==0?null:function(n){let i=Se(n,e).map(Fe);return ne(i).pipe(ie(we))}}function Oe(t){return t!=null?Je(Ie(t)):null}function ye(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Qe(t){return t._rawValidators}function et(t){return t._rawAsyncValidators}function q(t){return t?Array.isArray(t)?t:[t]:[]}function G(t,e){return Array.isArray(t)?t.includes(e):t===e}function ve(t,e){let n=q(e);return q(t).forEach(r=>{G(n,r)||n.push(r)}),n}function _e(t,e){return q(e).filter(n=>!G(t,n))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=xe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},z=class extends j{get formDirective(){return null}get path(){return null}},S=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Z=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},tt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},$t=y(p({},tt),{"[class.ng-submitted]":"isSubmitted"}),Ne=(()=>{let e=class e extends Z{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(c(S,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&E("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[C]});let t=e;return t})();var F="VALID",T="INVALID",M="PENDING",w="DISABLED";function it(t){return(R(t)?t.validators:t)||null}function nt(t){return Array.isArray(t)?xe(t):t||null}function rt(t,e){return(R(e)?e.asyncValidators:t)||null}function ot(t){return Array.isArray(t)?Oe(t):t||null}function R(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Y=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===T}get pending(){return this.status==M}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ve(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ve(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(_e(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(_e(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(i=>{i.disable(y(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(y(p({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(i=>{i.enable(y(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(y(p({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=Fe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(T)?T:F}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=nt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ot(this._rawAsyncValidators)}};var Pe=new v("CallSetDisabledState",{providedIn:"root",factory:()=>Q}),Q="always";function st(t,e){return[...e.path,t]}function at(t,e,n=Q){ut(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),dt(t,e),ht(t,e),ct(t,e),lt(t,e)}function Ce(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function lt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ut(t,e){let n=Qe(t);e.validator!==null?t.setValidators(ye(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=et(t);e.asyncValidator!==null?t.setAsyncValidators(ye(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Ce(e._rawValidators,r),Ce(e._rawAsyncValidators,r)}function dt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ke(t,e)})}function ct(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ke(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ke(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ht(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ft(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function pt(t){return Object.getPrototypeOf(t.constructor)===Me}function mt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===B?n=o:pt(o)?i=o:r=o}),r||i||n||null}function Ve(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function De(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var gt=class extends Y{constructor(e=null,n,i){super(it(n),rt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(n)&&(n.nonNullable||n.initialValueIsDefault)&&(De(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ve(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ve(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){De(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var yt={provide:S,useExisting:I(()=>ee)},be=(()=>Promise.resolve())(),ee=(()=>{let e=class e extends S{constructor(i,r,o,h,d,Le){super(),this._changeDetectorRef=d,this.callSetDisabledState=Le,this.control=new gt,this._registered=!1,this.name="",this.update=new N,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=mt(this,h)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ft(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){at(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){be.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&de(r);be.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?st(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(c(z,9),c(Ze,10),c(Ye,10),c(K,10),c(oe,8),c(Pe,8))},e.\u0275dir=g({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[k([yt]),C,re]});let t=e;return t})();var vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=x({});let t=e;return t})();var _t=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=x({imports:[vt]});let t=e;return t})();var Te=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Pe,useValue:i.callSetDisabledState??Q}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=O({type:e}),e.\u0275inj=x({imports:[_t]});let t=e;return t})();var Ge=(()=>{let e=class e{constructor(){this.name="Olena F."}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-child"]],standalone:!0,features:[b],decls:8,vars:1,template:function(r,o){r&1&&(s(0,"h3"),l(1,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443"),a(),s(2,"h1"),l(3),a(),s(4,"h2"),l(5,"New test"),a(),s(6,"p"),l(7,"my-component works!"),a()),r&2&&(u(3),m("Hello ",o.name,""))},dependencies:[A]});let t=e;return t})();var Vt=["*"],je=(()=>{let e=class e{constructor(){this.name="Olena F."}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-myclass"]],standalone:!0,features:[b],ngContentSelectors:Vt,decls:7,vars:1,template:function(r,o){r&1&&(ae(),s(0,"h2"),l(1),a(),le(2),s(3,"p"),l(4,"myclass works!"),a(),s(5,"h3"),l(6,"HAY"),a()),r&2&&(u(1),m("Hello ",o.name,""))},dependencies:[A],styles:["h2[_ngcontent-%COMP%]{color:#8a2be2;font-family:Cambria,Cochin,Georgia,Times,Times New Roman,serif}"]});let t=e;return t})();var Be=(()=>{let e=class e{constructor(){this.title="prim_lek1",this.name="Olena",this.age=25,this.colspan=3,this.isRed=!1,this.isRed1=!0,this.red="isRedBox",this.count=0,this.name1="Lena",this.example1=!0,this.name2="Tom"}onClickme(i){this.count++,console.log(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=_({type:e,selectors:[["app-root"]],standalone:!0,features:[b],decls:72,vars:20,consts:[[1,"flex","flex-row"],[1,"flex","card"],["type","number","min","0","max","150",3,"value"],[3,"click"],["type","text",3,"ngModel","ngModelChange"],["type","checkbox",3,"ngModel","ngModelChange"]],template:function(r,o){r&1&&(s(0,"article",0)(1,"section",1)(2,"h2"),l(3,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 1"),a(),s(4,"h3"),l(5),a(),s(6,"h3"),l(7),a()(),s(8,"section",1)(9,"h2"),l(10,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 2"),a(),s(11,"p")(12,"label"),l(13,"Age="),D(14,"input",2),a()()(),s(15,"section",1)(16,"h2"),l(17,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 3"),a(),s(18,"table")(19,"tbody")(20,"tr")(21,"td"),l(22,"1"),a()(),s(23,"tr")(24,"td"),l(25,"2"),a(),s(26,"td"),l(27,"3"),a(),s(28,"td"),l(29,"4"),a()()()()(),s(30,"section",1)(31,"h3"),l(32,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 4"),a(),s(33,"p"),l(34),a(),s(35,"button",3),f("click",function(d){return o.onClickme(d)}),l(36,"Click me!!!"),a()(),s(37,"section",1)(38,"h3"),l(39,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 5"),a(),s(40,"p"),l(41),a(),s(42,"label"),l(43,"Name="),s(44,"input",4),f("ngModelChange",function(d){return o.name2=d}),a()(),s(45,"label"),l(46,"Name="),s(47,"input",4),f("ngModelChange",function(d){return o.name2=d}),a()()(),s(48,"section",1)(49,"h3"),l(50,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 6"),a(),D(51,"div")(52,"div"),s(53,"input",5),f("ngModelChange",function(d){return o.isRed=d}),a()(),s(54,"section",1)(55,"h3"),l(56,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 7"),a(),D(57,"div")(58,"div")(59,"div"),s(60,"input",5),f("ngModelChange",function(d){return o.isRed1=d}),a()(),s(61,"section",1)(62,"h3"),l(63,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 8"),a(),D(64,"app-child"),a(),s(65,"section",1)(66,"h3"),l(67,"\u041F\u0440\u0438\u043A\u043B\u0430\u0434 9"),a(),s(68,"app-myclass")(69,"h2"),l(70,"Hello"),a()()()(),D(71,"router-outlet")),r&2&&(u(5),ue(o.name),u(2),m("Age = ",o.age,""),u(7),V("value",o.age),u(7),$("colspan",o.colspan),u(13),m("\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043A\u043B\u0438\u043A\u0456\u0432 ",o.count,""),u(7),m("\u041F\u0440\u0438\u0432\u0456\u0442 ",o.name2,""),u(3),V("ngModel",o.name2),u(3),V("ngModel",o.name2),u(4),E("isRedBox",!o.isRed),u(1),E("isRedBox",o.isRed),u(1),V("ngModel",o.isRed),u(4),P("width",o.isRed1?"70px":"50px"),u(1),P("background-color",o.isRed1?"green":"red"),u(1),P("background-color",o.isRed1?"red":"green"),u(1),V("ngModel",o.isRed1))},dependencies:[A,me,Te,B,J,Ne,ee,Ge,je],styles:[".flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:30px}.flex-row[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap}.card[_ngcontent-%COMP%]{margin-top:10px;padding:1.5em 2em;color:#eceff1;background-color:#2b2b2b;border:1px solid #eceff133;border-radius:15px}table[_ngcontent-%COMP%]{border-collapse:collapse;border:1px solid #eceff133}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:2px solid #eceff133;width:100px;height:50px;text-align:center}button[_ngcontent-%COMP%]{width:100px;height:50px;cursor:pointer}.isRedBox[_ngcontent-%COMP%]{background-color:#dc143c}div[_ngcontent-%COMP%]{width:50px;height:50px;border:1px solid brown;border-radius:5px}"]});let t=e;return t})();var Re=[];var Ue={providers:[ge(Re),fe()]};var Dt={providers:[pe()]},He=ce(Ue,Dt);var bt=()=>he(Be,He),mi=bt;export{mi as a};