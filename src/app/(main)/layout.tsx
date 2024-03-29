import Navbar from "@/components/Navbar";

const layout = ({
    children,
}: {
  children: React.ReactNode
}
) => {
    return (
        <div className="w-full">
            <Navbar />
            {children}
        </div>
    );
};

export default layout;