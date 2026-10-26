(() => {
    // A product stores its details and can apply a percentage discount.
    class Product {
        constructor(id, name, price, category) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.category = category;
        }

        applyDiscount(percent) {
            this.price -= this.price * percent / 100;
            return this.price;
        }

        getDetails() {
            return `ID ${this.id}: ${this.name} (${this.category}) - Rs. ${this.price.toFixed(2)}`;
        }
    }

    const products = [
        new Product(1, "Wireless Headphones", 2499, "Electronics"),
        new Product(2, "Coffee Mug", 450, "Home"),
        new Product(3, "Desk Lamp", 1499, "Home")
    ];

    products[0].applyDiscount(10);
    console.log("Products priced over Rs. 1,000:");
    products
        .filter(product => product.price > 1000)
        .forEach(product => console.log(product.getDetails()));
})();