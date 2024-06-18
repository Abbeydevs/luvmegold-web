import CollectionFeature from "@/components/collection-feature";
import Features from "@/components/features";
import GalleryHero from "@/components/gallery-hero";
import ProductShowcase from "@/components/prod-showcase";
import Products from "@/components/products";

const Gallery = () => {
  return (
    <div>
      <GalleryHero />
      <Features />
      <Products />
      <ProductShowcase />
      <CollectionFeature />
    </div>
  );
};

export default Gallery;
