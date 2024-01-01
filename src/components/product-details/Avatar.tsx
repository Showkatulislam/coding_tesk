import Image from "next/image";

const Avatar = () => {
    return (
        <div className="w-['70px'] h-['70px'] rounded-full">
            <Image src='/images/person.png' alt="avatar" width={70} height={70}/>
        </div>
    );
};

export default Avatar;