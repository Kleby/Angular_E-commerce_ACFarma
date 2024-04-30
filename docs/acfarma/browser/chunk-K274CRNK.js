import {
  FaIconComponent,
  FontAwesomeModule,
  faTruckFast
} from "./chunk-TYCC5FEN.js";
import "./chunk-JHVFKUUK.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-YK3FWI72.js";

// src/app/components/free-shipping/free-shipping.component.ts
var _FreeShippingComponent = class _FreeShippingComponent {
  constructor() {
    this.truckIcon = faTruckFast;
  }
};
_FreeShippingComponent.\u0275fac = function FreeShippingComponent_Factory(t) {
  return new (t || _FreeShippingComponent)();
};
_FreeShippingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FreeShippingComponent, selectors: [["app-free-shipping"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "free-shipping"], [1, "truck-icon", 3, "icon"]], template: function FreeShippingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "fa-icon", 1);
    \u0275\u0275text(2, " Frete Gr\xE1tis*\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx.truckIcon);
  }
}, dependencies: [FontAwesomeModule, FaIconComponent], styles: ["\n\n.free-shipping[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n  width: 100%;\n  text-align: center;\n  padding: .5rem;\n  margin-top: .25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: .5rem;\n}\n.truck-icon[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n/*# sourceMappingURL=free-shipping.component.css.map */"] });
var FreeShippingComponent = _FreeShippingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FreeShippingComponent, { className: "FreeShippingComponent", filePath: "src\\app\\components\\free-shipping\\free-shipping.component.ts", lineNumber: 14 });
})();
export {
  FreeShippingComponent
};
//# sourceMappingURL=chunk-K274CRNK.js.map
