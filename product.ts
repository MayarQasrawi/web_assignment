//task 4
interface Product {
     name: string;
     price: number;
 }
 
 function calculateTotalPrice(products: Product[]): number {
     return products.reduce((total, product) => total + product.price, 0);
 }

//task 5
 function isValidEmail(email: string): boolean {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email.toLowerCase());
   }
 



//task 4 output
 const products: Product[] = [
     { name: "Apple", price: 6 },
     { name: "Banana", price: 5 },
     { name: "Orange", price: 10 }
 ];

 
 const total = calculateTotalPrice(products);
 console.log('task 4')
 console.log(`Total Price = ${total}`);
 


 //task 5 outputs

 const email1 = "mayar@gmail.com";
const email2 = "Mayar.email";
console.log('task 5')
console.log(`Is "${email1}" a valid email? ${isValidEmail(email1)}`); 
console.log(`Is "${email2}" a valid email? ${isValidEmail(email2)}`); 


/*
I alrady  install the Typescript
the version with this command: tsc -v
Version 5.7.2
----------------------------------------------
to compile a typescript file
use this command in bash:  tsc product.ts
this command will make a javascript file prodct.js


*/

