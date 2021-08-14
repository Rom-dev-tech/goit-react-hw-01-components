import PropTypes from 'prop-types';
import Painting from '../Painting/Painting';
import s from '../PaintingList/PaintingList.module.css';

const PaintimgsList = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            author={item.author.url}
            profileUrl={item.author.tag}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
};

PaintimgsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default PaintimgsList;
