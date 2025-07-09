import COLORS from "../constants/colors";
import ChevronDouble from "../assets/ChevronDouble.svg";
import EyeIcon from "../assets/Eye.svg"
import AutoFitIcon from "../assets/ArrowAutofit.svg"
import SortIcon from "../assets/ArrowSort.svg"
import FilterIcon from "../assets/Filter.svg";
import ImportIcon from "../assets/ImportIcon.svg";
import ExportIcon from "../assets/ExportIcon.svg";
import Share from "../assets/Share.svg";
import ArrowSplit from "../assets/ArrowSplit.svg";
import Button from "./Button";

const Toolbar = () => {
    return (
      <div
        className="h-[48px] px-[8px] flex items-center justify-between sticky top-[56px] bg-white"
        style={{ borderBottom: `1px solid ${COLORS.BORDER_TERTIARY}` }}
      >
        <div className="flex items-center">
          <div className="flex items-center px-[8px] gap-[4px]">
            <p
              className="text-sm leading-[20px]"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              Tool bar
            </p>
            <img src={ChevronDouble} alt="arrow icon" />
          </div>
          <div
            className="h-[24px] w-[1px] mx-[8px]"
            style={{ backgroundColor: COLORS.BG_TERTIARY }}
          ></div>
          <button
            onClick={() => {
              console.log("Hide fields clicked!");
            }}
            className="flex items-center pl-[8px] pr-[12px] gap-[4px] mr-[4px] bg-transparent border-none cursor-pointer hover:bg-gray-100 hover:rounded-[8px] hover:py-2"
            style={{ color: COLORS.TEXT_PRIMARY }}
          >
            <img src={EyeIcon} alt="Eye icon" />
            <span className="text-sm leading-[20px]">Hide fields</span>
          </button>
          <button
            className="flex items-center pl-[8px] pr-[12px] gap-[4px] mr-[4px] bg-transparent border-none cursor-pointer hover:bg-gray-100 hover:rounded-[8px] hover:py-2"
            onClick={() => {
              console.log("Sorting the data...");
            }}
            style={{ color: COLORS.TEXT_PRIMARY }}
          >
            <img src={SortIcon} alt="Sort icon" />
            <span
              className="text-sm leading-[20px]"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              Sort
            </span>
          </button>
          <button
            className="flex items-center pl-[8px] pr-[12px] gap-[4px] mr-[4px] bg-transparent border-none cursor-pointer hover:bg-gray-100 hover:rounded-[8px] hover:py-2"
            onClick={() => {
              console.log("Filter clicked!");
            }}
          >
            <img src={FilterIcon} alt="Filter icon" />
            <span
              className="text-sm leading-[20px]"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              Filter
            </span>
          </button>
          <button
            className="flex items-center pl-[8px] pr-[12px] gap-[4px] bg-transparent border-none cursor-pointer hover:bg-gray-100 hover:rounded-[8px] hover:py-2"
            onClick={() => {
              console.log("Cell View pressed!");
            }}
          >
            <img src={AutoFitIcon} alt="Auto fit arrow icon" />
            <span
              className="text-sm leading-[20px] "
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              Cell View
            </span>
          </button>
        </div>
        <div className="flex items-center gap-[8px]">
          <Button
            Icon={ImportIcon}
            Title="Import"
            onClick={() => {
              console.log("Import button clicked!");
            }}
          />
          <Button
            Icon={ExportIcon}
            Title="Export"
            onClick={() => {
              console.log("Export button clicked!");
            }}
          />
          <Button
            Icon={Share}
            Title="Share"
            onClick={() => {
              console.log("Share button clicked!");
            }}
          />
          <button
            className="flex items-center justify-center px-[24px] py-[8px] gap-x-[4px] rounded-md text-sm font-medium leading-[20px] cursor-pointer"
            style={{
              backgroundColor: COLORS.BG_BRAND,
              color: COLORS.TEXT_WHITE,
            }}
            onClick={() => {
              console.log("New Action Clicked!");
            }}
          >
            <span>
              <img src={ArrowSplit} alt="Arrow split icon" />
            </span>
            New Action
          </button>
        </div>
      </div>
    );
}

export default Toolbar;