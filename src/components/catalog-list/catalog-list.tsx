import { ProductListItem } from '../../types';
import CatalogOfAListItem from './catalog-list-item';

type Props = {
  products: ProductListItem[];
}

function CatalogList({ products }: Props): JSX.Element {
  return (
    <ul className="catalog__list">
      {products.map((product) => <CatalogOfAListItem key={product.id} {...product} />)}
    </ul>
  );
}

export default CatalogList;
