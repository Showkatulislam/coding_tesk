import Image from "next/image";
import Avatar from "./Avatar";

const PersonInfo = () => {
  return (
      <div className="flex items-center lg:gap-x-10 justify-between  border-zinc-600">
        <div className="flex items-center gap-x-4">
          <Avatar />
          <div className="flex flex-col gap-y-4">
            <h2>Al-Amin Gallery</h2>
            <div className="flex items-center gap-x-2">
              <Image
                src="/public/images/Ellipse 2139.png"
                alt="avatar"
                width={7}
                height={7}
              />
              <p> Active 6 Hours ago</p>
            </div>
            <div className="flex items-center justify-between">
              <h3>Visit Store</h3>
              <div className="flex items-center">
                <Image
                  src="/images/chat.png"
                  alt="avatar"
                  width={12}
                  height={12}
                />
                <p>Chat</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3">
            <p>Seller Rating:</p>
            <span className="text-2xl  font-semibold text-black">95%</span>
          </div>
          <div className="flex items-center gap-x-3">
            <p>Seller Rating:</p>
            <span className="text-2xl  font-semibold text-black">95%</span>
          </div>
          <div className="flex items-center gap-x-3">
            <p>Seller Rating:</p>
            <span className="text-2xl  font-semibold text-black">95%</span>
          </div>
        </div>
      </div>
  );
};

export default PersonInfo;
