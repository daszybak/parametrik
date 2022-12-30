import { Flex, Modal, ModalProps } from '@mantine/core';
import Links from 'src/components/links/links.component';
import Logo from 'src/components/logo/logo.component';

interface MobileMenuProps extends ModalProps {}

const MobileMenu: React.FC<MobileMenuProps> = (props) => (
  <Modal {...props} fullScreen>
    <Flex direction="column" align="center" justify="center" gap="xl">
      <Logo />
      <Links onClick={props.onClose} />
    </Flex>
  </Modal>
);

export default MobileMenu;
