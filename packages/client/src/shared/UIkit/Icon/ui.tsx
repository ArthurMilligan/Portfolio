import { type FC, Suspense, lazy, useMemo, type HTMLProps } from 'react';
import { useThemeContext } from '../ThemeContext';

export type TIconName =
  | 'profile'
  | 'folder'
  | 'star'
  | 'telegram'
  | 'github'
  | 'mail'
  | 'fire'
  | 'lamp'
  | 'computer'
  | 'mountains'
  | 'mountains2'
  | 'note'
  | 'back';

interface IIconProps extends Omit<HTMLProps<SVGSVGElement>, 'size'> {
  name: TIconName;
  size?: number | string;
  className?: string;
}

const Icon: FC<IIconProps> = ({ name, className, size = 66 }) => {
  const {
    theme: { name: themeName },
  } = useThemeContext();
  const SVGElem = useMemo(
    () =>
      lazy(
        async () =>
          import(`./icons/${themeName === 'old' ? 'old' : 'new'}/${name}.svg`),
      ),
    [name, themeName],
  );

  return (
    <Suspense
      fallback={<div style={{ width: size, height: size }}>Loading...</div>}
    >
      <SVGElem
        className={className}
        // viewBox='0 0 66 66'
        width={size}
        height={size}
      />
    </Suspense>
  );
};

export default Icon;
