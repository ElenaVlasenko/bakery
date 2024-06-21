import { FormEvent, useState } from 'react';
import { loginAction } from '../../store/user-slice';
import { useAppDispatch } from '../../hooks/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { PageRoute } from '../../const';
import cn from 'classnames';

function isPasswordValid(password: string): boolean {
  return /[A-z]+/.test(password) && /\d+/.test(password);
}
function isEmailValid(email: string): boolean {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function LoginPage(): JSX.Element {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isFormDataValid = isPasswordValid(password) && isEmailValid(email);
  const errors = [
    ...(!isPasswordValid(password) ? ['Password must includes at least one digit and one letter.'] : []),
    ...(!isEmailValid(email) ? ['Please enter a valid email address.'] : []),
  ];

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    if (isFormDataValid) {
      dispatch(loginAction({ password, email }));
      navigate(PageRoute.Main);
    }
  }

  return (
    <div className="wrapper">
      <main>
        <section className="login-page">
          <div className="login-page__header">
            <div className="login-page__img-wrap">
              <img
                className="login-page__img"
                src="img/svg/hero-keks.svg"
                width={727}
                height={569}
                alt="Картика кота."
              />
            </div>
          </div>
          <div className="login-page__content">
            <div className="login-page__inner">
              <h1 className="login-page__title">Вход</h1>
              <div className="login-page__form">
                <form action="#" onSubmit={handleSubmit} autoComplete="off">
                  <div className="login-page__fields">
                    <div className={cn('custom-input', 'login-page__field', isEmailValid(email) ? 'is-valid' : 'is-invalid')}>
                      <label>
                        <span className="custom-input__label">
                          Введите вашу почту
                        </span>
                        <input
                          onChange={(evt) => setEmail(evt.currentTarget.value)}
                          type="email"
                          name="user-mail-1"
                          placeholder="Почта"
                          required
                        />
                      </label>
                    </div>
                    <div className={cn('custom-input', 'login-page__field', isPasswordValid(password) ? 'is-valid' : 'is-invalid')}>
                      <label>
                        <span className="custom-input__label">
                          Введите ваш пароль
                        </span>
                        <input
                          onChange={(evt) => setPassword(evt.currentTarget.value)}
                          type="password"
                          name="user-password-1"
                          placeholder="Пароль"
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div style={{ height: '150px' }}>{errors.length > 0 ? errors.join(' ') : null}</div>
                  <button className="btn login-page__btn btn--large" disabled={!isFormDataValid} type="submit">
                    Войти
                  </button>
                </form>
              </div>
              <p className="login-page__text-wrap">
                Ещё не зарегистрированы?
                <Link className="login-page__link" to={PageRoute.Registration}>
                  Создайте
                </Link>
                &nbsp;аккаунт прямо сейчас.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}

export default LoginPage;
