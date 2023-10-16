import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Section({ path, tittle, icon }) {
  return (
    <li className="px-10">
      <Button leftIcon={icon} colorScheme="teal" variant="solid">
        <Link to={path}>{tittle}</Link>
      </Button>
    </li>
  );
}
