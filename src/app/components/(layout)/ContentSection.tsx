interface ChildrenProp {
  children?: React.ReactNode;
}

const ContentSection = ({ children }: ChildrenProp) => {
  return <section className='py-12'>{children}</section>;
};

export default ContentSection;
