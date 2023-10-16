import Section from "../section/Section";

export default function Menu() {
  return (
    <nav className="grid place-items-center my-3">
      <ul className="text-xl font-bold grid grid-cols-3 grid-flow-dense gap-3 sm:grid-row-3">
        <Section path="/" tittle="Home" />
        <Section path="/tasks" tittle="Tasks" />
        <Section path="/about" tittle="About" />
      </ul>
    </nav>
  );
}
