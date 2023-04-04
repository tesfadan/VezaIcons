import React from "react";
import Svg, { Path } from "react-native-svg";
import { VezaIconProps } from "..";

const icon: React.FC<VezaIconProps> = ({ size = 24, color = "#5B28E5" }) => {
    return (<Svg width={size} height={size} viewBox="0 0 24 24" fill="none" >
<Path fillRule="evenodd" clipRule="evenodd" d="M19.2191 2.38841C19.4381 2.29768 19.6729 2.25098 19.91 2.25098C20.147 2.25098 20.3818 2.29768 20.6008 2.38841C20.8198 2.47913 21.0188 2.6121 21.1864 2.77973C21.1864 2.77974 21.1864 2.77971 21.1864 2.77973L21.2216 2.81488C21.5598 3.15338 21.7501 3.6126 21.7501 4.09112C21.7501 4.56964 21.5601 5.02858 21.2218 5.36708L20.6689 5.92001C20.2662 6.32274 19.6132 6.32274 19.2105 5.92001L18.0808 4.79032C17.8874 4.59687 17.7787 4.33448 17.7788 4.0609C17.7788 3.78732 17.8876 3.52497 18.0811 3.3316L18.6334 2.77977C18.6336 2.77965 18.6333 2.77988 18.6334 2.77977C18.801 2.61229 19.0002 2.47907 19.2191 2.38841ZM16.8097 5.02956C17.0834 5.02939 17.346 5.13805 17.5395 5.3316L18.6692 6.46129C18.8628 6.65484 18.9714 6.9174 18.9713 7.19113C18.9711 7.46485 18.8621 7.72728 18.6683 7.92059L5.88084 20.6767C5.78502 20.7723 5.67133 20.8481 5.54625 20.8997L3.675 21.6727C3.28983 21.8318 2.84675 21.7434 2.55208 21.4488C2.2574 21.1541 2.16904 20.711 2.32815 20.3258L3.10112 18.4546C3.15278 18.3295 3.22857 18.2158 3.32415 18.12L16.0802 5.3325C16.2736 5.13871 16.536 5.02972 16.8097 5.02956Z" fill={color}/>
</Svg>
);
  };
  
export default icon;