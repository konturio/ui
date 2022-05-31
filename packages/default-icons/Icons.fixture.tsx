import * as icons from './src/figma-icons';
import s from './IconsStyle.module.css';

const sortedIconKeys = Object.keys(icons).sort();

export default {
  'figma-icons': (
    <div className={s.bg}>
      <div className={s.grid}>
        {sortedIconKeys.map((key, i) => (
          <div data-name={key} className={s.gridCell} key={i}>
            {icons[key].type({})}
          </div>
        ))}
      </div>
    </div>
  ),
};
