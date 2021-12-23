import React from 'react';
import { MenuItemProps as ReachMenuItemProps } from '@reach/menu-button';
export declare type MenuItemProps = ReachMenuItemProps & React.HTMLAttributes<HTMLDivElement>;
export declare const MenuItem: ({ className, children, ...props }: MenuItemProps) => JSX.Element;
