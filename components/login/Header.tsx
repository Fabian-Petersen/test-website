type HeaderProps = { label: String };

const Header = ({ label }: HeaderProps) => {
  return (
    <div>
      <p className="w-full text-2xl text-white text-center">{label}</p>
    </div>
  );
};

export default Header;
