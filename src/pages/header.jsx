import Logo from "../assets/logo-header.svg?react";
export const Header = () => {
  return (
    <>
      <header className="container justify-between items-center py-4 gap-15 pt-15">
        <div className="flex justify-between items-center">
          <div>
            <Logo width={219} height={56} />
          </div>

          <nav className="flex gap-10 font-[400] text-base leading-[140%] text-black text-xl items-center">
            <ul className="flex  gap-10">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Use Cases</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
            <button className="border rounded-[14px] p-4  w-56 h-16">
              Request a quote
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
