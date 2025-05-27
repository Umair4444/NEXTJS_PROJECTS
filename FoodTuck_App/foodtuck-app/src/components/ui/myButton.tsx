const MyButton = (props: any) => {
    return (
      <div>
        <div className="flex items-center">
          <button
            className={`${props.bgColor || "bg-[#FF9F0D]"} ${
              props.textColor || "text-white"
            }    ${props.width || "w-fit"} text-[16px] ${
              props.rounded || "rounded-full"
            }  ${props.xpadding || "px-12"} ${props.ypadding || "py-4"} ${
              props.border || "0"
            } `}
            type={props.type ||"button"}
            onClick={props.onClick}
          >
            {props.title}
          </button>
        </div>
      </div>
    );
  };
  
  export default MyButton;
  