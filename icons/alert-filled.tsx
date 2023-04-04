
import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM12 17.2458C11.8146 17.2458 11.6333 17.1908 11.4792 17.0878C11.325 16.9848 11.2048 16.8384 11.1339 16.667C11.0629 16.4957 11.0443 16.3072 11.0805 16.1254C11.1167 15.9435 11.206 15.7765 11.3371 15.6454C11.4682 15.5143 11.6352 15.425 11.8171 15.3888C11.999 15.3526 12.1875 15.3712 12.3588 15.4421C12.5301 15.5131 12.6765 15.6333 12.7795 15.7874C12.8825 15.9416 12.9375 16.1229 12.9375 16.3083C12.9375 16.5569 12.8387 16.7954 12.6629 16.9712C12.4871 17.147 12.2486 17.2458 12 17.2458ZM13.0181 7.81688L12.7491 13.5356C12.7491 13.7345 12.67 13.9253 12.5294 14.066C12.3887 14.2066 12.198 14.2856 11.9991 14.2856C11.8002 14.2856 11.6094 14.2066 11.4687 14.066C11.3281 13.9253 11.2491 13.7345 11.2491 13.5356L10.98 7.81969V7.81734C10.9741 7.67997 10.9961 7.54282 11.0446 7.41415C11.0931 7.28549 11.1671 7.16797 11.2623 7.06868C11.3574 6.96938 11.4716 6.89037 11.5981 6.83639C11.7245 6.78241 11.8606 6.75458 11.9981 6.75458C12.1356 6.75458 12.2717 6.78241 12.3982 6.83639C12.5246 6.89037 12.6389 6.96938 12.734 7.06868C12.8291 7.16797 12.9032 7.28549 12.9517 7.41415C13.0002 7.54282 13.0221 7.67997 13.0163 7.81734L13.0181 7.81688Z" fill={color}/>
</Svg>
);
  };
  
export default icon;