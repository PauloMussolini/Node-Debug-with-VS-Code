const products = ['Celular', 'SmartTv', 'Notebook'];

export function getProducts() {
   return products;
}


export function addProduct (product) {
    products.push(product.Name);
}