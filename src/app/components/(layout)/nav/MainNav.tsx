import Container from '../Container';
import NavLink from './NavLink';
import { navItems } from './data/navItems';

const MainNav = () => {
  const navLinks = navItems.map((item, index) => {
    return <NavLink key={index} text={item.text} link={item.link} />;
  });

  return (
    <div className='bg-brandingBlue-400 py-4'>
      <Container>
        <nav>
          <ul className='flex justify-center gap-24'>{navLinks}</ul>
        </nav>
      </Container>
    </div>
  );
};

export default MainNav;
