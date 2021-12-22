import * as React from 'react';
export declare type StatelessCheckboxFieldProps = {
    selected?: boolean;
    hasError?: boolean;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const StatelessCheckboxField: {
    ({ selected, disabled, hasError, onChange, className, children, ...props }: StatelessCheckboxFieldProps): JSX.Element;
    displayName: string;
};
