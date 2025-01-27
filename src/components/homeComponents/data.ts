const categories = [
    { image: '/casual.png' },
    { image: '/formal.png' },
    { image: '/party.png' },
    { image: '/gym.png' },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      text: '"The Shop turned my dull wardrobe into days of excitement! The customer service is fantastic, making every order so smooth. Every piece I bought has exceeded my expectations."',
    },
    {
      id: 2,
      name: 'Alex K.',
      rating: 5,
      text: '"Finding clothes that match my style used to be a challenge until I discovered ShopCo. The range of sizes is impressive, and they always have a great variety of looks and essentials."',
    },
    {
      id: 3,
      name: 'James L.',
      rating: 5,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon ShopCo. The selection is fantastic, and I love how they keep up their stock with the latest trends.",
    },
    {
      id: 4,
      name: 'Maria S.',
      rating: 5,
      text: '"Shopping here has been a game-changer for my wardrobe. The quality and style are unmatched!"',
    },
  ];

  const newArrivals = [
    { id: 1, name: 'T-shirt with Logo Details', price: 120, originalPrice: 140, rating: 4.5, image: '/n1.png' },
    { id: 2, name: 'Skinny Fit Jeans', price: 240, originalPrice: 260, rating: 4.2, image: '/n2.png' },
    { id: 3, name: 'Checkered Shirt', price: 180, rating: 4.0, image: '/n3.png' },
    { id: 4, name: 'Orange Sport T-shirt', price: 130, originalPrice: 160, rating: 4.3, image: '/n4.png' },
  ];

  const topSelling = [
    { id: 5, name: 'Vertical Striped Shirt', price: 215, originalPrice: 235, rating: 4.4, image: '/t1.png' },
    { id: 6, name: 'Coverage Graphic T-shirt', price: 145, rating: 4.2, image: '/t2.png' },
    { id: 7, name: 'Loose Fit Bermuda Shorts', price: 60, rating: 4.1, image: '/t3.png' },
    { id: 8, name: 'Relaxed Skinny Jeans', price: 210, rating: 4.3, image: '/t4.png' },
  ];

  module.exports={
    categories,
    reviews,
    newArrivals,
    topSelling
  }