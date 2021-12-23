import type * as Polymorphic from '@radix-ui/react-polymorphic';
export interface ActionProps {
    destructive?: boolean;
}
declare type PolymorphicAction = Polymorphic.ForwardRefComponent<'button', ActionProps>;
export declare const Action: PolymorphicAction;
export {};
