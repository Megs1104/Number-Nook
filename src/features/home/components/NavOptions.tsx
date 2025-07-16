import { Link } from "react-router-dom";
import tensFrame from "../../../assets/tens-frame.png";
import numberLineToTen from "../../../assets/number-line-to-10.png";
import numberLineToTwenty from "../../../assets/number-line-to-20.png";

export default function NavOptions() {
  return (
    <div className="flex-1 flex-col text-center justify-center mt-5">
      <p className="mb-2 text-xl">Choose a manipulative</p>

      <div className="p-2">
        <Link to="/tens-frame">
          <button>
            <img
              src={tensFrame}
              alt="Tens Frame Preview"
              className="rounded w-100 object-contain"
            />
          </button>
        </Link>
      </div>
      <div className="p-2">
        <Link to="/number-line-to-ten">
          <button>
            <img
              src={numberLineToTen}
              alt="Number Line to 10 Preview"
              className="rounded w-100 object-contain"
            />
          </button>
        </Link>
      </div>

      <div className="p-2">
        <Link to="/number-line-to-twenty">
          <button>
            <img
              src={numberLineToTwenty}
              alt="Number Line to 20 Preview"
              className="rounded w-100 object-contain"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
