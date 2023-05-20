import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface ButtonProps {
  btnText: string;
  textClass?: string;
  link: string;
}

const Button = ({ btnText, textClass, link }: ButtonProps) => {
  return (
    <div className='inline-flex cursor-pointer items-center gap-1 border bg-brandingGreen-400 px-8 py-3 text-white'>
      <div className={textClass}>
        <a href={link}>{btnText}</a>
      </div>
      <div>
        <ArrowRightIcon className='h-5 w-5' />
      </div>
    </div>
  );
};

export default Button;
