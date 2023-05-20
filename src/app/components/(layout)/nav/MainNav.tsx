import Container from '../Container';
import NavLink from './NavLink';

const MainNav = () => {
  return (
    <div className='bg-brandingBlue-400 py-4'>
      <Container>
        <nav>
          <ul className='flex justify-center gap-24'>
            <NavLink text='home' link='/' />
            <NavLink text='accounts' link='accounts' />
            <NavLink text='borrow' link='borrow' />
            <NavLink text='solutions' link='solutions' />
            <NavLink text='about us' link='about-us' />
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default MainNav;
