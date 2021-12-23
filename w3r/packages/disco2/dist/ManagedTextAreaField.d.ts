import * as React from 'react';
export declare type ManagedTextAreaFieldProps = {
    hasError?: boolean;
    disabled?: boolean;
    placeholder?: string;
    id: string;
    label?: string;
    caption?: string;
    autoFocus?: boolean;
    textareaClass?: string;
} & React.HTMLAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLInputElement>;
export declare const ManagedTextAreaField: {
    ({ disabled, hasError, placeholder, label, caption, id, children, autoFocus, className, textareaClass, ...props }: ManagedTextAreaFieldProps): JSX.Element;
    displayName: string;
};
