import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { PageRoute } from '../../const';
import { signUpAction } from '../../store/user-slice';


function isPasswordValid(password: string): boolean {
  return /[A-z]+/.test(password) && /\d+/.test(password);
}
function isNameValid(name: string): boolean {
  return /[A-z]+/.test(name);
}
function isEmailValid(email: string): boolean {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function RegistrationPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isFormDataValid = isPasswordValid(password) && isEmailValid(email) && isNameValid(name);
  const errors = [
    ...(!isPasswordValid(password) ? ['Password must includes at least one digit and one letter.'] : []),
    ...(!isEmailValid(email) ? ['Please enter a valid email address.'] : []),
    ...(!isNameValid(name) ? ['Name must includes at least one letter.'] : []),
  ];

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();

    if (isFormDataValid) {
      dispatch(signUpAction({ name, password, email }));
      navigate(PageRoute.Main);
    }
  }

  return (
    <div className="wrapper">
      <main>
        <section className="register-page">
          <div className="register-page__header">
            <div className="register-page__img-wrap">
              <img
                className="register-page__img"
                src="img/svg/hero-keks.svg"
                width={727}
                height={569}
                alt="Картика кота."
              />
            </div>
          </div>
          <div className="register-page__content">
            <div className="register-page__inner">
              <h1 className="register-page__title">Регистрация</h1>
              <div className="register-page__form">
                <form onSubmit={handleSubmit} action="#" autoComplete="off">
                  <div className="register-page__fields">
                    <div className={cn('custom-input', 'register-page__field', isNameValid(name) ? 'is-valid' : 'is-invalid')}>
                      <label>
                        <span className="custom-input__label">
                          Введите ваше имя
                        </span>
                        <input
                          onChange={(evt) => setName(evt.currentTarget.value)}
                          type="text"
                          name="user-name-1"
                          placeholder="Имя"
                          required
                        />
                      </label>
                    </div>
                    <div className={cn('custom-input', 'register-page__field', isEmailValid(email) ? 'is-valid' : 'is-invalid')}>
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
                    <div className={cn('custom-input', 'register-page__field', isPasswordValid(password) ? 'is-valid' : 'is-invalid')}>
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
                    <div className="custom-input register-page__field">
                      <label>
                        <span className="custom-input__label">
                          Введите ваше имя
                        </span>
                        <input
                          type="file"
                          name="user-name-1"
                          data-text="Аватар"
                          accept="image/jpeg"
                        />
                      </label>
                    </div>
                  </div>
                  <div style={{ height: '150px' }}>{errors.length > 0 ? errors.join(' ') : null}</div>
                  <button disabled={!isFormDataValid}
                    className="btn register-page__btn btn--large"
                    type="submit"
                  >
                    Зарегистрироваться
                  </button>
                </form>
              </div>
              <p className="register-page__text-wrap">
                Уже зарегистрированы?
                <Link className="register-page__link" to={PageRoute.Login}>
                  Войдите
                </Link>&nbsp;
                в свой аккаунт.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>

  );
}

export default RegistrationPage;
