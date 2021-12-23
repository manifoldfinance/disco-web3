import * as React from 'react';
export declare type ContinuousProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
    percentage: number;
};
export declare const ContinuousProgressBar: {
    ({ className, percentage, }: ContinuousProgressBarProps): JSX.Element;
    displayName: string;
};
