import logo from "/images/black-logo.svg";

export default function Header() {
  return (
    <header className="p-4 mb-4 bg-white flex items-center">
      <figure className="w-24">
        <img src={logo} alt="Levity Logo" />
      </figure>
    </header>
  );
}
