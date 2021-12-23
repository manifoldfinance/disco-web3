import * as React from 'react';
export declare type ManagedTextInputFieldProps = {
    hasError?: boolean;
    disabled?: boolean;
    placeholder?: string;
    id: string;
    label?: string;
    caption?: string;
    type?: string;
    autoFocus?: boolean;
    inputClass?: string;
} & React.HTMLAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLInputElement>;
export declare const ManagedTextInputField: {
    ({ disabled, hasError, placeholder, label, caption, id, children, className, inputClass, type, autoFocus, ...props }: ManagedTextInputFieldProps): JSX.Element;
    displayName: string;
};
