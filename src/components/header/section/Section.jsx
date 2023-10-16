import { Link } from "react-router-dom";

export default function Section({ path, tittle }) {
  return (
    <li className="px-10">
      <Link to={path}>{tittle}</Link>
    </li>
  );
}
