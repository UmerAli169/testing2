"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { generateClient } from "aws-amplify/api";
import { listAddProducts } from "@/graphql/queries";
import {
  setNewArrivals,
  setTopSelling,
} from "../../app/Redux/features/products/productsSlice";
import { StorageImage } from "@aws-amplify/ui-react-storage";

const ProductCard = ({ product, onClick, onDelete }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className="max-w-[296px] min-height-[444px] gap-1 cursor-pointer relative"
      onClick={() => onClick(product.id)} // Corrected onClick event
    >
      <div className="relative aspect-square bg-[#F0EEED] mb-4 rounded-2xl">
        <StorageImage
          path={`public/${product.imageKeys?.[0]}`}
          alt={product.productName}
          className="w-full h-full object-cover rounded-md mix-blend-multiply"
          accessLevel="guest"
        />
      </div>

      <h3 className="font-ABeeZee text-[18px] lg:text-[20px] sm:text-[16px] mb-2">
        {product.productName}
      </h3>

      <div className="flex ABeeZee items-center gap-2 mb-2">
        {product.discountedPrice ? (
          <>
            <span className="text-[22px] lg:text-[24px] sm:text-[20px] ABeeZee ">
              ${product.discountedPrice}
            </span>
            <span className="text-gray-400 lg:text-[24px] sm:text-[20px] line-through ABeeZee">
              ${product.price}
            </span>
            <p className="bg-red-300/20 ABeeZee rounded-2xl">
              {product.discountValue}%
            </p>
          </>
        ) : (
          <span className=" ABeeZee text-[22px] lg:text-[24px] sm:text-[20px]">
            ${product.price}
          </span>
        )}
      </div>
    </div>
  );
};

function NewArrivals() {
  const router = useRouter();
  const client = generateClient();
  const dispatch = useDispatch();
  const { newArrivals, topSelling } = useSelector(
    (state: any) => state.products
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await client.graphql({ query: listAddProducts });
        const products = result.data.listAddProducts.items;
        const newArrivalsData: any = products.filter(
          (product: any) => product.category === "newArrivals"
        );
        const topSellingData: any = products.filter(
          (product: any) => product.category === "topSelling"
        );

        dispatch(setNewArrivals(newArrivalsData.slice(0, 4)));
        dispatch(setTopSelling(topSellingData.slice(0, 4)));
        return products;
      } catch (error) {
        return;
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleClick = (productId: string) => {
    router.push(`/productPage/?productId=${productId}`);
  };

  return (
    <>
      <h2 className="flex justify-center text-[48px] py-[35px] w-full font-ABeeZee">
        New Arrivals
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-[20px] lg:mx-[100px] sm:mx-[20px] gap-6">
        {newArrivals.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleClick}
          />
        ))}
      </div>

      <h2 className="flex justify-center text-[48px] py-[35px] w-full font-ABeeZee">
        top selling
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-[20px] lg:mx-[100px] sm:mx-[20px] gap-6">
        {topSelling.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}

export default NewArrivals;
