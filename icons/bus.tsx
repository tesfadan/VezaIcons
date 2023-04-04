import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M3.86047 3.93761C3.86047 2.91011 4.69342 2.07715 5.72093 2.07715H18.2791C19.3066 2.07715 20.1395 2.91011 20.1395 3.93761V19.2865C20.1395 19.8002 19.7231 20.2167 19.2093 20.2167H18.9767V21.2244C18.9767 21.6098 18.6644 21.9221 18.2791 21.9221H16.8837C16.4984 21.9221 16.186 21.6098 16.186 21.2244V20.2167H7.81395V21.2244C7.81395 21.6098 7.50159 21.9221 7.11628 21.9221H5.72093C5.33562 21.9221 5.02326 21.6098 5.02326 21.2244V20.2167H4.7907C4.27694 20.2167 3.86047 19.8002 3.86047 19.2865V3.93761ZM21.3023 5.79808C20.917 5.79808 20.6047 6.11044 20.6047 6.49575V9.28645C20.6047 9.67177 20.917 9.98413 21.3023 9.98413C21.6876 9.98413 22 9.67177 22 9.28645V6.49575C22 6.11044 21.6876 5.79808 21.3023 5.79808ZM2 6.49575C2 6.11044 2.31236 5.79808 2.69767 5.79808C3.08299 5.79808 3.39535 6.11044 3.39535 6.49575V9.28645C3.39535 9.67177 3.08299 9.98413 2.69767 9.98413C2.31236 9.98413 2 9.67177 2 9.28645V6.49575ZM5.02326 3.93761C5.02326 3.5523 5.33562 3.23994 5.72093 3.23994H18.2791C18.6644 3.23994 18.9767 3.5523 18.9767 3.93761C18.9767 4.32293 18.6644 4.63529 18.2791 4.63529H5.72093C5.33562 4.63529 5.02326 4.32293 5.02326 3.93761ZM5.02326 17.1934C5.02326 16.8081 5.33562 16.4958 5.72093 16.4958H8.51163C8.89694 16.4958 9.2093 16.8081 9.2093 17.1934C9.2093 17.5787 8.89694 17.8911 8.51163 17.8911H5.72093C5.33562 17.8911 5.02326 17.5787 5.02326 17.1934ZM15.4884 16.4958C15.1031 16.4958 14.7907 16.8081 14.7907 17.1934C14.7907 17.5787 15.1031 17.8911 15.4884 17.8911H18.2791C18.6644 17.8911 18.9767 17.5787 18.9767 17.1934C18.9767 16.8081 18.6644 16.4958 18.2791 16.4958H15.4884ZM5.02326 6.49575C5.02326 6.11044 5.33562 5.79808 5.72093 5.79808H18.2791C18.6644 5.79808 18.9767 6.11044 18.9767 6.49575V13.4725C18.9767 13.8578 18.6644 14.1702 18.2791 14.1702H5.72093C5.33562 14.1702 5.02326 13.8578 5.02326 13.4725V6.49575Z" fill={color}/>
</Svg>
);
  };
  
export default icon;