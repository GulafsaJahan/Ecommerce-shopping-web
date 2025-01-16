import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SingleProduct from '../../assets/singlep.webp';
import sp2 from '../../assets/sp2.jpeg';
import sp3 from '../../assets/sp3.jpeg';
import ss1 from '../../assets/ss1.jpeg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductDetails from './ProductDetails';
import SimilarProducts from './SimilarProducts';

const products = [
  {
    id: 1,
    name: 'LUMINOUS Red Charge RC 18000 Tall Long Backup Tubular Inverter Battery (150Ah)',
    price: '₹13,989',
    originalPrice: '₹16,990',
    discount: '17% off',
    description: 'A reliable tubular inverter battery for long power backup.',
    images: [SingleProduct, sp2, sp3],
  },
];

const similarProducts = [
  {
    id: 2,
    name: 'Tubular Inverter Battery',
    price: '₹13,873',
    originalPrice: '₹20,100',
    discount: '30% off',
    image: ss1,
    link: '/SimilarProduct',
  },
  {
    id: 3,
    name: 'LUMINOUS Red Charge',
    price: '₹17,990',
    originalPrice: '₹21,990',
    discount: '18% off',
    image: ss1,
    link: '/SimilarProduct',
  },
  {
    id: 4,
    name: 'Tubular Inverter Battery',
    price: '₹15,020',
    originalPrice: '₹18,000',
    discount: '16% off',
    image: ss1,
    link: '/SimilarProduct',
  },
  {
    id: 5,
    name: 'Tubular Inverter Battery',
    price: '₹13,873',
    originalPrice: '₹20,100',
    discount: '30% off',
    image: ss1,
    link: '/SimilarProduct',
  },
  {
    id: 6,
    name: 'Tubular Inverter Battery',
    price: '₹13,873',
    originalPrice: '₹20,100',
    discount: '30% off',
    image: ss1,
    link: '/SimilarProduct',
  },
  {
    id: 7,
    name: 'Tubular Inverter Battery',
    price: '₹13,873',
    originalPrice: '₹20,100',
    discount: '30% off',
    image: ss1,
    link: '/SimilarProduct',
  },
  {
    id: 8,
    name: 'Tubular Inverter Battery',
    price: '₹13,873',
    originalPrice: '₹20,100',
    discount: '30% off',
    image: ss1,
    link: '/SimilarProduct',
  },
  {
    id: 9,
    name: 'Tubular Inverter Battery',
    price: '₹13,873',
    originalPrice: '₹20,100',
    discount: '30% off',
    image: ss1,
    link: '/SimilarProduct',
  },
];


const Motherboard = () => (
  <>
    <Header />
    <div className="container-fluid bg-light">
      <ProductDetails product={products[0]} />
      <SimilarProducts products={similarProducts} />
    </div>
    <Footer />
  </>
);

export default Motherboard;
