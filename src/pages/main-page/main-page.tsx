import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import CityMap from '../../components/city-map/city-map';
import ProductList from '../../components/product-list/product-list';
import { useAppSelector } from '../../hooks/hooks';
import { selectRandomProducts } from '../../store/products-slice';

function MainPage(): JSX.Element {
  const products = useAppSelector(selectRandomProducts);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="hero">
          <div className="container">
            <div className="hero__img-wrapper">
              <img
                className="hero__img"
                src="img/svg/hero-keks.svg"
                width={727}
                height={569}
                alt="Картика кота."
              />
            </div>
            <div className="hero__wrapper">
              <p className="hero__subtitle">Твоя пушистая кондитерская</p>
              <p className="hero__title">КЕКС</p>
              <div className="hero__button-wrapper">
                <a className="btn" href="catalog-page.html">
                  Скорее смотреть
                </a>
              </div>
            </div>
          </div>
        </div>
        <section className="random-main">
          <div className="container">
            <h2 className="random-main__title">кексы</h2>
            <ProductList products={products}/>
          </div>
        </section>
        <section className="last-review">
          <div className="container">
            <h2 className="last-review__title">последний отзыв</h2>
            <div className="review">
              <div className="review__inner-wrapper review__inner-wrapper--border">
                <time className="review__date" dateTime="2023-05-15">
                  15.05
                </time>
                <span className="review__author">Уважаемый(-ая) Кот</span>
                <div className="star-rating">
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                  <svg
                    className="star-rating__star star-rating__star--active"
                    width={30}
                    height={30}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-star" />
                  </svg>
                </div>
                <div className="review__text-wrapper">
                  <p className="review__text">
                    &quot;Отличный сервис! Очень вкусный, сочный и&nbsp;яркий торт. Удобная
                    коробка для транспортировки. Свежие фрукты и&nbsp;съедобный
                    дизайн.
                  </p>
                  <p className="review__text">
                    Недостатков нет, обязательно будем заказывать и&nbsp;приходить
                    в&nbsp;Кексик
                  </p>
                </div>
                <div className="review__image-wrapper">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="img/content/review-1.webp, img/content/review-1@2x.webp 2x"
                    />
                    <img
                      src="img/content/review-1.jpg"
                      srcSet="img/content/review-1@2x.jpg 2x"
                      width={162}
                      height={162}
                      alt="Кот"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <div className="container">
            <h2 className="map__title">адреса</h2>
            <div className="map__wrapper">
              <CityMap selectedPointId={1} />
            </div>
            <ul className="map__addresses">
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input
                    type="radio"
                    defaultValue="user-agreement-10"
                    id="user-agreement-id-10"
                    name="user-agreement"
                  />
                  <label
                    className="custom-toggle__label"
                    htmlFor="user-agreement-id-10"
                  >
                    Кондитерская 1
                  </label>
                  <address className="custom-toggle__address">
                    Морской пр. 2А
                    <svg
                      className="custom-toggle__icon"
                      width={26}
                      height={24}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-keks-footprint" />
                    </svg>
                  </address>
                </div>
              </li>
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input
                    type="radio"
                    defaultValue="user-agreement-12"
                    id="user-agreement-id-12"
                    name="user-agreement"
                    defaultChecked={undefined}
                  />
                  <label
                    className="custom-toggle__label"
                    htmlFor="user-agreement-id-12"
                  >
                    Кондитерская 2
                  </label>
                  <address className="custom-toggle__address">
                    Морской пр. 2А
                    <svg
                      className="custom-toggle__icon"
                      width={26}
                      height={24}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-keks-footprint" />
                    </svg>
                  </address>
                </div>
              </li>
              <li className="map__address">
                <div className="custom-toggle custom-toggle--radio custom-toggle--address">
                  <input
                    type="radio"
                    defaultValue="user-agreement-13"
                    id="user-agreement-id-13"
                    name="user-agreement"
                  />
                  <label
                    className="custom-toggle__label"
                    htmlFor="user-agreement-id-13"
                  >
                    Производство
                  </label>
                  <address className="custom-toggle__address">
                    Морской пр. 2А
                    <svg
                      className="custom-toggle__icon"
                      width={26}
                      height={24}
                      aria-hidden="true"
                    >
                      <use xlinkHref="#icon-keks-footprint" />
                    </svg>
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
