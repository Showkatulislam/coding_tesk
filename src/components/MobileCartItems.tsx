import Image from "next/image";
import img from '../../public/images/t-shirt1.png'
const MobileCartItems = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-6">
      <Image src={img} width={150} height={150} alt="card-image" />
      <div>
        <p className="text-2xl text-zinc-700">Jerseys</p>
      </div>
    </div>
  );
};

export default MobileCartItems;
