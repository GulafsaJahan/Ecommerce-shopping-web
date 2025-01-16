import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext'; // Import the Cart context

const ProductDetails = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [hoveredThumbnail, setHoveredThumbnail] = useState(null);
  const [liked, setLiked] = useState(false); // State to track like status
  

  const toggleLike = () => {
    setLiked(!liked); // Toggle like state
  };

  const { addToCart } = useCart(); // Use the addToCart function from the context


  return (
    <div className="row mb-5 bg-light py-4 px-1">
      {/* Image and Thumbnail Section */}
      <div className="col-lg-5 col-md-6 col-12 mb-4">
        <div className="d-flex flex-column flex-md-row bg-white w-100 p-0 position-relative">
          {/* Thumbnails Section */}
          <div className="d-flex flex-md-column mb-md-0">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onMouseOver={() => setHoveredThumbnail(index)}
                onMouseLeave={() => setHoveredThumbnail(null)}
                onMouseEnter={() => setMainImage(img)}
                alt={`Thumbnail ${index + 1}`}
                className="mb-1 img-thumbnail"
                style={{
                  width: '80px',
                  height: '80px',
                  cursor: 'pointer',
                  objectFit: 'contain',
                  borderColor: mainImage === img || hoveredThumbnail === index ? 'silver' : 'transparent',
                  transition: 'border-color 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Main Image Section */}
          <div className="border p-3 w-100 d-flex justify-content-center position-relative" style={{ height: '480px', overflow: 'hidden' }}>
            <img
              src={mainImage}
              alt="Main Product"
              className="img-fluid"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
              }}
            />

            {/* Like Icon */}
            <i
              className={`bi bi-heart${liked ? '-fill' : ''} position-absolute d-flex justify-content-center align-items-center`}
              style={{
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#f2f2f2', 
                border: '1px solid grey',  
                fontSize: '15px',
                color: liked ? 'red' : 'grey', 
                cursor: 'pointer',
              }}
              onClick={toggleLike}
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-3 d-flex justify-content-center align-items-center mx-5">
          <Link to='/checkout/cart' onClick={() => addToCart(product)} className="btn btn-primary me-2 w-50 p-2 text-center">
            <i className="bi bi-cart-plus me-2 fs-4"></i>
            <span className="fs-4">Add to Cart</span>
          </Link>
          <Link to={'/checkout/payment'} className="w-50 p-2 text-center btn btn-success">
            <i className="bi bi-bag-check fs-4 me-2"></i>
            <span className="fs-4">Buy Now</span>
          </Link>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="col-lg-7 col-md-6 col-12">
        <h2>{product.name}</h2>
        <h4 className="text-muted">
          {product.price}{' '}
          <small className="text-muted">
            <del>{product.originalPrice}</del>
          </small>{' '}
          <span className="badge bg-success">{product.discount}</span>
        </h4>
        <p className="mt-3">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
