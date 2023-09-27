import links from "./links";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-sm">
      <h1>Logo</h1>
      <ul className="flex items-center gap-4">
        {links.map((option, index) => (
          <li key={index}>
            <a
              href={option.link}
              className="text-black hover:text-[#C7AB62] hover:transition-colors"
            >
              {option.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
