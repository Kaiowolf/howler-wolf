import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Novidades"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title="Novidades"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Tha '"
                nickname="@thaismoli" />,
              <FollowSuggestion
                name="Diego Fernandes"
                nickname="@dieegosf" />,
              <FollowSuggestion
                name="Guilerme Rodz"
                nickname="@guilherme_rodz" />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;