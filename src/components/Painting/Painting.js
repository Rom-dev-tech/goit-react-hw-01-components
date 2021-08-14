import PropTypes from 'prop-types';
import s from './Painting.module.css';
import defaultImg from '../Painting/default.jpg';

const Painting = props => {
  const { imageUrl = defaultImg, title, author, profileUrl, price, quantity } = props;
  return (
    <div className={s.card}>
      <img src={imageUrl ?? defaultImg} alt={title} width="480" />
      <h2 className={s.title}>{title}</h2>
      <p className={s.descriptionAuthor}>
        Автор: <a href={author}>{profileUrl}</a>
      </p>
      <p className={s.descriptionPrice}>Цена: {price} кредитов</p>
      <p className={s.descriptionQuantity}>
        Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}
      </p>
      <button className={s.button} type="button">
        Добавить в корзину
      </button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
