import * as React from 'react';
export declare type SegmentedProgressBarProps = React.HTMLAttributes<HTMLDivElement> & {
    segments?: number;
    current?: number;
};
export declare const SegmentedProgressBar: {
    ({ segments, current, className, ...props }: SegmentedProgressBarProps): JSX.Element;
    displayName: string;
};
