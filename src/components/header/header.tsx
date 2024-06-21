import { Link, useNavigate } from 'react-router-dom';
import { PageRoute } from '../../const';
import Logo from '../logo/logo';
import { logoutAction, selectUser } from '../../store/user-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { User } from '../../types';

type Props = User

function UserHeader({ avatarUrl, email }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logoutAction());
  };

  return (
    <header className="header header--authorized">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <div className="header__user-info-wrap">
            <div className="header__user-info">
              <div className="header__user-avatar">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={avatarUrl}
                  />
                  <img
                    src={avatarUrl}
                    srcSet={avatarUrl}
                    width={62}
                    height={62}
                    alt="Аватар пользователя."
                  />
                </picture>
              </div>
              <p className="header__user-mail">{email}</p>
            </div>
          </div>
          <div className="header__buttons">
            <Link className="header__favourite" to="">
              <span className="header__favourite-icon">
                <svg width={33} height={29} aria-hidden="true">
                  <use xlinkHref="#icon-favourite" />
                </svg>
              </span>
              <span className="header__favourite-number">2</span>
              <span className="visually-hidden">Избранное</span>
            </Link>
            <div className="header__buttons-authorized">
              <div className="header__btn" onClick={handleClick}>
                <Link className="btn btn--second" to="">Выйти</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function UnauthorizedHeader(): JSX.Element {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(PageRoute.Login);
  };
  const handleRegistrationClick = () => {
    navigate(PageRoute.Registration);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <div className="header__buttons">
            <div className="header__btn" onClick={handleRegistrationClick}>
              <Link
                className="btn btn--third header__link header__link--reg"
                to=""
              >
                Регистрация
              </Link>
            </div>
            <div className="header__btn" onClick={handleLoginClick}>
              <Link className="btn" to="">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Header() {
  const user = useAppSelector(selectUser);

  return (
    user ? <UserHeader {...user} /> : <UnauthorizedHeader />
  );
}

export default Header;
