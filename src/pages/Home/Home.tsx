import { DesktopIcon, WindowModal, Icon, PanelButton, Text } from '@ui';
import { type FC } from 'react';

const Home: FC = () => (
  <div style={{ position: 'relative' }}>
    <Text>PanelButton</Text>
    <PanelButton type='close' name='close' />
    <Icon name='folder' size={66} />
    <Text>DesktopIcon</Text>
    <DesktopIcon icon='folder' name='L*120qwraFawf' />
    <WindowModal name='Project' />
  </div>
);

export default Home;
