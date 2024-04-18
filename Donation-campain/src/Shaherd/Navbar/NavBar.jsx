const NavBar = () => {
  return (
    <header className="p-4 dark:bg-gray-100 bg-base-100 shadow-lg dark:text-gray-800">
      <nav className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img src="../../../public/image/Logo.png" alt="" />
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 hover:bg-gray-100 rounded-2xl   active:text-red-500 focus:underline  dark:border-"
            >
              Home
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 focus:text-red-500 rounded-2xl hover:bg-gray-100  focus:underline -mb-1 dark:border-"
            >
              Donation
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 hover:bg-gray-100 rounded-2xl    focus:underline focus:text-red-500 dark:border- dark:text-violet-600 dark:border-violet-600"
            >
              Statistics
            </a>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
