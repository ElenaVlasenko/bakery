import { useAppSelector } from '../../hooks/hooks';
import { selectFavorites } from '../../store/user-slice';
import { ProductListItem } from '../../types';
import cn from 'classnames';

type Props = ProductListItem;

function CatalogOfAListItem({ title, previewImage, id, price }: Props): JSX.Element {
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.some((product) => product.id === id);

  return (
    <li className="catalog__item">
      <div className="card-item card-item--big">
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source
                type="image/webp"
                srcSet={previewImage}
              />
              <img
                src={previewImage}
                srcSet={previewImage}
                width={326}
                height={332}
                alt={title}
              />
            </picture>
          </div>
          <span className="card-item__label">Новинка</span>
        </a>
        <button className={cn('card-item__favorites', { 'card-item__favorites--active': isFavorite })}>
          <span className="visually-hidden">Добавить в избранное</span>
          <svg width={51} height={41} aria-hidden="true">
            <use xlinkHref="#icon-like" />
          </svg>
        </button>
        <span className="card-item__price">{price} p</span>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </a>
      </div>
    </li>
  );
}

export default CatalogOfAListItem;
