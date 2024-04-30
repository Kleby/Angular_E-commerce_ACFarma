import {
  EventEmitter,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YK3FWI72.js";

// src/app/services/product-cart.service.ts
var _ProductCartService = class _ProductCartService {
  constructor() {
    this.itens = [];
    this.priceTotal = 0;
    this.getCart();
  }
  getCart() {
    if (localStorage.getItem("cart")) {
      this.itens = JSON.parse(localStorage.getItem("cart") ?? "");
    }
    this.updatedPriceTotal();
    return this.itens;
  }
  setProductCart(product) {
    let index = -1;
    for (let i in this.itens) {
      if (this.itens[i].id === product.id)
        index = parseInt(i);
    }
    if (index > -1)
      this.itens[index].quantityProducts += 1;
    else
      this.itens.push(product);
    localStorage.setItem("cart", JSON.stringify(this.itens));
  }
  getQuantityProducts(id) {
    const product = this.itens.find((item) => item.id === id);
    return product?.quantityProducts || 1;
  }
  setQuantityProductsById(id, quantity) {
    for (let i in this.itens) {
      if (this.itens[i].id === id) {
        this.itens[i].quantityProducts = quantity;
      }
    }
    this.updatedPriceTotal();
    localStorage.setItem("cart", JSON.stringify(this.itens));
  }
  updatedPriceTotal() {
    let priceTotal = 0;
    for (let i of this.itens) {
      priceTotal += i.price * i.quantityProducts;
    }
    this.setPriceTotal(priceTotal);
    document.getElementById("bagPriceTotal").innerHTML = "R$" + this.priceTotal.toFixed(2);
  }
  setPriceTotal(newPrice) {
    this.priceTotal = newPrice;
  }
  getPriceTotal() {
    return Number(this.priceTotal.toFixed(2));
  }
};
_ProductCartService.\u0275fac = function ProductCartService_Factory(t) {
  return new (t || _ProductCartService)();
};
_ProductCartService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductCartService, factory: _ProductCartService.\u0275fac, providedIn: "root" });
var ProductCartService = _ProductCartService;

// src/app/services/quantity-cart.service.ts
var _QuantityCartService = class _QuantityCartService {
  constructor() {
    this.itens = [];
    this.quantityInCart = 1;
    this.updatedQuantityInCart();
  }
  updatedQuantityInCart() {
    this.itens = JSON.parse(localStorage.getItem("cart") || "");
    let quantityInCart = 0;
    this.itens.map((item) => {
      quantityInCart += item.quantityProducts;
    });
    this.setTotalInCart(quantityInCart);
    document.getElementById("quantityInBag").innerHTML = `${this.quantityInCart}`;
  }
  setTotalInCart(value) {
    this.quantityInCart = value;
  }
  getTotalInCart() {
    return this.quantityInCart;
  }
  clearCart() {
    this.itens = [];
    localStorage.clear();
  }
  deleteProductInCart(id) {
    this.itens = JSON.parse(localStorage.getItem("cart") || "");
    this.itens = this.itens.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(this.itens));
    this.updatedQuantityInCart();
  }
};
_QuantityCartService.\u0275fac = function QuantityCartService_Factory(t) {
  return new (t || _QuantityCartService)();
};
_QuantityCartService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuantityCartService, factory: _QuantityCartService.\u0275fac, providedIn: "root" });
var QuantityCartService = _QuantityCartService;

// src/app/components/product-quantity/product-quantity.component.ts
function ProductQuantityComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "Quantidade");
    \u0275\u0275elementEnd();
  }
}
var _ProductQuantityComponent = class _ProductQuantityComponent {
  constructor(productCartService, quantityCartService) {
    this.productCartService = productCartService;
    this.quantityCartService = quantityCartService;
    this.id = signal(0);
    this.isShowText = signal(false);
    this.quantity = signal(1);
    this.quantityOuput = new EventEmitter();
  }
  ngOnInit() {
    this.quantity.set(this.getQuantity(this.id()));
  }
  set inputId(id) {
    this.id.set(id);
  }
  set inputShowText(ishowText) {
    this.isShowText.set(ishowText);
  }
  onHandleIncrease() {
    this.quantity.update((oldValue) => ++oldValue);
    this.quantityOuput.emit(this.quantity());
  }
  onHandleDecrease() {
    if (this.quantity() > 1) {
      this.quantity.update((oldValue) => --oldValue);
      this.quantityOuput.emit(this.quantity());
    }
  }
  getQuantity(id) {
    return this.productCartService.getQuantityProducts(id);
  }
};
_ProductQuantityComponent.\u0275fac = function ProductQuantityComponent_Factory(t) {
  return new (t || _ProductQuantityComponent)(\u0275\u0275directiveInject(ProductCartService), \u0275\u0275directiveInject(QuantityCartService));
};
_ProductQuantityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductQuantityComponent, selectors: [["app-product-quantity"]], inputs: { inputId: "inputId", inputShowText: "inputShowText" }, outputs: { quantityOuput: "quantityOuput" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 2, consts: [[1, "quantity__container"], ["class", "quantity-text"], [1, "quantity__content"], ["type", "button", 1, "btn-quantity", 3, "click"], [1, "current-quantity"], [1, "quantity-text"]], template: function ProductQuantityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ProductQuantityComponent_Conditional_1_Template, 2, 0, "span", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function ProductQuantityComponent_Template_button_click_3_listener() {
      return ctx.onHandleDecrease();
    });
    \u0275\u0275text(4, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275listener("click", function ProductQuantityComponent_Template_button_click_7_listener() {
      return ctx.onHandleIncrease();
    });
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx.isShowText() ? 1 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.quantity());
  }
}, styles: ["\n\n.quantity__container[_ngcontent-%COMP%], .quantity__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.quantity__container[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.quantity-text[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 100%;\n  display: inline;\n  font-size: .75rem;\n  color: var(--secondary-color);\n}\n.quantity__content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.btn-quantity[_ngcontent-%COMP%] {\n  width: 2rem;\n  outline: none;\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n.btn-quantity[_ngcontent-%COMP%]:active {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n.current-quantity[_ngcontent-%COMP%] {\n  width: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--hight-color);\n  font-weight: 500;\n}\n.btn-quantity[_ngcontent-%COMP%], .current-quantity[_ngcontent-%COMP%] {\n  height: 2rem;\n  border: 1px solid var(--low-color);\n  background-color: transparent;\n}\n/*# sourceMappingURL=product-quantity.component.css.map */"] });
var ProductQuantityComponent = _ProductQuantityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductQuantityComponent, { className: "ProductQuantityComponent", filePath: "src\\app\\components\\product-quantity\\product-quantity.component.ts", lineNumber: 12 });
})();

export {
  ProductCartService,
  QuantityCartService,
  ProductQuantityComponent
};
//# sourceMappingURL=chunk-6UG3LSD7.js.map
