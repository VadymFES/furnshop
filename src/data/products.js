const products = [
    {
        id: "1",
        name: "CozyCloud Sofa",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        carouselImages: [
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/6a/06/fd/6a06fd5622dfd9a9d3f61f7178677088.jpg',
            'https://i.pinimg.com/564x/ad/bf/53/adbf5398145fc976eee82e40a3d8f8c3.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg'
          ],
        description: "This sofa is the perfect addition to any living room. With its sleek and modern design, it adds a touch of elegance to your home decor. The sofa is made of high-quality materials, ensuring durability and longevity. The comfortable cushioning provides a cozy and relaxing seating experience for you and your guests. It's the ideal piece of furniture for lounging, entertaining, and relaxing. Whether you're watching your favorite TV show, reading a book, or taking a nap, this sofa has got you covered. Don't miss out on the chance to add this stylish and comfortable sofa to your home.",
        price: 234,
        countInStock:3,
        rating: "3",
        numReviews: "45",
        isOnSale: true,
    },
    {
        id: "2",
        name: "Luxury Leather Sofa",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        carouselImages: [
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg'
          ],
        description: "Experience the ultimate luxury with this premium leather sofa. The sleek and modern design adds a touch of sophistication to any living space. Made with high-quality leather, this sofa is not only durable and long-lasting but also provides a comfortable seating experience. The plush cushioning and armrests provide maximum comfort, making it the perfect spot to relax after a long day. Don't miss out on the chance to add this elegant and comfortable sofa to your home.",
        price: "799",
        countInStock: "5",
        rating: "4.5",
        numReviews: "28",
        isOnSale: false,
      },
      {
        id: "3",
        name: "Retro Velvet Sofa",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        carouselImages: [
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg'
          ],
        description: "Bring back the retro vibe to your living room with this stylish velvet sofa. The unique design and vibrant colors make it a statement piece in any home. Made with high-quality velvet, this sofa is not only durable but also provides a comfortable seating experience. The plush cushioning and armrests provide maximum comfort, making it the perfect spot to relax after a long day. Don't miss out on the chance to add this retro and comfortable sofa to your home.",
        price: "399",
        countInStock: "7",
        rating: "4",
        numReviews: "12",
        isOnSale: true,
      },
    {
        id: "4",
        name: "wefff",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        carouselImages: [
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg'
          ],
        description: "fewaaaaaaa",
        price: "0",
        countInStock: "0",
        rating: "0",
        numReviews: "0",
        isOnSale: false,
    },
    {
        id: "5",
        name: "wefff",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        carouselImages: [
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg'
          ],
        description: "fewaaaaaaa",
        price: "12123",
        countInStock: "2",
        rating: "5",
        numReviews: "123",
        isOnSale: true,
    },
    {
        id: "6",
        name: "wefff",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        carouselImages: [
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg'
          ],
        description: "fewaaaaaaa",
        price: "246",
        countInStock: "3",
        rating: "4",
        numReviews: "4",
        isOnSale: false,
    },
    {
        id: "7",
        name: "wefff",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        carouselImages: [
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg'
          ],
        description: "fewaaaaaaa",
        price: "246",
        countInStock: "3",
        rating: "4",
        numReviews: "4",
        isOnSale: false,
    },
    {
        id: "8",
        name: "wefff",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        carouselImages: [
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51795.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51775.jpg',
            'https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51705.jpg'
          ],
        description: "fewaaaaaaa",
        price: "246",
        countInStock: "3",
        rating: "4",
        numReviews: "4",
        isOnSale: false,
    },
    {
        id: "9",
        name: "wefff",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        description: "fewaaaaaaa",
        price: "246",
        countInStock: "3",
        rating: "4",
        numReviews: "4",
        isOnSale: false,
    },
    {
        id: "10",
        name: "wefff",
        image: "https://i.pinimg.com/564x/fa/d5/bd/fad5bd26f3e0a19b39c159380bf51785.jpg",
        description: "fewaaaaaaa",
        price: "246",
        countInStock: "3",
        rating: "4",
        numReviews: "4",
        isOnSale: false,
    },
    {
        id: "11",
        name: "wefff",
        image: "https://i.pinimg.com/236x/75/ee/bd/75eebd1630c3e48378fb960779479d0f.jpg",
        description: "fewaaaaaaa",
        price: "246",
        countInStock: "3",
        rating: "4",
        numReviews: "4",
        isOnSale: true,
    },
    {
        id: "12",
        name: "wefff",
        image: "https://i.pinimg.com/236x/d2/a2/02/d2a202a0422929091a6e9cdebab5e843.jpg",
        description: "fewaaaaaaa",
        price: "246",
        countInStock: "3",
        rating: "4",
        numReviews: "4",
        isOnSale: false,
    },
    {
      id: "13",
      name: "wefff",
      image: "https://i.pinimg.com/236x/d2/a2/02/d2a202a0422929091a6e9cdebab5e843.jpg",
      description: "fewaaaaaaa",
      price: "246",
      countInStock: "3",
      rating: "4",
      numReviews: "4",
      isOnSale: false,
  },
  {
    id: "14",
    name: "wefff",
    image: "https://i.pinimg.com/236x/d2/a2/02/d2a202a0422929091a6e9cdebab5e843.jpg",
    description: "fewaaaaaaa",
    price: "246",
    countInStock: "3",
    rating: "4",
    numReviews: "4",
    isOnSale: false,
},
{
  id: "15",
  name: "wefff",
  image: "https://i.pinimg.com/236x/d2/a2/02/d2a202a0422929091a6e9cdebab5e843.jpg",
  description: "fewaaaaaaa",
  price: "246",
  countInStock: "3",
  rating: "4",
  numReviews: "4",
  isOnSale: false,
},
];

export default products;