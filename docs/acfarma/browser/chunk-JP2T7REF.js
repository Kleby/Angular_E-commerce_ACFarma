import {
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YK3FWI72.js";

// src/app/components/button-action/button-action.component.ts
var _ButtonActionComponent = class _ButtonActionComponent {
  constructor() {
    this.btnActionTitle = signal("");
  }
  set inputBtnActionTitle(title) {
    this.btnActionTitle.set(title);
  }
};
_ButtonActionComponent.\u0275fac = function ButtonActionComponent_Factory(t) {
  return new (t || _ButtonActionComponent)();
};
_ButtonActionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ButtonActionComponent, selectors: [["app-button-action"]], inputs: { inputBtnActionTitle: "inputBtnActionTitle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["type", "button", 1, "btn", "btn-action"]], template: function ButtonActionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.btnActionTitle());
  }
}, styles: ["\n\n.btn-action[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  width: 100%;\n  color: #e5e5e5;\n  height: 100%;\n  font-size: 100%;\n  text-transform: uppercase;\n  border-radius: .25rem;\n  box-shadow: 0 2px 3px var(--secondary-dark);\n  padding: .5rem 2.25rem;\n}\n.btn-action[_ngcontent-%COMP%]:hover {\n  transition: 400ms ease;\n  background-color: var(--secondary-dark);\n  box-shadow: 0 5px 6px var(--secondary-dark);\n}\n/*# sourceMappingURL=button-action.component.css.map */"] });
var ButtonActionComponent = _ButtonActionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ButtonActionComponent, { className: "ButtonActionComponent", filePath: "src\\app\\components\\button-action\\button-action.component.ts", lineNumber: 10 });
})();

export {
  ButtonActionComponent
};
//# sourceMappingURL=chunk-JP2T7REF.js.map
