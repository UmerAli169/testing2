"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { listAddProducts } from "@/graphql/queries";
import { StarIcon } from "lucide-react";
import { StorageImage } from "@aws-amplify/ui-react-storage";
import { products as staticProducts } from "./data";
import { useRouter } from "next/navigation";
import CateryisFilter from "@/components/filter/cateryisFilter";

const client = generateClient();
const ITEMS_PER_PAGE = 9;

const ProductListing = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.graphql({ query: listAddProducts });
        console.log(result, "???");
        setProducts(result.data.listAddProducts.items || staticProducts);
      } catch (error) {
        return error;
      }
    };
    fetchProducts();
  }, []);

  const handleClick = (productId: string) => {
    console.log("Product clicked:", productId);
    router.push(`/productPage/?productId=${productId}`);
  };

  const renderRatingStars = (rating: number) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-4 w-4 ${
            index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className="ABeeZee text-gray-600 ml-1">{rating}</span>
    </div>
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="ABeeZee text-gray-500">Home</span>
          <img
            src="/svgs/productTopBar/replaceOFSlash.svg"
            alt="Close"
            className="w-[6px]"
          />
          <span className="ABeeZee">Casual</span>
        </div>
      </div>
      <div className="flex min-h-screen bg-gray-50">
        <CateryisFilter />

        <div className="flex-1 p-6 ">
          <div className="flex justify-end mb-4">
            <span className="ABeeZee text-gray-500">
              Showing {startIndex + 1} to {Math.min(endIndex, products.length)}{" "}
              of {products.length} Products | Sort by: Most Popular
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 sm:grid-cols-2 mx-[20px] lg:mx-[100px] sm:mx-[20px] ">
            {paginatedProducts.map((product: any) => (
              <div
                key={product.id}
                className="relative max-w-[268px] max-height-[402px] rounded-lg p-4 m-2 transition-shadow duration-100 hover:shadow-lg font-ABeeZee"
                onClick={() => handleClick(product.id)}
              >
                <div
                  className="absolute top-2 right-2 z-10 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(product.id);
                  }}
                ></div>
                <div className="relative aspect-square bg-[#F0EEED] mb-4 border border-gray-500 rounded-lg">
                  <StorageImage
                    path={`public/${product.imageKeys?.[0]}`}
                    alt={product.productName}
                    className="w-full h-full object-cover rounded-md border-none  bg-[#F0EEED]"
                    accessLevel="guest"
                  />
                </div>
                <h3 className="ABeeZee lg:text-[20px] sm:text-[14px] text-[18px] text-gray-800 mb-2">
                  {product.productName}
                </h3>
                {(renderRatingStars(product.rating) &&
                  renderRatingStars(product.rating)) ||
                  "4.5/5"}

                {/* Display Discounted Price if Available */}
                {product.discountedPrice && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className=" ABeeZee  lg:text-[20px] sm:text-[14px] text-[18px]">
                      ${product.price}
                    </span>

                    <span className="line-through text-gray-500 lg:text-[20px] sm:text-[14px] text-[18px]">
                      ${product.price}
                    </span>
                    <span className=" bg-red-300/20 ABeeZee rounded-2xl p-1 lg:text-[20px] sm:text-[14px] text-[18px]">
                      -{product.discountedPrice.toFixed(2)}%
                    </span>
                  </div>
                )}

                {/* If No Discount, Display Normal Price */}
                {!product.discountedPrice && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="ABeeZee lg:text-[20px] sm:text-[14px] text-[18px]">
                      ${product.price}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full border-t border-gray-300 mt-12"></div>

          <div className="flex justify-between items-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border border-gray-500 ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white text-black"
              } inline-flex items-center gap-2`}
            >
              <img src="/svgs/catergious/arrowButton.svg" alt="Previous" />
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === pageNumber
                        ? "hover:bg-gray-600 border border-gray-500 hover:bg-gray-300"
                        : "bg-white text-gray"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border border-gray-500 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white text-black"
              } inline-flex items-center gap-2`}
            >
              Next
              <img src="/svgs/catergious/nextArrow.svg" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
