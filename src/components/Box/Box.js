import PropTypes from 'prop-types';
import './Box.css';

function Box({ type, classNames = '', styles }) {
  return (
    <div className={`box ${type} ${classNames}`} style={styles}>
      Box
    </div>
  );
}

Box.propTypes = {
  type: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  classNames: PropTypes.string,
  styles: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
  }),
};

export default Box;
