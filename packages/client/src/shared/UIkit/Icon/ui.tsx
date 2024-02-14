import { type FC, Suspense, lazy, useMemo, type HTMLProps } from 'react';

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
  | 'note';

interface IIconProps extends HTMLProps<SVGSVGElement> {
  name: TIconName;
  size?: number;
  className?: string;
}

const Icon: FC<IIconProps> = ({ name, className, size = 66 }) => {
  const SVGElem = useMemo(
    () => lazy(async () => import(`./icons/${name}.svg`)),
    [name],
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
