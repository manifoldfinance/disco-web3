import * as React from 'react';
export declare type StatelessTextAreaProps = {
    hasError?: boolean;
    disabled?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare const StatelessTextArea: {
    ({ className, cols, hasError, disabled, ...props }: StatelessTextAreaProps): JSX.Element;
    displayName: string;
};
