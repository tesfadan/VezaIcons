import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path d="M21 10.5007H17.8125C17.4804 9.21215 16.7294 8.07055 15.6777 7.25547C14.6259 6.44038 13.333 5.99805 12.0023 5.99805C10.6717 5.99805 9.37881 6.44038 8.32703 7.25547C7.27525 8.07055 6.52426 9.21215 6.19219 10.5007H3C2.60218 10.5007 2.22064 10.6587 1.93934 10.94C1.65804 11.2213 1.5 11.6029 1.5 12.0007C1.5 12.3985 1.65804 12.78 1.93934 13.0613C2.22064 13.3427 2.60218 13.5007 3 13.5007H6.18984C6.52111 14.7903 7.2719 15.933 8.324 16.749C9.3761 17.565 10.6697 18.0079 12.0012 18.0079C13.3326 18.0079 14.6262 17.565 15.6783 16.749C16.7304 15.933 17.4812 14.7903 17.8125 13.5007H21C21.3978 13.5007 21.7794 13.3427 22.0607 13.0613C22.342 12.78 22.5 12.3985 22.5 12.0007C22.5 11.6029 22.342 11.2213 22.0607 10.94C21.7794 10.6587 21.3978 10.5007 21 10.5007ZM12 15.0007C11.4067 15.0007 10.8266 14.8247 10.3333 14.4951C9.83994 14.1655 9.45542 13.6969 9.22836 13.1487C9.0013 12.6006 8.94189 11.9974 9.05764 11.4154C9.1734 10.8335 9.45912 10.2989 9.87868 9.87937C10.2982 9.45981 10.8328 9.17409 11.4147 9.05833C11.9967 8.94258 12.5999 9.00199 13.1481 9.22905C13.6962 9.45611 14.1648 9.84063 14.4944 10.334C14.8241 10.8273 15 11.4073 15 12.0007C14.9991 12.7961 14.6828 13.5586 14.1204 14.121C13.5579 14.6835 12.7954 14.9998 12 15.0007Z" fill={color}/>
</Svg>
);
  };
  
export default icon;