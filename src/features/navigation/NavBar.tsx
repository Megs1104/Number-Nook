import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Link to="/">
      <button className="bg-white rounded p-2">Home</button>
    </Link>
  );
}
