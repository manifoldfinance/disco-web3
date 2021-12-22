import * as React from 'react';
declare type ManagedRadioButtonFieldProps = React.HTMLAttributes<HTMLDivElement> & {
    caption?: string;
    label: string;
    id: string;
    name: string;
    disabled?: boolean;
};
export declare const ManagedRadioButtonField: ({ label, caption, id, disabled, name, ...props }: ManagedRadioButtonFieldProps) => JSX.Element;
export {};
