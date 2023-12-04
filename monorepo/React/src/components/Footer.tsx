import logo from '../assets/logo/logo-final.svg'

const Footer = () => {
  return (
    <footer className="flex w-full justify-center p-4 min-h-[3rem] border border-b-[1px] border-grey-100 shadow-sm">
      <div className="flex items-center gap-2">
        <span className='text-xl'>Powered By</span>
        <img className='h-8 w-auto' src={logo} alt='logo' />
      </div>
    </footer>
  );
};

export default Footer;
