const GalleryHero = () => {
  return (
    <div className="p-0 lg:py-[150px] lg:px-[100px]">
      <div className="bg-[url('/images/gallery-hero-bg.png')] bg-no-repeat bg-cover bg-center p-5 text-white flex flex-col justify-center items-center lg:rounded-3xl text-center w-full h-screen lg:h-[600px]">
        <h1 className="text-4xl lg:text-7xl font-bold">Gallery</h1>
        <p className="mt-3 lg:mt-10">
          This is our products and prices. Please select or screenshot any
          product you want and send to us on whatsapp, we will be available to
          accept your order immediately.
        </p>
      </div>
    </div>
  );
};

export default GalleryHero;
