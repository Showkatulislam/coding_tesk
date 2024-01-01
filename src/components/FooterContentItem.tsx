interface FooterContentItemProps{
    text:string
}
const FooterContentItem = ({text}:FooterContentItemProps) => {
    return (
        <div>
            <a href="" className="text-[#2E2E2E] text-xs">{text}</a>
        </div>
    );
};

export default FooterContentItem;