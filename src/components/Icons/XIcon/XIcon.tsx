import React, { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

const XIcon: React.FC<Props> = ({
  width = "24",
  height = "24",
  color = "#FFF",
  ...restProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      {...restProps}
    >
      <path d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z" />
    </svg>
  );
};

export default XIcon;
