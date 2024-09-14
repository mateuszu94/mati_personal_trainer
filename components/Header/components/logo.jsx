import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({isScrolling}) => {

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href="/">
            <div className={` max-sm bg-slate-500 border border-black hover:shadow-md ${isScrolling ? "w-14 h-12" : "h-20 w-20"} shadow-white rounded-xl ml-2 hover:scale-110 cursor-pointer transition duration-300 `}>
              <div>
                <Image
                  width={80}
                  height={80}
                  src="/Logo.png"
                  alt="logo"
                  className="rounded-xl p-[3px]  "
                />{" "}
              </div>
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-white text-black rounded-full">
          <p>powrót do strony głownej</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
