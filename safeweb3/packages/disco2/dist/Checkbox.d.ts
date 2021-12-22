import * as React from 'react';
export declare type CheckboxProps = {
    selected?: boolean;
    hasError?: boolean;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Checkbox: {
    ({ selected, disabled, hasError, className, ...props }: CheckboxProps): JSX.Element;
    displayName: string;
};
