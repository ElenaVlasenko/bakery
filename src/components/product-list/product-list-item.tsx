import { useAppSelector } from '../../hooks/hooks';
import { selectFavorites } from '../../store/user-slice';
import { ProductListItem } from '../../types';
import cn from 'classnames';

type Props = ProductListItem;

function ProductOfAListItem({ title, previewImage, id }: Props): JSX.Element {
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = favorites.some((product) => product.id === id);

  return (
    <li className="random-main__item">
      <div className="card-item">
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
                width={241}
                height={245}
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
        <a className="card-item__link" href="#">
          <h3 className="card-item__title">
            <span>{title}</span>
          </h3>
        </a>
      </div>
    </li>
  );
}

export default ProductOfAListItem;
