import { Link } from 'react-router-dom';
import { PageRoute } from '../../const';

function Logo(): JSX.Element {
  return (
    <span className="header__logo">
      <Link to={PageRoute.Main}>
        <img
          src="img/svg/logo.svg"
          width="{170}"
          height="{69}"
          alt="Кондитерская кекс"
        />
      </Link>
    </span>
  );
}

export default Logo;
