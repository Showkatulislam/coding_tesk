import { ChevronDown } from "lucide-react";

const SubNav = () => {
  return (
    <div
      className="
        max-w-7xl
        w-full
        mx-auto
        flex
        justify-between
        "
    >
      <div
        className="
           flex
           items-center
           space-x-9
           "
      >
        <div
          className="
                flex
                items-center
                "
        >
          <p className="text-xs text-zinc-900">language </p>
          <ChevronDown className="ml-1 text-xs" />
        </div>
        <div>
          <p className="text-xs text-zinc-900">Help</p>
        </div>
        <div>
          <p className="text-xs text-zinc-900">Helpline: 0964781656</p>
        </div>
      </div>
      <div
        className="
        flex
        items-center
        space-x-9
        "
      >
        <div>
          <p className="text-xs text-zinc-900">Become a Seller</p>
        </div>
        <div>
          <p className="text-xs text-zinc-900 font-normal">Order Track</p>
        </div>
        <div className="text-yellow-600">
          <a className="text-xs " href="">Sign Up</a>/
          <a className="text-xs " href="">Login</a>

        </div>
      </div>
    </div>
  );
};

export default SubNav;
