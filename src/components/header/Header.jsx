import Menu from "./Menu/Menu";

export default function Header({ appTittle }) {
  return (
    <header className="grid grid-cols-2 mx-5">
      <h1 className="text-5xl py-4 font-bold text-blue-400">{appTittle}</h1>
      <Menu />
    </header>
  );
}
