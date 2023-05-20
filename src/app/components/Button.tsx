import { ArrowRightIcon } from '@heroicons/react/24/solid';

interface ButtonProps {
  btnText: string;
  textClass?: string;
}

const Button = ({ btnText, textClass }: ButtonProps) => {
  return (
    <div className='inline-flex items-center gap-1 border bg-brandingGreen-400 px-8 py-3 text-white'>
      <div className={textClass}>{btnText}</div>
      <div>
        <ArrowRightIcon className='h-5 w-5' />
      </div>
    </div>
  );
};

export default Button;
