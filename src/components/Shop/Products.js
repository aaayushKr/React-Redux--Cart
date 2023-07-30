import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATE = [
  {
    id: "p1",
    price: 12,
    title: "title-1",
    description: "description-1",
  },
  {
    id: "p2",
    price: 22,
    title: "title-2",
    description: "description-2",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATE.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
