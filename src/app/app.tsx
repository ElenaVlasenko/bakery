import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import { AuthorizationStatus, PageRoute } from '../const';
import ConditionalRoute from '../conditional-route/conditional-route';
import { useAppSelector } from '../hooks/hooks';
import { selectAuthorizationStatus } from '../store/user-slice';
import RegistrationPage from '../pages/registration-page/registration-page';
import LoginPage from '../pages/login-page/login-page';
import CatalogPage from '../pages/catalog-page/catalog-page';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  function getInitializedAppRoutes() {
    return (
      <>
        <Route path={PageRoute.Main} element={<MainPage />} />
        <Route path={PageRoute.Catalog} element={<CatalogPage />} />
        <Route path={PageRoute.Registration} element={
          <ConditionalRoute
            condition={authorizationStatus === AuthorizationStatus.NoAuth}
            routOnFalse={PageRoute.Main}
          >
            <RegistrationPage />
          </ConditionalRoute>
        }
        />
        <Route path={PageRoute.Login} element={
          <ConditionalRoute
            condition={authorizationStatus === AuthorizationStatus.NoAuth}
            routOnFalse={PageRoute.Main}
          >
            <LoginPage />
          </ConditionalRoute>
        }
        />
      </>
    );
  }

  return (
    <>
      {/* <ErrorMessage /> */}
      <BrowserRouter>
        <Routes>
          {getInitializedAppRoutes()}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
