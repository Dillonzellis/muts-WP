import Container from '../Container';
import NavLink from './NavLink';

const MainNav = () => {
  return (
    <div className='bg-brandingBlue-400 py-4'>
      <Container>
        <nav>
          <ul className='flex justify-center gap-24'>
            <NavLink navLinkText='home' />
            <NavLink navLinkText='accounts' />
            <NavLink navLinkText='borrow' />
            <NavLink navLinkText='solutions' />
            <NavLink navLinkText='about us' />
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MainNav;
