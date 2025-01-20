export default function ProductCard({ image, title, price, oldPrice, rating }: any) {
    return (
      <div className="border rounded p-4 shadow-md text-center">
        <img src={image} alt={title} className="h-40 mx-auto" />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <div className="text-sm text-gray-500">⭐ {rating} / 5</div>
        <div className="mt-2">
          <span className="font-bold text-lg">${price}</span>
          {oldPrice && <span className="line-through ml-2 text-gray-500">${oldPrice}</span>}
        </div>
      </div>
    );
  }
  