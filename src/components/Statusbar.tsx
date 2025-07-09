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

    function handleTabChange(key: string) {
      if (key === "All Orders") console.log("Opening All Orders...");
      else if (key === "Pending") console.log("Opening Pending...");
      else if (key === "Reviewed") console.log("Opening Reviewed...");
      else if (key === "Arrived") console.log("Opening Arrived...");
    }

    return (
      <div
        className="h-[48px] sticky bottom-0 px-[32px] flex items-end"
        style={{ backgroundColor: COLORS.BG_PRIMARY }}
      >
        {statuses.map(({ label, key }) => (
          <button
            key={key}
            className="h-[44px] px-[16px] font-medium flex items-center text-base leading-[24px] cursor-pointer"
            style={activeStatus === key ? activeStyle : inactiveStyle}
            onClick={() => {
              setActiveStatus(key);
              handleTabChange(key);
            }}
          >
            {label}
          </button>
        ))}

        <button
          className="h-[44px] px-[8px] flex items-center cursor-pointer"
          onClick={() => console.log("Add new sheet...")}
        >
          <img src={AddIcon} />
        </button>
      </div>
    );
}

export default Statusbar;