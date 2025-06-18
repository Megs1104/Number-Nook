import { Link } from "react-router-dom";
import tensFrame from "../../../assets/tens-frame.png";

export default function NavOptions() {
  return (
    <div className="flex flex-col text-center justify-center mt-5">
      <p className="mb-2 text-xl">Choose a manipulative</p>
      <Link to="/tens-frame">
        <button>
          <img
            src={tensFrame}
            alt="Tens Frame Preview"
            className="rounded w-64 object-contain"
          />
        </button>
      </Link>
    </div>
  );
}
