import { ProductListItem } from '../../types';
import ProductOfAListItem from './product-list-item';

type Props = {
  products: ProductListItem[];
}

function ProductList({ products }:Props): JSX.Element {
  return (
    <ul className="random-main__list">
      {products.map((product) => <ProductOfAListItem key={product.id} {...product}/>)}
      <li className="random-main__item">
        <a className="random-main__link" href="#">
          <div className="random-main__icon-wrapper">
            <div className="random-main__icon">
              <svg width={120} height={130} aria-hidden="true">
                <use xlinkHref="#icon-keks" />
              </svg>
            </div>
          </div>
          <h3 className="random-main__subtitle">Все кексы</h3>
        </a>
      </li>
    </ul>
  );
}

export default ProductList;
