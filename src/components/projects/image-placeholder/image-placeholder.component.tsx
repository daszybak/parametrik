import { Flex } from '@mantine/core';
import { MdDisabledByDefault } from 'react-icons/md';

interface ImagePlaceholderProps {}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = () => (
  <Flex align="center" justify="center">
    <MdDisabledByDefault />
  </Flex>
);

export default ImagePlaceholder;
