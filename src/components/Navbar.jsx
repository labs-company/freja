export default function Navbar({ navbarClassName, navbarClassNameList }) {
  const listOptionsNavbar = [
    { name: "Para mujer", href: "/#for-women" },
    { name: "Para hombre", href: "/#for-man" },
    { name: "Para regalar", href: "/#regalos" },
  ];
  return (
    <nav class={navbarClassName}>
      <h1>Logo</h1>
      <ul class={navbarClassNameList}>
        {listOptionsNavbar.map((option) => (
          <li>
            <a href={option.href}>{option.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
