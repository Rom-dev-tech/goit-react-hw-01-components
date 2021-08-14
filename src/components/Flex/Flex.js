import PropTypes from 'prop-types';
import s from '../Flex/Flex.module.css';

function Flex({ children }) {
  return <div className={s.flex}>{children}</div>;
}

Flex.propTypes = {
  children: PropTypes.node,
};

export default Flex;
