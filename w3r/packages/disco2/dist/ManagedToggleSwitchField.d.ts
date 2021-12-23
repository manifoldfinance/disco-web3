import * as React from 'react';
declare type ManagedToggleSwitchFieldProps = React.HTMLAttributes<HTMLDivElement> & {
    caption?: string;
    label: string;
    id: string;
    disabled?: boolean;
};
export declare const ManagedToggleSwitchField: ({ label, caption, id, disabled, ...props }: ManagedToggleSwitchFieldProps) => JSX.Element;
export {};
