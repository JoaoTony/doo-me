import { FC } from 'react';

import {
  Container, CardSection, AddTaskMenu, AddTaskBtn,
} from './home.styles';
import Navbar from '../../components/navbar';

const Home: FC = () => (
  <Container>
    <Navbar />
    <CardSection>
      <AddTaskMenu>
        <AddTaskBtn />
        <AddTaskBtn />
        <AddTaskBtn />
      </AddTaskMenu>
    </CardSection>
  </Container>
);

export default Home;
