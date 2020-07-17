import React from 'react';
import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  PerfilIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <PerfilIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Howlertar</span>
        </Button>

      </Topside>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Kaio Wolf</strong>
          <span>@WolfKaio</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
}

export default MenuBar;