const numbers = [
    34, 
    31, 
    8, 
    7, 
    11, 
    49, 
    3, 
    4, 
    36, 
    46,
];
const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;

console.log(average);

// second stage

const people = [
     {
        name : "keto",
        age : 29,
    },
      {
        name : "gela" ,
        age : 32,
    },
    {
        name : "rusa", 
        age : 30,
    },
    {
        name : "kote",
        age : 40,
    },
    {
        name : "Maka", 
        age : 32,
    },
];

console.log(people);

let product = {
    productTitle: "XBOX",
    productDescription: "XBOX One",
    productPrice: 900,
    shopAddresses: ["Batumi", "Kutaisi", "Tbilisi"],
    roductMemoryInGB: 500,
    productResolution: "1080p",
};

console.log(product)

console.log(`Product name is ${product.productTitle}, product price is ${product.productPrice}, product resolution is ${product.productResolution} and you can buy it at ${product.shopAddresses[0]}.`);


