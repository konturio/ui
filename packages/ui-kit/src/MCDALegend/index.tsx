import { Heading } from '../Heading';
import { Text } from '../Text';
import s from './style.module.css';

export function MCDALegend({
  title,
  subtitle,
  fromValue = '0',
  toValue = '1',
  /** Generated in www.joshwcomeau.com/gradient-generator (HCL) */
  colors = [
    'hsl(140deg 47% 64%)',
    'hsl(117deg 44% 71%)',
    'hsl(95deg 50% 72%)',
    'hsl(78deg 55% 74%)',
    'hsl(62deg 60% 77%)',
    'hsl(50deg 91% 83%)',
    'hsl(38deg 96% 79%)',
    'hsl(30deg 98% 76%)',
    'hsl(21deg 97% 74%)',
    'hsl(12deg 93% 73%)',
    'hsl(0deg 83% 72%)',
  ],
  steps = 10,
}: {
  title?: string;
  subtitle?: string;
  fromValue?: string;
  toValue?: string;
  colors?: string[];
  steps?: number;
}) {
  return (
    <div className={s.mcdaLegend}>
      {title && (
        <Heading type="heading-05" margins={false}>
          {title}
        </Heading>
      )}
      {subtitle && (
        <Text type="caption" className={s.subtitle}>
          {subtitle}
        </Text>
      )}
      <div>
        <div
          className={s.ruler}
          style={{
            backgroundImage: `linear-gradient(90deg, ${colors.join(',')})`,
          }}
        >
          {Array.from(Array(steps + 1)).map((_, i) => (
            <div className={s.division} key={`l-${i}`}></div>
          ))}
        </div>
        <div className={s.signatures}>
          <Text type="caption">{fromValue}</Text>
          <Text type="caption">{toValue}</Text>
        </div>
      </div>
    </div>
  );
}
