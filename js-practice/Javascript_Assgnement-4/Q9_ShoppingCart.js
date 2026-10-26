(() => {
    // A cart calculates item totals and validates percentage coupons.
    class Cart {
        constructor() {
            this.items = [];
        }

        addItem(name, price, quantity) {
            this.items.push({ name, price, quantity });
        }

        getTotal() {
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }

        applyCoupon(code) {
            const match = /^(?:SAVE|DISC)(\d{1,2})$/i.exec(code.trim());
            if (!match) return { valid: false, message: "Use a coupon such as SAVE20 or DISC10." };

            const discountPercent = Number(match[1]);
            if (discountPercent < 1 || discountPercent > 100) {
                return { valid: false, message: "Coupon discount must be from 1% to 100%." };
            }

            const total = this.getTotal();
            return {
                valid: true,
                discountPercent,
                finalTotal: total - total * discountPercent / 100
            };
        }
    }

    const cart = new Cart();
    cart.addItem("Notebook", 120, 2);
    cart.addItem("Pen set", 80, 1);
    const app = document.querySelector("#q9-app");
    const itemList = document.createElement("ul");

    for (const item of cart.items) {
        const row = document.createElement("li");
        row.textContent = `${item.name} x ${item.quantity} - Rs. ${(item.price * item.quantity).toFixed(2)}`;
        itemList.append(row);
    }

    const totalLine = document.createElement("p");
    totalLine.textContent = `Cart total: Rs. ${cart.getTotal().toFixed(2)}`;
    const form = document.createElement("form");
    form.innerHTML = `
        <div class="field">
            <label for="cart-coupon">Coupon code</label>
            <input id="cart-coupon" name="coupon" placeholder="SAVE20" autocomplete="off">
        </div>
        <button type="submit">Apply coupon</button>
    `;
    const result = document.createElement("p");
    result.className = "result";
    result.setAttribute("aria-live", "polite");
    app.append(itemList, totalLine, form, result);

    form.addEventListener("submit", event => {
        event.preventDefault();
        const couponResult = cart.applyCoupon(form.elements.coupon.value);
        result.textContent = couponResult.valid
            ? `${couponResult.discountPercent}% discount applied. Final total: Rs. ${couponResult.finalTotal.toFixed(2)}`
            : couponResult.message;
    });

    console.log("Cart total:", cart.getTotal().toFixed(2));
})();