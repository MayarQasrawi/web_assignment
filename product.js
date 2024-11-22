function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
//task 5
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.toLowerCase());
}
//task 4 output
var products = [
    { name: "Apple", price: 6 },
    { name: "Banana", price: 5 },
    { name: "Orange", price: 10 }
];
var total = calculateTotalPrice(products);
console.log('task 4');
console.log("Total Price = ".concat(total));
//task 5 outputs
var email1 = "mayar@gmail.com";
var email2 = "Mayar.email";
console.log('task 5');
console.log("Is \"".concat(email1, "\" a valid email? ").concat(isValidEmail(email1)));
console.log("Is \"".concat(email2, "\" a valid email? ").concat(isValidEmail(email2)));
