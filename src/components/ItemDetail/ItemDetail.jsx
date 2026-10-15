import { Item } from "../Item/Item";

export const ItemDetail = ({ item }) => {
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button className="btn">Agregar al carrito</button>
      </Item>
    </div>
  );
};
