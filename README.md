# Online Store DB

A modern e-commerce application built with Next.js that provides a complete shopping experience with product management, user authentication, and order processing.

## Project Description

Online Store BD is a full-featured online shopping platform designed to deliver a seamless user experience for browsing, searching, and purchasing products. The application includes an admin panel for managing inventory and orders, user authentication, and a responsive shopping interface.

## Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/ashiqurrahman696/online-store-bd.git
cd online-store-bd
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and configure your environment variables.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Route Summary

| Route | Description |
|-------|-------------|
| `/` | Homepage with featured products |
| `/products` | All products listing page |
| `/products/[id]` | Individual product details page |
| `/add-product` | Add new product |
| `/login` | User login page |
| `/register` | User registration page |

## Implemented Features

1. **Product Catalog** - Browse products
2. **User Authentication** - Secure login and registration system
3. **Responsive Design** - Mobile-friendly interface
4. **Product Details** - Detailed product information with reviews

## Feature Explanations

### Product Catalog
Users can browse all available products. Each product displays essential information including price, availability, and customer ratings.

### User Authentication
Secure registration and login system with password encryption. Users can create accounts, manage profiles, and view their order history.

### Responsive Design
The application is fully responsive and works seamlessly across desktop, tablet, and mobile devices using modern CSS frameworks.