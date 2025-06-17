import { Link } from "react-router-dom";

export default function NavOptions() {
  return (
    <Link to="/tens-frame">
      <button className="bg-white rounded p-2">Tens Frame</button>
    </Link>
  );
}
