import { Button } from "./ui/button";

const CollectionFeature = () => {
  return (
    <div className="bg-[url('/images/collection-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed text-white text-center p-5 py-20 lg:p-20">
      <h1 className="text-7xl font-bold mb-4">Explore the Collection</h1>
      <p>Discover the perfect gold piece to complement your style.</p>
      <Button variant="outline" className="text-white bg-transparent mt-10">
        Explore Collection
      </Button>
    </div>
  );
};

export default CollectionFeature;
