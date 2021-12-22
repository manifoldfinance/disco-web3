import * as React from 'react';
import { iconIndex } from './iconIndex';
export declare type IconIndex = typeof iconIndex;
export declare type IconProps = React.SVGProps<SVGSVGElement> & {
    icon: keyof IconIndex;
};
export declare const Icon: {
    ({ icon, className, ...props }: IconProps): JSX.Element;
    displayName: string;
};
