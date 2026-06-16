import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  return (
    <div className="home-container">
        <PageHeading title="Explore Eazy Stickers">
            Add a touch of creativity to your life from our collection of 
            high-quality stickers.
        </PageHeading>
        <ProductListings products={[]} />
    </div>
  );
}