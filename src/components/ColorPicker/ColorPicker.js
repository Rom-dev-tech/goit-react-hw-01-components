import PropTypes from 'prop-types';
import s from './ColorPicker.module.css';

function ColorPicker({ options }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div className={s.thumb}>
        {options.map(option => (
          <span
            key={option.label}
            className={s.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

ColorPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
};

export default ColorPicker;
