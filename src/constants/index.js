//navbar
export const LINKS = [
  { text: "Home", targetId: "home" },
  { text: "About", targetId: "about" },
  { text: "Products", targetId: "productsHome" },
  { text: "Shop", targetId: "products" },
  { text: "Contact", targetId: "contact" },
];

//home
export const home = {
  banner: {
    title: "Elegant Burqas for Every Occasion",
    subtitle:
      "Discover a wide range of premium burqas blending tradition with modernity.",
    cta: "Shop Now",
    image: "/src/assets/img1.webp",
  },
  highlights: [
    {
      title: "Free Shipping",
      description: "On all orders over $50",
      icon: "/src/assets/img2.webp",
    },
    {
      title: "Premium Quality",
      description: "Handpicked fabrics for comfort and style",
      icon: "/src/assets/img2.webp",
    },
    {
      title: "Secure Payments",
      description: "Your data is safe with us",
      icon: "/src/assets/img2.webp",
    },
  ],
};

//about
export const about = {
  title: "About Us",
  description:
    "At Elegant Burqas, we are committed to providing the finest collection of burqas that cater to the diverse needs of modern women. Combining tradition and elegance, our designs are crafted to offer both modesty and sophistication. With a focus on quality and customer satisfaction, we aim to be your go-to destination for Islamic fashion.",
  image: "/assets/about-us.jpg",
  highlights: [
    {
      title: "Our Vision",
      description:
        "To empower women through modest fashion that reflects their identity and values.",
    },
    {
      title: "Our Values",
      description:
        "We prioritize quality, ethics, and customer satisfaction in everything we do.",
    },
  ],
};

//products
export const products = {
  categories: [
    {
      name: "Daily Wear Burqas",
      description: "Lightweight and comfortable burqas for everyday use.",
      image: "/src/assets/img3.jpg",
    },
    {
      name: "Formal Burqas",
      description: "Elegant designs for formal events and special occasions.",
      image: "/src/assets/img3.jpg",
    },
    {
      name: "Prayer Burqas",
      description: "Simple and practical burqas designed for prayers.",
      image: "/src/assets/img3.jpg",
    },
  ],
  featuredProducts: [
    {
      id: 1,
      name: "Black Embroidered Burqa",
      price: "$49.99",
      image: "/src/assets/img4.webp",
      description:
        "A beautifully embroidered black burqa with intricate details.",
    },
    {
      id: 2,
      name: "Navy Blue Formal Burqa",
      price: "$59.99",
      image: "/src/assets/img4.webp",
      description: "Perfect for formal occasions, crafted with premium fabric.",
    },
    {
      id: 3,
      name: "Simple Daily Wear Burqa",
      price: "$29.99",
      image: "/src/assets/img4.webp",
      description:
        "Lightweight and ideal for daily wear, offering comfort all day.",
    },
    {
      id: 4,
      name: "White Prayer Burqa",
      price: "$34.99",
      image: "/src/assets/img4.webp",
      description:
        "Designed for prayers, made with breathable and soft fabric.",
    },
  ],
};

//contact
export const contact = {
  title: "Contact Us",
  description:
    "We would love to hear from you! Reach out to us for inquiries, support, or feedback.",
  email: "support@elegantburqas.com",
  phone: "+1-234-567-890",
  address: "123 Islamic Fashion Street, Modesty City, USA",
  socialLinks: {
    facebook: "https://facebook.com/elegantburqas",
    instagram: "https://instagram.com/elegantburqas",
    twitter: "https://twitter.com/elegantburqas",
  },
  form: {
    fields: [
      {
        label: "Name",
        type: "text",
        placeholder: "Your Name",
      },
      {
        label: "Email",
        type: "email",
        placeholder: "Your Email",
      },
      {
        label: "Message",
        type: "textarea",
        placeholder: "Your Message",
      },
    ],
    submitButton: "Send Message",
  },
};

// products

export const productsData = [
  {
    id: 1,
    title: "Elegant Black Burqa",
    description:
      "A premium quality black burqa with intricate embroidery, designed for formal occasions and daily wear.",
    category: "Daily Wear Burqas",
    price: 49.99,
    discountPercentage: 10.0,
    rating: 4.8,
    stock: 12,
    tags: ["clothing", "modesty", "formal wear"],
    brand: "Elegant Burqas",
    sku: "EB001",
    weight: 1.2,
    dimensions: {
      width: 40,
      height: 120,
      depth: 5,
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships within 5-7 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Beautiful design and excellent quality!",
        date: "2024-06-15T10:23:00.000Z",
        reviewerName: "Aisha Ahmed",
        reviewerEmail: "aisha.ahmed@example.com",
      },
      {
        rating: 4,
        comment: "Comfortable to wear, but the delivery was delayed.",
        date: "2024-06-20T15:45:00.000Z",
        reviewerName: "Fatima Khan",
        reviewerEmail: "fatima.khan@example.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-05-01T08:00:00.000Z",
      updatedAt: "2024-06-10T08:00:00.000Z",
      barcode: "1234567890123",
      qrCode: "...",
    },
    thumbnail: "/src/assets/img1.webp",
    images: [
      "/src/assets/img4.webp",
      "/src/assets/img5.webp",
      "/src/assets/img6.webp",
    ],
  },
  {
    id: 2,
    title: "Classic White Hijab",
    description:
      "A lightweight, breathable white hijab perfect for everyday wear.",
    category: "Formal Burqas",
    price: 19.99,
    discountPercentage: 5.0,
    rating: 4.6,
    stock: 25,
    tags: ["accessories", "modesty", "everyday wear"],
    brand: "Modesty Essentials",
    sku: "ME002",
    weight: 0.5,
    dimensions: {
      width: 30,
      height: 120,
      depth: 2,
    },
    warrantyInformation: "No warranty",
    shippingInformation: "Ships within 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Lightweight and comfortable!",
        date: "2024-05-30T12:30:00.000Z",
        reviewerName: "Noor Malik",
        reviewerEmail: "noor.malik@example.com",
      },
    ],
    returnPolicy: "15 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-04-20T08:00:00.000Z",
      updatedAt: "2024-05-25T08:00:00.000Z",
      barcode: "9876543210987",
      qrCode: "...",
    },
    thumbnail: "/src/assets/img1.webp",
    images: [
      "/src/assets/img4.webp",
      "/src/assets/img5.webp",
      "/src/assets/img6.webp",
    ],
  },
  {
    id: 3,
    title: "Premium Navy Blue Abaya",
    description:
      "A stylish navy blue abaya with golden accents, perfect for formal gatherings and celebrations.",
    category: "Prayer Burqas",
    price: 59.99,
    discountPercentage: 15.0,
    rating: 4.9,
    stock: 8,
    tags: ["clothing", "abaya", "formal wear"],
    brand: "Elegant Burqas",
    sku: "EB003",
    weight: 1.4,
    dimensions: {
      width: 42,
      height: 130,
      depth: 5,
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships within 5-7 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Absolutely stunning abaya! Love the details.",
        date: "2024-06-18T14:00:00.000Z",
        reviewerName: "Zara Ali",
        reviewerEmail: "zara.ali@example.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-04-15T08:00:00.000Z",
      updatedAt: "2024-06-12T08:00:00.000Z",
      barcode: "1231231231231",
      qrCode: "...",
    },
    thumbnail: "/src/assets/img1.webp",
    images: [
      "/src/assets/img4.webp",
      "/src/assets/img5.webp",
      "/src/assets/img6.webp",
    ],
  },
  {
    id: 4,
    title: "Soft Cotton Hijab - Rose Pink",
    description:
      "A breathable, soft cotton hijab in a beautiful rose pink shade for casual outings.",
    category: "Daily Wear Burqas",
    price: 14.99,
    discountPercentage: 5.0,
    rating: 4.7,
    stock: 18,
    tags: ["accessories", "cotton", "hijab"],
    brand: "Modesty Essentials",
    sku: "ME004",
    weight: 0.3,
    dimensions: {
      width: 30,
      height: 120,
      depth: 1,
    },
    warrantyInformation: "No warranty",
    shippingInformation: "Ships within 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment:
          "Beautiful color and material, but slightly smaller than expected.",
        date: "2024-05-25T10:45:00.000Z",
        reviewerName: "Hiba Qureshi",
        reviewerEmail: "hiba.qureshi@example.com",
      },
    ],
    returnPolicy: "15 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-04-10T08:00:00.000Z",
      updatedAt: "2024-05-10T08:00:00.000Z",
      barcode: "9879879879879",
      qrCode: "...",
    },
    thumbnail: "/src/assets/img1.webp",
    images: [
      "/src/assets/img4.webp",
      "/src/assets/img5.webp",
      "/src/assets/img6.webp",
    ],
  },
  {
    id: 5,
    title: "Luxurious Kaftan Dress - Emerald Green",
    description:
      "A luxurious emerald green kaftan dress with hand-stitched embellishments, perfect for special occasions.",
    category: "Formal Burqas",
    price: 99.99,
    discountPercentage: 20.0,
    rating: 4.95,
    stock: 5,
    tags: ["clothing", "kaftan", "luxury"],
    brand: "Elegant Burqas",
    sku: "EB005",
    weight: 1.8,
    dimensions: {
      width: 50,
      height: 140,
      depth: 6,
    },
    warrantyInformation: "2 months warranty",
    shippingInformation: "Ships within 7-10 business days",
    availabilityStatus: "Limited Stock",
    reviews: [
      {
        rating: 5,
        comment: "This kaftan is absolutely gorgeous and worth every penny.",
        date: "2024-06-05T13:00:00.000Z",
        reviewerName: "Maryam Fatima",
        reviewerEmail: "maryam.fatima@example.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-05-01T08:00:00.000Z",
      updatedAt: "2024-05-25T08:00:00.000Z",
      barcode: "3213213213213",
      qrCode: "...",
    },
    thumbnail: "/src/assets/img1.webp",
    images: [
      "/src/assets/img4.webp",
      "/src/assets/img5.webp",
      "/src/assets/img6.webp",
    ],
  },
];

//#121212
//#eaeaea
//#b8b8b8
//#f36e17
//#dc5817
//#b02f1a
//#9d201a
