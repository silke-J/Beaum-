import Button from "../components/button/Button";
import Card from "../components/card/card";
import PageHeader from "../components/pageheader/PageHeader";
import { useFetchproducts } from "../hoods/useFetchprodukts";
import img from "/Headerbilleder.jpg";
import buttonStyles from "../components/button/Button.module.css";
import { useState } from "react";

const Products = () => {
  const { products, lipsticks, Nail_polish } = useFetchproducts();

  const [filtered, setFiltered] = useState([
    ...lipsticks,
    ...Nail_polish,
  ]);

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = {
    All: products,
    lipsticks: lipsticks,
    Nail_polish: Nail_polish,
  };
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFiltered(filters[filter]);
  };

  const productArray = filtered?.length > 0 ? filtered : products;

  return (
    <section>
      <PageHeader img={img} title="Produkter"  />
      <div>
        <Button
          buttonText="All"
          onClick={() => handleFilterChange("All")}
          className={activeFilter === "All" ? `${buttonStyles.active}` : ""}
        />
        <Button
          buttonText="Lipsticks"
          onClick={() => handleFilterChange("lipsticks")}
          className={
            activeFilter === "lipsticks" ? `${buttonStyles.active}` : ""
          }
        />
        <Button
          buttonText="Nail polish"
          onClick={() => handleFilterChange("Nail_polish")}
          className={
            activeFilter === "Nail_polish" ? `${buttonStyles.active}` : ""
          }
        />
      </div>
      <div className="grid">
        {productArray?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};
export default Products;
