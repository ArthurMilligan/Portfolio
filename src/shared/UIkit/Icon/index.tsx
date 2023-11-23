import { type FC, Suspense, lazy, useMemo } from 'react';

interface IIconProps {
  name: 'profile' | 'folder';
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
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
      />
    </Suspense>
  );
};

export default Icon;
