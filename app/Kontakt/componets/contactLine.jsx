import { useToast } from "@/components/ui/use-toast";
import { BsFillClipboardCheckFill } from "react-icons/bs";

export const ContactLine = ({ icon, text, href }) => {
  const { toast } = useToast();

  const onCoppyClick = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopiowanie",
      description: "Text został skopiowany",
      variant: "success",
    });
  };

  return (
    <div className=" mr-[10%] ">
      <div className="flex flex-row">
        <a href={href} className="contact_info_smallButton">
          {icon}
        </a>

        <div
          onClick={() => onCoppyClick(text)}
          className="hover:text-green-600"
        >
          <BsFillClipboardCheckFill />
        </div>

        <a
          href={href}
          className="ml-5 pt-2 text-xl text-slate-500 hover:cursor-pointer font-serif hover:text-prime "
        >
          : {text}
        </a>
      </div>
    </div>
  );
};
