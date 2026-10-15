import "./Item.css";

export const Item = ({ name, price, description, image, children }) => {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img className="product-image" src={image} alt={description || name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        {children}
      </div>
    </article>
  );
};
