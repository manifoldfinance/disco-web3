import * as React from 'react';
export declare type StatelessTextInputProps = {
    hasError?: boolean;
    disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare const StatelessTextInput: {
    ({ className, type, hasError, disabled, ...props }: StatelessTextInputProps): JSX.Element;
    displayName: string;
};
