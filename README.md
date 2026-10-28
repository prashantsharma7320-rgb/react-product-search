🛍️ React Product Search App

A responsive product search application built with React.js that allows users to search products in real time and view their prices. This project demonstrates React Hooks, array methods, and basic performance optimization using useMemo.

🚀 Live Demo

View Live Website

✨ Features

* 🔍 Real-time product search
* 📱 Responsive user interface
* 💰 Product prices displayed in Indian Rupee (₹) format
* 🛒 20 sample products
* ⚡ Case-insensitive product filtering
* 🔢 Interactive counter using useState
* 🧠 useMemo to cache filtered results when dependencies remain unchanged
* 🎨 Custom styling with CSS

🛠️ Technologies Used

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* React Hooks: useState, useMemo
* Vite
* Git and GitHub
* Vercel

📸 How It Works

1. Browse the available products and their sample prices.
2. Enter a product name in the search box.
3. View matching products instantly.
4. Use the counter to demonstrate a component re-render without changing the search query.

The filtered product list is memoized with useMemo, so the filtering calculation can be reused when its dependencies have not changed.

💻 Run Locally

Prerequisites

* Node.js
* npm

Installation

1. Clone the repository:

git clone https://github.com/prashantsharma7320-rgb/react-product-search.git

2. Open the project folder:

cd react-product-search

3. Install dependencies:

npm install

4. Start the development server:

npm run dev

5. Open the local URL shown in your terminal.

💡 What I Learned

* Managing component state with useState
* Memoizing calculation results with useMemo
* Filtering arrays using filter()
* Rendering lists using map()
* Handling controlled search inputs
* Formatting prices using toLocaleString("en-IN")
* Deploying a React application using Vercel
* Managing source code with Git and GitHub

📝 Note

The product names and prices are sample data for learning and demonstration purposes. They are not live retail prices.

👨‍💻 Author

Prashant Sharma

* GitHub: @prashantsharma7320-rgb
* Project Repository: React Product Search
* Live Demo: Product Search App

⸻

Built with ❤️ while learning React.js.
