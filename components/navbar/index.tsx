import { FC } from 'react';

import { Container, Logo, Avatar } from './navbar.styles';

const Navbar: FC = () => (
  <Container>
    <Logo src="./DooMe.svg" alt="logo doome" />
    <Avatar>JT</Avatar>
  </Container>
);

export default Navbar;
