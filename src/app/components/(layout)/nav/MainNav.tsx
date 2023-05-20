import Container from '../Container';
import NavLink from './NavLink';

const MainNav = () => {
  return (
    <div className='bg-brandingBlue-400 py-4'>
      <Container>
        <nav>
          <ul className='flex justify-center gap-16'>
            <NavLink />
            <NavLink />
            <NavLink />
            <NavLink />
            <NavLink />
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MainNav;
