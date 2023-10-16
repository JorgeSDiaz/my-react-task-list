export default function Section({ path, tittle }) {
  return (
    <li className="px-10">
      <a href={path}>{tittle}</a>
    </li>
  );
}
