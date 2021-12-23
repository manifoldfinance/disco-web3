import * as React from 'react';
export declare type ToggleSwitchProps = {
    selected?: boolean;
    hasError?: boolean;
    disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const ToggleSwitch: {
    ({ className, selected, hasError, disabled, ...props }: ToggleSwitchProps): JSX.Element;
    displayName: string;
};
