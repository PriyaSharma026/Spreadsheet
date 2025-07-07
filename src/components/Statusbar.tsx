import COLORS from "../constants/colors";
import AddIcon from "../assets/plus.png";
import { useState } from "react";

const Statusbar = () => {
    const [activeStatus, setActiveStatus] = useState('All Orders');

    const statuses = [
        {label: "All Orders", key: "All Orders"},
        {label: "Pending", key: "Pending"},
        {label: "Reviewed", key: "Reviewed"},
        {label: "Arrived", key: "Arrived"},
    ]

    const activeStyle = {fontWeight: 600, backgroundColor: COLORS.BG_LIGHT_GREEN, color: COLORS.TEXT_ACTIVE, borderTop: `2px solid ${COLORS.TEXT_ACTIVE}`}

    const inactiveStyle = { color: COLORS.TEXT_TERTIARY };

    return (
      <div
        className="h-[48px] sticky bottom-0 px-[32px] flex items-end"
        style={{ backgroundColor: COLORS.BG_PRIMARY }}
      >
        {statuses.map(({ label, key }) => (
          <button
            key={key}
            className="h-[44px] px-[16px] font-medium flex items-center text-base leading-[24px]"
            style={activeStatus === key ? activeStyle : inactiveStyle}
            onClick={() => setActiveStatus(key)}
          >
            {label}
          </button>
        ))}
        
        <button
          className="h-[44px] px-[8px] flex items-center"
          style={{ color: COLORS.TEXT_TERTIARY }}
        >
          <img src={AddIcon} />
        </button>
      </div>
    );
}

export default Statusbar;