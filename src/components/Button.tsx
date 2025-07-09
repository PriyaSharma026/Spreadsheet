import COLORS from "../constants/colors";

type ButtonProps = {
    Icon: string,
    Title: string,
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({Icon, Title, onClick} ) => {
    return (
        <button className="flex py-[8px] pl-[8px] pr-[12px] rounded-md text-sm cursor-pointer hover:brightness-65" style={{border: `1px solid ${COLORS.BORDER_TERTIARY}`, color: COLORS.TEXT_SECONDARY}} onClick={onClick}><span className="pr-[4px]"><img src={Icon} alt={`${Title} Icon`} /></span>{Title}</button>
    );
}

export default Button;