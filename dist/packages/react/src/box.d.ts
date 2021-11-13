import React from 'react';
import { CssThemeProps } from '@disco3/core';
declare type HTMLProperties = Omit<React.AllHTMLAttributes<HTMLElement>, 'as' | 'color' | 'height' | 'width' | 'content' | 'translate' | 'size'>;
export interface BoxProps extends CssThemeProps, HTMLProperties {
    as?: React.ElementType;
    className?: string;
}
export declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLElement>>;
export {};
