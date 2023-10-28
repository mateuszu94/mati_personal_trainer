import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href="/">
            <div className="h-20 w-20 rounded-xl ml-10 hover:scale-110 cursor-pointer transition duration-300 ">
              <div>
                <Image
                  width={80}
                  height={80}
                  src="/Logo.png"
                  alt="logo"
                  className="rounded-xl  "
                />{" "}
              </div>
            </div>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="bg-white rounded-full">
          <p>powrót do strony głownej</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
