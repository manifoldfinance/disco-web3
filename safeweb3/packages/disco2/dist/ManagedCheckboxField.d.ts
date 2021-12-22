import * as React from 'react';
declare type ManagedCheckboxFieldProps = React.HTMLAttributes<HTMLDivElement> & {
    caption?: string;
    label: string;
    id: string;
    disabled?: boolean;
};
export declare const ManagedCheckboxField: ({ label, caption, id, disabled, ...props }: ManagedCheckboxFieldProps) => JSX.Element;
export {};
