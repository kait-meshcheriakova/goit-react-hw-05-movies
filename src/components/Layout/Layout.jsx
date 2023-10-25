import { Outlet } from 'react-router-dom';
import { Container, Link, Header } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
export default Layout;
