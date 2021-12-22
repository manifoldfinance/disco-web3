import * as React from 'react';
import { MenuButtonProps as ReachMenuButtonProps } from '@reach/menu-button';
import { ButtonProps } from './Button';
export declare type MenuButtonProps = ButtonProps & ReachMenuButtonProps;
export declare const MenuButton: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLButtonElement> & {
    variant?: ("default" | "destructive" | "primary" | "destructive-primary") | undefined;
} & ReachMenuButtonProps & React.RefAttributes<HTMLButtonElement>>;
