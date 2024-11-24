const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
    {
        name: "Classic White T-Shirt",
        img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 1500,
        desc: "Comfortable, 100% cotton, perfect for casual wear."
    },
    {
        name: "Denim Jacket",
        img: "https://images.unsplash.com/photo-1600185367284-897fa5f6b9e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 4500,
        desc: "Stylish unisex denim jacket with a modern fit."
    },
    {
        name: "Black Leather Boots",
        img: "https://images.unsplash.com/photo-1592878912122-0a32f4ef660e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 7500,
        desc: "Durable leather boots, great for all seasons."
    },
    {
        name: "Red Party Dress",
        img: "https://images.unsplash.com/photo-1607866897867-d9f37935d36c?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 5500,
        desc: "Elegant and perfect for evening occasions."
    },
    {
        name: "Men's Casual Blazer",
        img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 6500,
        desc: "Lightweight blazer, great for semi-formal events."
    },
    {
        name: "Women's Skinny Jeans",
        img: "https://images.unsplash.com/photo-1586864389287-6865b9d1f105?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 3000,
        desc: "High-waisted, stretchable jeans for ultimate comfort."
    },
    {
        name: "Knitted Winter Scarf",
        img: "https://images.unsplash.com/photo-1602526218265-4e672ff9ed93?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 1200,
        desc: "Warm and soft scarf to keep you cozy."
    },
    {
        name: "Leather Handbag",
        img: "https://images.unsplash.com/photo-1546051598-c7f2b1e7e0bf?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 8500,
        desc: "Stylish and spacious handbag, ideal for daily use."
    },
    {
        name: "Sneakers",
        img: "https://images.unsplash.com/photo-1598967202655-4ebc8bd9a550?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
        price: 3500,
        desc: "Trendy and comfortable sneakers for everyday wear."
    }
];

async function seedDB() {
    await Product.insertMany(products);
    console.log("DB seeded with fashion products");
}

module.exports = seedDB;
