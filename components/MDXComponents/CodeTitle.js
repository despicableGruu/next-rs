import { BsFileEarmarkCodeFill } from "react-icons/bs";
import {
  SiCss3,
  SiPython,
  SiGnubash,
  SiHtml5,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
export default function CodeTitle({ title, lang }) {
  let Icon;
  switch (lang) {
    case "html":
      Icon = SiHtml5;
      break;
    case "css":
      Icon = SiCss3;
      break;
    case "js":
      Icon = IoLogoJavascript;
      break;
    case "bash":
      Icon = SiGnubash;
      break;
    case "py":
      Icon = SiPython;
      break;
    case "json":
      Icon = VscJson;
      break;
    default:
      Icon = BsFileEarmarkCodeFill;
      break;
  }
  return (
    <div className="bg-[#1f2937] rounded-tl-md rounded-tr-md p-3 text-gray-200 flex items-center justify-between  font-code !mt-4 overflow-x-scroll xs:overflow-auto border-b  border-b-gray-50/50">
      <div className="flex items-center gap-2">
        <Icon className="flex items-center w-4 h-4" />
        <p className="!my-0 font-[600] text-sm">{title}</p>
      </div>
    </div>
  );
}
