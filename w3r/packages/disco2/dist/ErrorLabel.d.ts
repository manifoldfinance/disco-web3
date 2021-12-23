import * as React from 'react';
export declare type ErrorLabelProps = React.HTMLAttributes<HTMLDivElement> & {
    hasError?: boolean;
};
export declare const ErrorLabel: {
    ({ hasError, className, children, ...props }: ErrorLabelProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
    displayName: string;
};
