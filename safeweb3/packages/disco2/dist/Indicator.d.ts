import * as React from 'react';
export declare type IndicatorProps = React.HTMLAttributes<HTMLDivElement> & {
    disabled?: boolean;
    selected?: boolean;
    hasError?: boolean;
};
export declare const Indicator: {
    ({ className, children, selected, hasError, disabled, }: IndicatorProps): JSX.Element;
    displayName: string;
};
