export default function Header({ appTittle }) {
  return (
    <header>
      <h1 className="text-5xl py-4 font-bold text-blue-400">{appTittle}</h1>
    </header>
  );
}