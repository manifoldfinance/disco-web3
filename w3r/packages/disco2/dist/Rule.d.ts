import { HTMLAttributes } from 'react';
export declare type RuleProps = HTMLAttributes<HTMLHRElement> & {
    vertical?: boolean;
};
export declare const Rule: {
    ({ className, vertical, ...props }: RuleProps): JSX.Element;
    displayName: string;
};
