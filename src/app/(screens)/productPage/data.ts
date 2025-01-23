

const reviews = [
  {
    name: 'Samantha D.',
    rating: 4.5,
    date: 'Posted on August 14, 2023',
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    verified: true,
  },
  {
    name: 'Alex M.',
    rating: 4,
    date: 'Posted on August 15, 2023',
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    verified: true,
  },
];

const relatedProducts = [
  {
    name: 'Graphic T-Shirt',
    image: '/ProductDetails/details/1.png',
    price: 25.99,
    oldPrice: 35.99,
    discount: 25,
    rating: 4.5,
  },
  {
    name: 'Summer Shorts',
    image: '/ProductDetails/details/2.png',
    price: 15.99,
    oldPrice: 20.99,

    rating: 4.2,
  },
  {
    name: 'Sports Shoes',
    image: '/ProductDetails/details/3.png',
    price: 55.99,
    oldPrice: 70.99,

    rating: 4.7,
  },
  {
    name: 'Backpack',
    image: '/ProductDetails/details/4.png',
    price: 39.99,
    oldPrice: 49.99,
    discount: 20,
    rating: 4.3,
  },
];

const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
const colors = ['#000000', '#333333', '#0000AA'];

module.exports = {
  sizes,
  colors,
  reviews,
  relatedProducts,
};