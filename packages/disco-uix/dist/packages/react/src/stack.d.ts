import React from 'react';
import { BoxProps } from './box';
export declare function getValidChildren(children: React.ReactNode): any[];
export interface StackProps extends BoxProps {
    isInline?: boolean;
    children?: React.ReactNode[] | React.ReactNode;
    divider?: React.ReactElement;
    spacing?: BoxProps['margin'];
    shouldWrapChildren?: boolean;
}
export declare const Stack: any;
