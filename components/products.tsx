import ProductItem from "./product-item";

const Products = () => {
  return (
    <div className="p-5 py-20 lg:p-20 text-left">
      <h1 className="text-3xl font-bold">All Products</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProductItem
          image="/images/prod1.png"
          name="Gold Chain"
          price={200}
          description="This gold chain was made with the best gold in Dubai."
        />
        <ProductItem
          image="/images/prod2.png"
          name="Feminine Gold Chain"
          price={200}
          description="This gold chain was made with the best gold in Dubai."
        />
        <ProductItem
          image="/images/prod3.png"
          name="Gold ring"
          price={200}
          description="This gold chain was made with the best gold in Dubai."
        />
        <ProductItem
          image="/images/prod4.png"
          name="Silver Necklace"
          price={200}
          description="This gold chain was made with the best gold in Dubai."
        />
        <ProductItem
          image="/images/prod5.png"
          name="Gold Ring for couples"
          price={200}
          description="This gold chain was made with the best gold in Dubai."
        />
        <ProductItem
          image="/images/prod6.png"
          name="Gold shiny necklace"
          price={200}
          description="This gold chain was made with the best gold in Dubai."
        />
      </div>
    </div>
  );
};

export default Products;
