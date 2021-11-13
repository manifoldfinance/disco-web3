import React from 'react';
import { BoxProps } from './box';
export interface IconButtonProps extends BoxProps {
    icon: any;
    iconSize?: BoxProps['size'];
    iconProps?: BoxProps;
    isHovered?: boolean;
    invert?: boolean;
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLElement>>;
