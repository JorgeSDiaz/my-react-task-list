import Section from "../section/Section";
import { InfoIcon, HamburgerIcon, CalendarIcon } from "@chakra-ui/icons";

export default function Menu() {
  return (
    <nav className="grid place-items-center my-3">
      <ul className="text-xl font-bold grid grid-cols-3 grid-flow-dense gap-3 sm:grid-row-3">
        <Section path="/" tittle="Home" icon={<HamburgerIcon />} />
        <Section path="/tasks" tittle="Tasks" icon={<CalendarIcon />} />
        <Section path="/about" tittle="About" icon={<InfoIcon />} />
      </ul>
    </nav>
  );
}
