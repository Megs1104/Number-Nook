import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/16/solid";

export default function NavBar() {
  return (
    <div className="w-full p-2">
      <Link to="/">
        <button>
          <HomeIcon className="w-6 h-6 text-white" />
        </button>
      </Link>
    </div>
  );
}
