import PanelIcon from "../assets/Panel.svg";
import Chevron from "../assets/Chevron.svg";
import ViewMore from "../assets/ViewMoreIcon.svg";
import SearchIcon from "../assets/search2.svg";
import Alert from "../assets/Alert.svg";
import Profile from "../assets/profile.png";
import COLORS from "../constants/colors";

const Topbar = () => {
  return (
    <div
      className="w-full sticky top-0 h-[56px] bg-white flex justify-between px-[16px] items-center"
      style={{ borderBottom: `1px solid ${COLORS.BORDER_TERTIARY}` }}
    >
      <div className="flex gap-x-[16px] items-center">
        <div>
          <img src={PanelIcon} alt="Sheet Icon" width={24} height={24} />
        </div>
        <div className="flex items-center gap-x-[4px]">
          <div className="flex items-center gap-x-[4px]">
            <p
              className="text-sm leading-5 font-medium"
              style={{ color: `${COLORS.TEXT_DISABLED_PRIMARY}` }}
            >
              Workspace
            </p>
            <img src={Chevron} alt="arrow Icon" width={12} height={12} />
          </div>
          <div className="flex items-center gap-x-[4px]">
            <p
              className="text-sm leading-5 font-medium"
              style={{ color: `${COLORS.TEXT_DISABLED_PRIMARY}` }}
            >
              Folder 2
            </p>
            <img src={Chevron} alt="arrow Icon" width={12} height={12} />
          </div>
          <div className="flex items-center gap-x-[8px]">
            <p
              className="text-sm leading-5 font-medium"
              style={{ color: `${COLORS.TEXT_PRIMARY}` }}
            >
              Spreadsheet 3
            </p>
            <img src={ViewMore} alt="View more Icon" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[4px]">
        <div
          className="flex p-[12px] rounded-md gap-[8px]"
          style={{ backgroundColor: COLORS.BG_SECONDARY }}
        >
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="text-xs leading-[16px] bg-transparent outline-none placeholder:text-[COLORS.TEXT_TERTIARY] w-[117px]"
            style={{
              color: COLORS.TEXT_TERTIARY,
            }}
          />
        </div>

        <div className="items-center justify-center p-[8px] relative">
          <img src={Alert} alt="Alert Icon" />
          {/* notification dot with number */}
          <div
            className="absolute h-[18px] w-[18px] rounded-full border border-white left-[22px] top-[2px] flex items-center justify-center"
            style={{ backgroundColor: COLORS.BG_BRAND }}
          >
            <span className="text-[10px] font-medium text-white">2</span>
          </div>
        </div>
        <div className="flex items-center gap-[8px] pl-[8px] pr-[12px]">
          <div>
            <img src={Profile} alt="Profile picture" />
          </div>
          <div>
            <p
              className="text-xs leading-[16px]"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              John Doe
            </p>
            <p
              className="text-[10px] leading-[12px]"
              style={{ color: COLORS.TEXT_TERTIARY }}
            >
              john.doe...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
