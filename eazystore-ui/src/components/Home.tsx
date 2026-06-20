import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

// @ts-ignore: import of JS module without declaration file
import products from "../data/products";
export default function Home() {
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
        <PageHeading title="Explore Eazy Stickers">
            Add a touch of creativity to your life from our collection of 
            high-quality stickers.
        </PageHeading>
        <ProductListings products={products} />
    </div>
  );
}