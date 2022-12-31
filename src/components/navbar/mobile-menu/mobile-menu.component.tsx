import { Flex, Modal, ModalProps } from '@mantine/core';
import { MouseEventHandler } from 'react';
import Links from 'src/components/links/links.component';
import Logo from 'src/components/logo/logo.component';

interface MobileMenuProps extends ModalProps {}

const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { onClick } = props;

  return (
    <Modal {...props} fullScreen>
      <Flex direction="column" align="center" justify="center" gap="xl">
        <Logo onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>} />
        <Links onClick={onClick as unknown as MouseEventHandler<HTMLAnchorElement>} />
      </Flex>
    </Modal>
  );
};

export default MobileMenu;
