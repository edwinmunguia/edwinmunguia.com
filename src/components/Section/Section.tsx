import { PropsWithChildren } from "react";
import styles from "./Section.module.css";

type SectionType = "rounded" | "skewed" | "default";
type SectionWidth = "full" | "wrapped";

type Props = {
  className?: string;
  type?: SectionType;
  width?: SectionWidth;
};

const Section: React.FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
  type = "default",
  width = "full",
}) => {
  return (
    <section
      className={`${styles.container} ${
        type === "rounded"
          ? styles.rounded
          : type === "skewed"
          ? styles.skewed
          : ""
      }
      
      ${width === "wrapped" ? styles.wrapped : ""} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
