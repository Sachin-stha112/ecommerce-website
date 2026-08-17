# ShopHub - E-Commerce Website

A full-featured e-commerce web application built with React, featuring product browsing, shopping cart, user authentication, and checkout.

## Features

- **Product Catalog** - Browse products with images, prices, and descriptions
- **Product Details** - View detailed product information on individual pages
- **Shopping Cart** - Add/remove items, update quantities, view cart total
- **Authentication** - Sign up and login with form validation using react-hook-form
- **Checkout Page** - Review order summary with quantity controls and place order
- **Persistent Navbar** - Dynamic navbar showing login/signup or user greeting with logout

## Tech Stack

- **React** - Frontend UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Hook Form** - Form handling and validation
- **localStorage** - Data persistence for auth and cart
- **Context API** - Global state management (AuthContext, CartContext)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  components/   - Reusable UI components (Navbar, ProductCard)
  context/      - Context providers (AuthContext, CartContext)
  data/         - Product data
  pages/        - Page components (Home, Auth, Checkout, ProductDetails)
```
