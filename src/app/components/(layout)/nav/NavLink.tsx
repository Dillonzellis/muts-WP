interface NavLinkProps {
  navLinkText: string;
}

const NavLink = ({ navLinkText }: NavLinkProps) => {
  return <li className='text-lg capitalize'>{navLinkText}</li>;
};

export default NavLink;
