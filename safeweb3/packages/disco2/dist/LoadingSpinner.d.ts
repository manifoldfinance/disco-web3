import * as React from 'react';
export declare type LoadingSpinnerProps = {
    foreground?: string;
    background?: string;
    light?: boolean;
    dark?: boolean;
} & React.SVGProps<SVGSVGElement>;
export declare const LoadingSpinner: {
    ({ foreground, background, light, dark, className, ...props }: LoadingSpinnerProps): JSX.Element;
    displayName: string;
};
