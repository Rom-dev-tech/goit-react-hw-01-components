import PropTypes from 'prop-types';
import stl from '../Statistics/Statistics.module.scss';
import Container from '../../UI/Container/Container';
import s from '../../UI/Section/Section.module.scss';

const getRendomColor = () => '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.section}>
      <Container>
        {title && <h2 className={stl.title}>{title}</h2>}

        <ul className={stl.statsList}>
          {stats.map(item => (
            <li style={{ background: getRendomColor() }} className={stl.item} key={item.id}>
              <span className={stl.label}>{item.label}</span>
              <span className={stl.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
