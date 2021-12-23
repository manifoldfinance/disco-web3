import * as React from 'react';
export declare type DisclosureButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    isOpen?: boolean;
};
export declare const DisclosureButton: {
    ({ isOpen, children, ...props }: DisclosureButtonProps): JSX.Element;
    displayName: string;
};
