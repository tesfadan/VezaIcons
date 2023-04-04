import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M2.18746 9.279C2.99246 8.374 6.37146 5 12 5C17.6285 5 21.0075 8.374 21.8125 9.279C21.8703 9.34531 21.9079 9.42674 21.921 9.51371C21.9341 9.60069 21.9221 9.6896 21.8865 9.77L18.2235 18.4685C18.1055 18.749 17.765 18.8655 17.49 18.735C16.588 18.304 14.562 17.5 12 17.5C9.43796 17.5 7.41196 18.304 6.50996 18.7345C6.23496 18.8655 5.89446 18.749 5.77646 18.4685L2.11346 9.77C2.07777 9.6896 2.06578 9.60069 2.07889 9.51371C2.092 9.42674 2.12966 9.34531 2.18746 9.279ZM13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V11.0005H10C9.44772 11.0005 9 11.4482 9 12.0005C9 12.5528 9.44772 13.0005 10 13.0005H11V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V13.0005H14C14.5523 13.0005 15 12.5528 15 12.0005C15 11.4482 14.5523 11.0005 14 11.0005H13V10Z" fill={color}/>
</Svg>
);
  };
  
export default icon;