import { FC } from 'react';

import Card from '../../components/card';
import { fakeDataHome } from './home.fake-data';

import {
  Container,
  CardSection,
  AddTaskMenu,
  AddTaskBtn,
  Content,
} from './home.styles';
import Navbar from '../../components/navbar';

const Home: FC = () => (
  <Container>
    <Navbar />

    <Content>
      <AddTaskMenu>
        {[0, 1, 2].map((_, index) => <AddTaskBtn key={index.toString()} />)}
      </AddTaskMenu>

      <CardSection>
        {fakeDataHome.map((item) => (
          <Card
            key={item.id.toString()}
            title={item.title}
            description={item.description}
            date={item.date}
            relevance={item.relevance as any}
          />
        ))}
      </CardSection>
    </Content>
  </Container>
);

export default Home;
