import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProduktDettails.module.css";
import PageHeader from "../../components/pageheader/PageHeader.jsx";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setproduct] = useState(null);

  const fetchproductById = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setproduct(data);
  };

  useEffect(() => {
    fetchproductById(id);
  }, [id]);

  return (
    <>
      {" "}
      {product && (
        <article>
          <PageHeader title={product.title} img={product.images} />

          <div className={styles.productContent}>
            <p className={styles.price}> ${product.price} </p>
            <p className={styles.shippingInformation}>{product.shippingInformation}</p>

            <div className={styles.productdescriptions}>
              {product.description}
            </div>

            <div className={styles.productreviews}>
              <h2>Reviews</h2>
              <ol>
                {product.reviews.map((reviews) => (
                  <div className={styles.reviews}>
                    <h3 key={0}>{reviews.rating}</h3>
                    <h4 key={1}>{reviews.comment}</h4>
                    <h5 key={2}>{reviews.reviewerName}</h5>
                  </div>
                ))}
              </ol>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default ProductDetails;
