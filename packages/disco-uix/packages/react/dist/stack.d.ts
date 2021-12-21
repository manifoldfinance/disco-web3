import React from 'react';
import {BoxProps} from './box';

export declare function getValidChildren(children: React.ReactNode): React.ReactElement<any, string | React.JSXElementConstructor<any>>[];

export interface StackProps extends BoxProps {
  isInline?: boolean;
  children?: React.ReactNode[] | React.ReactNode;
  divider?: React.ReactElement;
  spacing?: BoxProps['margin'];
  shouldWrapChildren?: boolean;
}

export declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLElement>>;
