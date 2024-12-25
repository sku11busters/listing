import React from "react";

interface MainImage {
  url_75x75: string;
  url_170x135: string;
  url_570xN: string;
  url_fullxfull: string;
}

interface Item {
  listing_id: number;
  title: string;
  description: string;
  price: string;
  currency_code: string;
  quantity: number;
  tags: string[];
  url: string;
  MainImage?: MainImage;
  state?: string;
}

interface ListingProps {
  items: Item[];
}

const Listing: React.FC<ListingProps> = ({ items }) => {
  // console.log(items);
  const formatPrice = (price: string, currency: string) => {
    if (currency === "USD") return `$${parseFloat(price).toFixed(2)}`;
    if (currency === "EUR") return `€${parseFloat(price).toFixed(2)}`;
    if (currency === "GBP") return `£${parseFloat(price).toFixed(2)}`;
    return `${parseFloat(price).toFixed(2)} ${currency}`;
  };

  const getQuantityClass = (quantity: number): string => {
    if (quantity <= 10) return "level-low";
    if (quantity <= 20) return "level-medium";
    return "level-high";
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.listing_id}>
          {item.state !== "removed" && (
            <div className="item">
              <div className="item-image">
                <img src={item?.MainImage?.url_570xN} alt={item.title} />
              </div>
              <div className="item-details">
                <p className="item-title">{item.title}</p>
                <p className="item-price">
                  {formatPrice(item.price, item.currency_code)}
                </p>
                <p
                  className={`item-quantity ${getQuantityClass(item.quantity)}`}
                >
                  {item.quantity} left
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Listing;
