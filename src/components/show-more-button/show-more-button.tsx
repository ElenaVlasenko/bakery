import { useAppDispatch } from '../../hooks/hooks';
import { increaseDisplayedProductsNumber } from '../../store/products-slice';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(increaseDisplayedProductsNumber());
  }
  return (
    <button onClick={handleClick} className="btn btn--second" type="button">
      Показать еще
    </button>
  );
}

export default ShowMoreButton;
