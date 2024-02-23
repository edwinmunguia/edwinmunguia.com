import { IconCollection } from "@/core/interfaces";
import JsIcon from "../Icons/JsIcon/JsIcon";
import NodeIcon from "../Icons/NodeIcon/NodeIcon";
import ReactIcon from "../Icons/ReactIcon/ReactIcon";
import MongoIcon from "../Icons/MongoIcon/MongoIcon";
import ExpoIcon from "../Icons/ExpoIcon/ExpoIcon";
import TypescriptIcon from "../Icons/TypescriptIcon/TypescriptIcon";
import styles from "./LangIcon.module.css";
import FirebaseIcon from "../Icons/FirebaseIcon/FirebaseIcon";
import CoffeeIcon from "../Icons/CoffeeIcon/CoffeeIcon";

const classAndIconCollection: IconCollection = {
  nodejs: { icon: <NodeIcon />, className: styles.nodejs },
  javascript: { icon: <JsIcon />, className: styles.javascript },
  typescript: { icon: <TypescriptIcon />, className: styles.typescript },
  reactjs: { icon: <ReactIcon />, className: styles.reactjs },
  mongodb: { icon: <MongoIcon />, className: styles.mongodb },
  expo: { icon: <ExpoIcon />, className: styles.expo },
  firebase: { icon: <FirebaseIcon />, className: styles.firebase },
};

const LangIcon = ({ lang }: { lang: string }) => {
  const icon = classAndIconCollection[lang];
  return (
    <div className={`${styles.LangIcon} ${icon?.className ?? styles.me}`}>
      <div className={styles.LangIcon__icon}>
        {icon?.icon ?? <CoffeeIcon />}
      </div>
    </div>
  );
};

export default LangIcon;
