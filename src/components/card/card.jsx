import { useLocalStorage } from "@uidotdev/usehooks";
import { FcLike, FcDislike } from "react-icons/fc";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [Favortites, setFavortites] = useLocalStorage("Favortites", []);

  const isFavortite = Favortites.includes(product.id);

  const handleLike = () => {
    setFavortites((prevFavortites) =>
      isFavortite
        ? prevFavortites.filter((fav) => fav !== product.id)
        : [...prevFavortites, product.id]
    );
  };

  return (
    <div className={styles.row}>
      <figure className={styles.Card}>
        <Link to={`/product/${product.id}`}>
          <img src={product.images} alt={product.name} />
        </Link>
        <figcaption>
          <h3>{product.name}</h3>
          {isFavortite ? (
            <FcDislike size={30} onClick={handleLike} />
          ) : (
            <FcLike size={30} onClick={handleLike} />
          )}
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
