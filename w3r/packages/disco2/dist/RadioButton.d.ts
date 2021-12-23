import * as React from 'react';
export declare type RadioButtonProps = {
    selected?: boolean;
    hasError?: boolean;
    disabled?: boolean;
    name: string;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const RadioButton: {
    ({ selected, disabled, hasError, onChange, name, className, children, ...props }: RadioButtonProps): JSX.Element;
    displayName: string;
};
