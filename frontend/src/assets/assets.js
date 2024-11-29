// Our Categories
import airpod from "./air-pods.png";
import swatch from "./smart-watches.png";
import laptop from "./laptops.png";
import mobilePhone from "./mobile-phones.png";

// Best Selling Shop Items
import sonyPlay from "./sony-playstation.png";
import goPro from "./gopro.png";
import airpodPro from "./airpod-pro.png";
import iphone15Pro from "./iphone15-pro.png";
import appleMacbook from "./apple-macbook-pro.png";
import iphoneXpro from "./iphoneX-pro.png";
import playStation5 from "./playstation5.png";
import gimbalPart from "./gimbal-part.png";

// Other shop item
import watch from "./watch.png";
import iphone15ProMax1 from "./iphone15promax-1.png";
import iphone15ProMax2 from "./iphone15promax-2.png";
import iphone15ProMax3 from "./iphone15ppromax-3.png";

// Insta Shop Items
import instaShop1 from "./insta-shop-1.png";
import instaShop2 from "./insta-shop-2.png";
import instaShop3 from "./insta-shop-3.png";
import instaShop4 from "./insta-shop-4.png";
import instaShop5 from "./insta-shop-5.png";

// Hero Pegination Images
import hero1 from "./hero1.png";
import hero2 from "./hero2.png";
import hero3 from "./hero3.png";

// images
import logo from "./logo.svg";
import subcribeBg from "./subscribe-bg.png";
import pageHeaderBg from "./page-header-bg.png";
import search from "./search.svg";
import cart from "./cart.svg";
import profile from "./profile.svg";

// Latest Blog Posts
import blogImg from "./blog-img-1.png";
import blogImg2 from "./blog-img-2.png";
import blogImg3 from "./blog-img-3.png";

// Blog Posts
import blogImg4 from "./blog-img-4.png";
import blogImg5 from "./blog-img-5.png";
import blogImg6 from "./blog-img-6.png";
import blogImg7 from "./blog-img-7.png";

// Latest Posts
import smallCamera from "./small-camera.png";
import techHack from "./tech-hack.png";
import coolGadgets from "./cool-gadgets.png";

// About Us image
import aboutImg from "./about-img.png";

// Contact Us image
import contactImg from "./contact.png";

export const assets = {
  logo,
  aboutImg,
  contactImg,
  subcribeBg,
  pageHeaderBg,
  profile,
  cart,
  search,
  hero1,
  hero2,
  hero3,
};

// Shop Categories
export const ourShopCategories = [
  {
    image: airpod,
    name: "Air Pods",
    items: "(6 items)",
  },
  {
    image: swatch,
    name: "Smart watches",
    items: "(12 items)",
  },
  {
    image: laptop,
    name: "Laptops",
    items: "(3 items)",
  },
  {
    image: mobilePhone,
    name: "Mobile phones",
    items: "(9 items)",
  },
];

// Shop products
export const products = [
  {
    _id: "aaaaa",
    name: "Sony PlayStation Move",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 870,
    image: [sonyPlay],
    category: "Accessories",
    subCategory: "Modern",
    brands: "Samsung",
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaab",
    name: "GoPro",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 600,
    image: [goPro],
    category: "Accessories",
    subCategory: "Modern",
    brands: "Green",
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "AirPods Pro",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 400,
    image: [airpodPro],
    category: "Accessories",
    subCategory: "White",
    brands: "White",
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "Iphone 15 Pro",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 2000,
    image: [iphone15Pro],
    category: "Phones",
    subCategory: "Mobile",
    brands: "Apple",
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "Apple MacBook Pro",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 3000,
    image: [appleMacbook],
    category: "Laptop",
    subCategory: "Modern",
    brands: "Apple",
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "Iphone X Pro",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 900,
    image: [iphoneXpro],
    category: "Phones",
    subCategory: "Mobile",
    brands: "Apple",
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaag",
    name: "PlayStation 5",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 750,
    image: [playStation5],
    category: "Accessories",
    subCategory: "White",
    brands: "Samsung",
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaah",
    name: "Gimbal Parts",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 250,
    image: [gimbalPart],
    category: "Accessories",
    subCategory: "Cheap",
    brands: "Green",
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaaai",
    name: "Watch",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 360,
    image: [watch],
    category: "Watches",
    subCategory: "Modern",
    brands: "Samsung",
    date: 1716634345448,
    bestseller: false,
  },
  {
    _id: "aaaaj",
    name: "Iphone 15 Pro Max",
    description:
      "Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris, cras egestas quam venenatis neque.",
    price: 2700,
    image: [iphone15ProMax1, iphone15ProMax2, iphone15ProMax3],
    category: "Phones",
    subCategory: "Mobile",
    brands: "Apple",
    date: 1716634345448,
    bestseller: false,
  },
];

// Insta Shop
export const InstaShop = [
  instaShop1,
  instaShop2,
  instaShop3,
  instaShop4,
  instaShop5,
];
