import { type FC } from 'react';

interface IPanelItems {
  name: string;
  id: string;
  iconName: string;
}
interface IIconPanelProps {
  panelItems: IPanelItems[];
  panelOnClick: () => void;
}
// TODO: Доделать
const IconPanel: FC<IIconPanelProps> = ({ panelItems, panelOnClick }) => {
  console.log(panelItems, panelOnClick);

  return <nav>13</nav>;
};

export default IconPanel;
