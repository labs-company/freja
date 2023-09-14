export default function Navbar({ navbarClassName, navbarClassNameList }) {
  const listOptionsNavbar = [
    { name: "Para mujer", href: "/#for-women" },
    { name: "Para hombre", href: "/#for-man" },
    { name: "Para regalar", href: "/#regalos" },
  ];
  return (
    <nav className={navbarClassName}>
      <h1>Logo</h1>
      <ul className={navbarClassNameList}>
        {listOptionsNavbar.map((option, index) => (
          <li key={index}>
            <a href={option.href} className="font-mooli">
              {option.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
