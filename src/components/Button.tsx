import COLORS from "../constants/colors";

type ButtonProps = {
    Icon: string,
    Title: string
}

const Button: React.FC<ButtonProps> = ({Icon, Title} ) => {
    return (
        <button className="flex py-[8px] pl-[8px] pr-[12px] rounded-md text-sm" style={{border: `1px solid ${COLORS.BORDER_TERTIARY}`, color: COLORS.TEXT_SECONDARY}}><span className="pr-[4px]"><img src={Icon} alt={`${Title} Icon`} /></span>{Title}</button>
    );
}

export default Button;