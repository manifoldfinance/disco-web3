import * as React from 'react';
export declare type StatelessRadioButtonFieldProps = {
    selected?: boolean;
    hasError?: boolean;
    disabled?: boolean;
    name: string;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const StatelessRadioButtonField: {
    ({ selected, disabled, hasError, onChange, className, children, name, ...props }: StatelessRadioButtonFieldProps): JSX.Element;
    displayName: string;
};
