import { HTMLAttributes } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
declare type ButtonVariant = 'default' | 'primary' | 'destructive' | 'destructive-primary';
export declare type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
};
declare type PolymorphicButton = Polymorphic.ForwardRefComponent<'button', ButtonProps>;
export declare const Button: PolymorphicButton;
export {};
