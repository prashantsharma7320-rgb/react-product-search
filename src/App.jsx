import { useMemo , useState } from "react";
import "./App.css";

const products = [
    {id: 1, name: "iPhone 15", price: 61000 },
    {id: 2, name: "Samsung Galaxy", price: 64999 },
    {id: 3, name: "Macbook Air", price: 89900 },
    {id: 4, name: "HP Laptop", price: 45999 },
    {id: 5, name: "iPhone 16", price: 69900 },
    {id: 6, name: "iPad Air", price: 59900 },
    {id: 7, name: "Samsung Galaxy Tab", price: 69999 },
    {id: 8, name: "Dell Inspiron Laptop", price: 59999 },
    {id: 9, name: "Lenovo ThinkPad", price: 69999 },
    {id: 10, name: "OnePlus 13", price: 52999 },
    {id: 11, name: "Google Pixel 9", price: 79999 },
    {id: 12, name: "Apple Watch Series 1", price: 46900 },
    {id: 13, name: "Airpods Pro 2", price: 24900 },
    {id: 14, name: "Sony HeadPhones", price: 9999 },
    {id: 15, name: "JBL Bluetooth Speakers", price: 3999 },
    {id: 16, name: "Logitech Wireless Mouse", price: 1499 },
    {id: 17, name: "Mechanical Keyboard", price: 3499 },
    {id: 18, name: "Samsung 4K Monitor", price: 27999 },
    {id: 19, name: "Canon Camera", price: 54999 },
    {id: 20, name: "Power Bank", price: 1999 },
];

function App() {
    const [search, setSearch] = useState("");
    const [count, setCount] = useState(0);

    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");

        return products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]); // Add 'search' as a dependency to recalculate filteredProducts when search changes

    return (
        <div className="app">
            <h1>Product Search</h1>

            <input className="search-input"
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button className="count-button" onClick={() => setCount(count + 1)}>
                Count: {count}
                </button>

                <ul className="product-list">
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                            <span>{product.name}</span>
                            <strong> ₹{product.price.toLocaleString("en-IN")}</strong>
                            </li>
                    ))} 
                </ul>
        </div>
    );
}

export default App;