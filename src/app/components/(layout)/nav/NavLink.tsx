import Link from "next/link";

interface NavLinkProps {
  text: string;
  link: string;
}

const NavLink = ({ text, link }: NavLinkProps) => {
  return (
    <li className="text-lg capitalize text-white">
      <Link className="p-4" href={`/${link}`}>
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
