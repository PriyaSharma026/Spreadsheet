import COLORS from "../constants/colors";
import linkIcon from "../assets/Link.svg";
import RefreshIcon from "../assets/Refresh.svg";
import ArrowSplitGray from "../assets/ArrowSplitGray.svg";
import ArrowSplit from "../assets/ArrowSplit.svg";
import ViewMoreIcon from "../assets/ViewMoreIcon.svg";
import AddIcon from "../assets/Add.svg";
import hashIcon from "../assets/hashIcon.svg";
import BriefCaseIcon from "../assets/Briefcase.png";
import GlobeIcon from "../assets/Globe.png";
import CalendarIcon from "../assets/Calendar.png";
import PersonIcon from "../assets/Person.png";
import DropdownIcon from "../assets/Dropdown.svg";
import ChevronCircleIcon from "../assets/ChevronCircle.png";
import Emoji from "../assets/Emoji.png";

const SpreadSheet = () => {
  const rowCount = 30;
  const columnCount = 10;

  const columnHeaders = [
    {
      title: "Job Request",
      icon: BriefCaseIcon,
    },
    {
      title: "Submitted",
      icon: CalendarIcon,
    },
    {
      title: "Status",
      icon: ChevronCircleIcon,
    },
    {
      title: "Submitter",
      icon: PersonIcon,
    },
    {
      title: "URL",
      icon: GlobeIcon,
    },
  ]

  return (
    <div
      className="grid gap-[1px] overflow-auto"
      style={{
        gridTemplateColumns: "32px 256px repeat(9, 124px)",
        backgroundColor: COLORS.BG_SECONDARY,
      }}
    >
      {/* Title row */}
      <div className="h-[32px] bg-white"></div>

      <div
        style={{ gridColumn: "span 4", backgroundColor: COLORS.BG_TRUEGREY }}
        className="flex h-[32px] items-center px-[8px] py-[8px]"
      >
        <div
          className="flex items-center rounded-sm px-[4px] gap-[4px] py-[4px] mr-[8px]"
          style={{ backgroundColor: COLORS.BG_TERTIARY }}
        >
          <img src={linkIcon} alt="Link Icon" />
          <p
            className="text-xs leading-[16px]"
            style={{ color: COLORS.TEXT_SECONDARY }}
          >
            Q3 Financial Overview
          </p>
        </div>
        <img src={RefreshIcon} alt="Refresh icon" />
      </div>
      <div className="h-[32px] bg-white"></div>
      <div
        style={{ gridColumn: "span 1", backgroundColor: COLORS.BG_GREEN }}
        className=" h-[32px] flex items-center justify-center gap-[4px]"
      >
        <img src={ArrowSplitGray} alt="split arrow icon" />
        <p
          className="text-sm leading-[20px] font-medium"
          style={{ color: COLORS.TEXT_GRAY_MEDIUM }}
        >
          ABC
        </p>
        <img src={ViewMoreIcon} alt="View more icon" />
      </div>
      <div
        style={{
          gridColumn: "span 2",
          backgroundColor: COLORS.BG_PURPLE,
        }}
        className=" h-[32px] flex items-center justify-center gap-[4px]"
      >
        <img src={ArrowSplit} alt="split arrow icon" />
        <p
          className="text-sm leading-[20px] font-medium"
          style={{ color: COLORS.TEXT_PURPLE_MEDIUM }}
        >
          Answer a question
        </p>
        <img src={ViewMoreIcon} alt="View more icon" />
      </div>
      <div
        style={{
          gridColumn: "span 1",
          backgroundColor: COLORS.BG_ORANGE,
        }}
        className=" h-[32px] flex items-center justify-center gap-[4px]"
      >
        <img src={ArrowSplit} alt="split arrow icon" />
        <p
          className="text-sm leading-[20px] font-medium"
          style={{ color: COLORS.TEXT_ORANGE_MEDIUM }}
        >
          Extract
        </p>
        <img src={ViewMoreIcon} alt="View more icon" />
      </div>
      <div
        style={{ gridColumn: "span 1", backgroundColor: COLORS.BG_TERTIARY }}
        className="h-[32px] flex items-center justify-center"
      >
        <img src={AddIcon} alt="Add Icon" />
      </div>

      {/* Column headers row */}
      <div
        className="h-[32px] flex justify-center items-center"
        style={{ backgroundColor: COLORS.BG_TERTIARY }}
      >
        <img src={hashIcon} alt="Hash Icon" />
      </div>

      {columnHeaders.map((item) => (
        <div
          className="flex pl-[8px] pr-[4px] items-center"
          style={{ backgroundColor: COLORS.BG_TERTIARY }}
        >
          <img src={item.icon} />
          <p
            className="ml-[4px] font-semibold text-xs mr-auto leading-[16px]"
            style={{ color: COLORS.TEXT_TERTIARY }}
          >
            {item.title}
          </p>
          <img src={DropdownIcon} alt="Dropdown Icon" />
        </div>
      ))}

      <div
        className="flex items-center pl-[8px] gap-[4px]"
        style={{ backgroundColor: COLORS.BG_LIGHT_GREEN }}
      >
        <img src={Emoji} alt="Emoji Icon" />
        <p
          className="font-semibold text-xs leading-[16px]"
          style={{ color: COLORS.TEXT_DARK_GREEN }}
        >
          Assigned
        </p>
      </div>

      {["Priority", "Due Date"].map((item) => (
        <div
          className="flex items-center pl-[8px]"
          style={{ backgroundColor: COLORS.BG_LIGHT_PURPLE }}
        >
          <p
            className="font-semibold text-xs leading-[16px]"
            style={{ color: COLORS.TEXT_DARK_PURPLE }}
          >
            {item}
          </p>
        </div>
      ))}

      <div
        className="flex items-center pl-[8px]"
        style={{ backgroundColor: COLORS.BG_LIGHT_ORANGE }}
      >
        <p
          className="font-semibold text-xs leading-[16px]"
          style={{ color: COLORS.TEXT_DARK_ORANGE }}
        >
          Est. Value
        </p>
      </div>
      <div style={{ backgroundColor: COLORS.BG_PRIMARY }}></div>
      {/* Spreadsheet rows */}
      {[...Array(rowCount)].map((_, rowIndex) => (
        <>
          <div
            className="h-[32px] flex justify-center items-center leading-[20px] text-sm"
            style={{
              color: COLORS.TEXT_TERTIARY,
              backgroundColor: COLORS.BG_PRIMARY,
            }}
          >
            {rowIndex + 1}
          </div>

          {[...Array(columnCount)].map((_, colIndex) => {
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="group border border-transparent focus-within:border-[#6C8B70] focus-within:shadow-[0_0_4px_-2px_rgba(10,110,61,0.6),0_0_12px_0px_rgba(10,110,61,0.22)] text-xs leading-[16px] flex items-center px-[8px] transition-colors duration-150"
                style={{
                  color: COLORS.TEXT_PRIMARY,
                  backgroundColor: COLORS.BG_PRIMARY,
                }}
              >
                <div
                  contentEditable
                  className="outline-none w-full"
                  suppressContentEditableWarning={true}
                ></div>
              </div>
            );})}
        </>
      ))}
    </div>
  );
};

export default SpreadSheet;
