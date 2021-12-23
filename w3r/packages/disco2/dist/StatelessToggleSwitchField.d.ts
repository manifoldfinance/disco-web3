import * as React from 'react';
export declare type StatelessToggleSwitchFieldProps = {
    selected?: boolean;
    hasError?: boolean;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const StatelessToggleSwitchField: {
    ({ selected, disabled, hasError, onChange, className, children, ...props }: StatelessToggleSwitchFieldProps): JSX.Element;
    displayName: string;
};
