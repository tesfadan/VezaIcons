import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path d="M19.5 7.49972C19.5003 6.97367 19.3622 6.45681 19.0996 6.00097C18.8371 5.54514 18.4592 5.16636 18.0041 4.90263C17.5489 4.63889 17.0324 4.49948 16.5064 4.49837C15.9803 4.49726 15.4632 4.63449 15.007 4.8963C14.5507 5.15811 14.1713 5.53529 13.9068 5.99001C13.6423 6.44473 13.502 6.96101 13.5001 7.48705C13.4981 8.01309 13.6344 8.53041 13.8955 8.98711C14.1566 9.44382 14.5331 9.82385 14.9874 10.0891C14.88 11.4522 14.0461 11.8235 11.4718 12.3588C10.6393 12.5313 9.78754 12.708 9.00098 13.0117V7.09612C9.5729 6.76592 10.0199 6.25623 10.2726 5.6461C10.5253 5.03596 10.5697 4.35949 10.3988 3.72159C10.2278 3.08369 9.85119 2.52001 9.32726 2.11799C8.80333 1.71596 8.16138 1.49805 7.50098 1.49805C6.84058 1.49805 6.19863 1.71596 5.67469 2.11799C5.15076 2.52001 4.77412 3.08369 4.6032 3.72159C4.43228 4.35949 4.47661 5.03596 4.72934 5.6461C4.98206 6.25623 5.42905 6.76592 6.00098 7.09612V16.9033C5.42992 17.2331 4.98342 17.7418 4.73053 18.3508C4.47765 18.9598 4.43246 19.6352 4.60197 20.2724C4.77148 20.9097 5.14624 21.4734 5.66828 21.8763C6.19032 22.2791 6.83056 22.4988 7.48999 22.5013C8.14941 22.5037 8.79127 22.2888 9.3163 21.8899C9.84133 21.4909 10.2203 20.93 10.3945 20.294C10.5688 19.658 10.5286 18.9823 10.2803 18.3715C10.0319 17.7606 9.58925 17.2486 9.02067 16.9146C9.1327 16.0708 9.77067 15.7741 12.0797 15.2964C13.3655 15.0307 14.6944 14.7555 15.8194 14.0332C17.1788 13.1622 17.9068 11.8403 17.9925 10.1008C18.4504 9.8382 18.8309 9.45943 19.0956 9.00273C19.3603 8.54603 19.4998 8.02757 19.5 7.49972ZM7.50004 2.99972C7.79671 2.99972 8.08672 3.08769 8.3334 3.25251C8.58007 3.41733 8.77233 3.6516 8.88586 3.92569C8.99939 4.19978 9.0291 4.50138 8.97122 4.79235C8.91334 5.08332 8.77048 5.3506 8.5607 5.56038C8.35092 5.77016 8.08365 5.91302 7.79268 5.97089C7.5017 6.02877 7.2001 5.99907 6.92602 5.88554C6.65193 5.77201 6.41766 5.57975 6.25284 5.33307C6.08801 5.0864 6.00004 4.79639 6.00004 4.49972C6.00004 4.10189 6.15808 3.72036 6.43938 3.43906C6.72069 3.15775 7.10222 2.99972 7.50004 2.99972ZM7.50004 20.9997C7.20337 20.9997 6.91336 20.9117 6.66669 20.7469C6.42001 20.5821 6.22775 20.3478 6.11422 20.0737C6.00069 19.7997 5.97098 19.4981 6.02886 19.2071C6.08674 18.9161 6.2296 18.6488 6.43938 18.4391C6.64916 18.2293 6.91643 18.0864 7.2074 18.0285C7.49838 17.9707 7.79998 18.0004 8.07407 18.1139C8.34815 18.2274 8.58242 18.4197 8.74724 18.6664C8.91207 18.913 9.00004 19.203 9.00004 19.4997C9.00004 19.8975 8.842 20.2791 8.5607 20.5604C8.2794 20.8417 7.89787 20.9997 7.50004 20.9997ZM16.5 8.99972C16.2034 8.99972 15.9134 8.91174 15.6667 8.74692C15.42 8.5821 15.2278 8.34783 15.1142 8.07374C15.0007 7.79965 14.971 7.49805 15.0289 7.20708C15.0867 6.91611 15.2296 6.64884 15.4394 6.43906C15.6492 6.22928 15.9164 6.08642 16.2074 6.02854C16.4984 5.97066 16.8 6.00037 17.0741 6.1139C17.3482 6.22743 17.5824 6.41969 17.7472 6.66636C17.9121 6.91304 18 7.20304 18 7.49972C18 7.89754 17.842 8.27907 17.5607 8.56038C17.2794 8.84168 16.8979 8.99972 16.5 8.99972Z" fill={color}/>
</Svg>
);
  };
  
export default icon;