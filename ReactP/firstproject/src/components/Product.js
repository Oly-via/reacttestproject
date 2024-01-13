export default function Product() {
    const products = [
        {id: 1, name: "Laptop", price: 500},
        {id: 2, name: "Phone", price: 200},
        {id: 3, name: "Modem", price: 50},
        {id: 4, name: "Laptop", price: 900},
    ]

    const fruits = ["Apple", "Mango", "Banana"]

    /*const productList = products.map((product) =>(
        <h3 key = {product.id}>{product.name}: ${product.price}</h3>
    ))*/

    const fruitsList = fruits.map((fruits, index) =>(
        <h3 key = {index}>{fruits}</h3>
    ))
    return (
        <div>
        {fruitsList}
    </div>
    )
}
 