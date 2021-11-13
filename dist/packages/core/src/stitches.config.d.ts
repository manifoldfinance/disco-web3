import type * as CSSUtil from './stitches-core/css-util';
import { PropertyValue } from './stitches-core/css-util';
declare const css: <Composers extends (string | import("@stitches/core/types/util").Function | {
    [name: string]: unknown;
})[], CSS = import("@stitches/core/types/css-util").CSS<{
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, {
    colors: {
        background: string;
        border: string;
        "action-critical": string;
        "action-primary": string;
        "action-primary--disabled": string;
        "action-primary--hovered": string;
        "action-primary--pressed": string;
        "action-secondary": string;
        "action-secondary--disabled": string;
        "action-secondary--hovered": string;
        "action-subdued": string;
        "action-subdued--disabled": string;
        "action-subdued--hovered": string;
        "action-subdued--pressed": string;
        "action-warning": string;
        "background-subdued": string;
        "border--disabled": string;
        "border--focused": string;
        "border-accent": string;
        "border-critical": string;
        "border-subdued": string;
        "border-success": string;
        "border-warning": string;
        icon: string;
        "icon--disabled": string;
        "icon-accent": string;
        "icon-critical": string;
        "icon-onCritical": string;
        "icon-onPrimary": string;
        "icon-onPrimary-subdued": string;
        "icon-onSuccess": string;
        "icon-onWarning": string;
        "icon-subdued": string;
        "icon-success": string;
        "icon-warning": string;
        interactive: string;
        "interactive--disabled": string;
        "interactive--hovered": string;
        "interactive--pressed": string;
        overlay: string;
        secondary: string;
        "secondary-subdued": string;
        success: string;
        surface: string;
        "surface--disabled": string;
        "surface--hovered": string;
        "surface--pressed": string;
        "surface--selected": string;
        "surface-accent": string;
        "surface-contrast": string;
        "surface-critical": string;
        "surface-subdued": string;
        "surface-success": string;
        "surface-warning": string;
        text: string;
        "text--disabled": string;
        "text-critical": string;
        "text-dim": string;
        "text-onContrast": string;
        "text-onCritical": string;
        "text-onPrimary": string;
        "text-onPrimary-subdued": string;
        "text-onSuccess": string;
        "text-onWarning": string;
        "text-subdued": string;
        "text-success": string;
        warning: string;
        'color-base-black': "hsl(240, 4%, 5%)";
        'color-base-white': "hsl(0, 0%, 100%)";
        'color-blue-100': "hsl(222, 62%, 96%)";
        'color-blue-200': "hsl(223, 68%, 94%)";
        'color-blue-300': "hsl(224, 81%, 89%)";
        'color-blue-400': "hsl(227, 80%, 72%)";
        'color-blue-500': "hsl(234, 85%, 65%)";
        'color-blue-600': "hsl(245, 100%, 64%)";
        'color-blue-700': "hsl(240, 70%, 46%)";
        'color-blue-800': "hsl(240, 84%, 36%)";
        'color-blue-900': "hsl(241, 82%, 21%)";
        'color-blue-050': "hsl(230, 60%, 98%)";
        'color-green-100': "hsl(120, 40%, 96%)";
        'color-green-300': "hsl(108, 41%, 88%)";
        'color-green-500': "hsl(158, 66%, 40%)";
        'color-green-600': "hsl(158, 100%, 25%)";
        'color-grey-100': "hsl(0, 0%, 96%)";
        'color-grey-200': "hsl(0, 0%, 94%)";
        'color-grey-300': "hsl(0, 0%, 87%)";
        'color-grey-400': "hsl(0, 0%, 60%)";
        'color-grey-500': "hsl(0, 0%, 47%)";
        'color-grey-600': "hsl(0, 0%, 40%)";
        'color-grey-700': "hsl(0, 0%, 20%)";
        'color-grey-800': "hsl(0, 0%, 15%)";
        'color-grey-900': "hsl(0, 0%, 9%)";
        'color-grey-050': "hsl(0, 0%, 98%)";
        'color-orange-100': "hsl(30, 100%, 96%)";
        'color-orange-300': "hsl(30, 100%, 88%)";
        'color-orange-500': "hsl(30, 100%, 74%)";
        'color-orange-600': "hsl(30, 100%, 66%)";
        'color-red-100': "hsl(4, 71%, 96%)";
        'color-red-300': "hsl(4, 74%, 88%)";
        'color-red-500': "hsl(1, 72%, 66%)";
        'color-red-600': "hsl(1, 60%, 49%)";
        'color-slate-100': "hsl(240, 11%, 96%)";
        'color-slate-200': "hsl(240, 10%, 94%)";
        'color-slate-300': "hsl(230, 9%, 87%)";
        'color-slate-400': "hsl(217, 6%, 58%)";
        'color-slate-500': "hsl(220, 4%, 47%)";
        'color-slate-600': "hsl(215, 6%, 41%)";
        'color-slate-700': "hsl(220, 6%, 20%)";
        'color-slate-800': "hsl(216, 6%, 15%)";
        'color-slate-900': "hsl(225, 9%, 9%)";
        'color-slate-050': "hsl(240, 9%, 98%)";
    };
    space: {
        none: string;
        'extra-tight': string;
        tight: string;
        'base-tight': string;
        base: string;
        'base-loose': string;
        loose: string;
        'extra-loose': string;
        auto: string;
        '0': string;
        px: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '8': string;
        '10': string;
        '12': string;
        '16': string;
        '20': string;
        '24': string;
        '32': string;
        '40': string;
        '48': string;
        '56': string;
        '64': string;
    };
    fontSizes: {
        readonly '0': "12px";
        readonly '1': "14px";
        readonly '2': "16px";
        readonly '3': "20px";
        readonly '4': "24px";
        readonly '5': "32px";
        readonly '6': "40px";
        readonly '7': "48px";
        readonly '8': "64px";
        readonly '9': "72px";
    };
    fonts: {
        readonly body: "'Inter'";
        readonly headlines: "'Open Sauce'";
    };
    fontWeights: {
        light: number;
        base: number;
        semibold: number;
        bold: number;
        extrabold: number;
    };
    lineHeights: {
        readonly '0': "80px";
        readonly '1': "72px";
        readonly '2': "60px";
        readonly '3': "56px";
        readonly '4': "44px";
        readonly '5': "36px";
        readonly '6': "28px";
        readonly '7': "24px";
        readonly '8': "20px";
        readonly '9': "16px";
    };
    letterSpacings: unknown;
    sizes: unknown;
    borderWidths: {
        base: string;
        medium: string;
        thick: string;
    };
    borderStyles: {
        base: string;
    };
    radii: {
        readonly ellipse: "50%";
        readonly 'extra-large': "16px";
        readonly large: "12px";
        readonly medium: "10px";
        readonly small: "4px";
    };
    shadows: {
        readonly large: "0px 16px 40px 0px hsla(240, 4%, 5%, 0.08)";
        readonly low: "0px 1px 2px 0px hsla(240, 4%, 5%, 0.04)";
        readonly medium: "0px 8px 16px 0px hsla(240, 4%, 5%, 0.08)";
    };
    zIndices: {
        base: number;
        mid: number;
        high: number;
        highest: number;
    };
    transitions: {
        slow: string;
        base: string;
        fast: string;
    };
}, import("@stitches/core/types/config").DefaultThemeMap, {
    m: (value: PropertyValue<'margin'>) => {
        margin: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    mt: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    mr: (value: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    mb: (value: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    ml: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    mx: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    my: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    p: (value: PropertyValue<'padding'>) => {
        padding: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    pt: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    pr: (value: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    pb: (value: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    pl: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    px: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    py: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    size: (value: PropertyValue<'width'>) => {
        width: {
            readonly [CSSUtil.$$PropertyValue]: "width";
        };
        height: {
            readonly [CSSUtil.$$PropertyValue]: "width";
        };
    };
}>>(...composers: { [K in keyof Composers]: Composers[K] extends string | import("@stitches/core/types/util").Function ? Composers[K] : import("@stitches/core/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/core/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/core/types/util").String | import("@stitches/core/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/core/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/core/types/styled-component").CssComponent<import("@stitches/core/types/styled-component").StyledComponentType<Composers>, import("@stitches/core/types/styled-component").StyledComponentProps<Composers>, {
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, CSS>, getCssText: () => string, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        background: import("@stitches/core/types/theme").Token<"background", string, "colors", "">;
        border: import("@stitches/core/types/theme").Token<"border", string, "colors", "">;
        "action-critical": import("@stitches/core/types/theme").Token<"action-critical", string, "colors", "">;
        "action-primary": import("@stitches/core/types/theme").Token<"action-primary", string, "colors", "">;
        "action-primary--disabled": import("@stitches/core/types/theme").Token<"action-primary--disabled", string, "colors", "">;
        "action-primary--hovered": import("@stitches/core/types/theme").Token<"action-primary--hovered", string, "colors", "">;
        "action-primary--pressed": import("@stitches/core/types/theme").Token<"action-primary--pressed", string, "colors", "">;
        "action-secondary": import("@stitches/core/types/theme").Token<"action-secondary", string, "colors", "">;
        "action-secondary--disabled": import("@stitches/core/types/theme").Token<"action-secondary--disabled", string, "colors", "">;
        "action-secondary--hovered": import("@stitches/core/types/theme").Token<"action-secondary--hovered", string, "colors", "">;
        "action-subdued": import("@stitches/core/types/theme").Token<"action-subdued", string, "colors", "">;
        "action-subdued--disabled": import("@stitches/core/types/theme").Token<"action-subdued--disabled", string, "colors", "">;
        "action-subdued--hovered": import("@stitches/core/types/theme").Token<"action-subdued--hovered", string, "colors", "">;
        "action-subdued--pressed": import("@stitches/core/types/theme").Token<"action-subdued--pressed", string, "colors", "">;
        "action-warning": import("@stitches/core/types/theme").Token<"action-warning", string, "colors", "">;
        "background-subdued": import("@stitches/core/types/theme").Token<"background-subdued", string, "colors", "">;
        "border--disabled": import("@stitches/core/types/theme").Token<"border--disabled", string, "colors", "">;
        "border--focused": import("@stitches/core/types/theme").Token<"border--focused", string, "colors", "">;
        "border-accent": import("@stitches/core/types/theme").Token<"border-accent", string, "colors", "">;
        "border-critical": import("@stitches/core/types/theme").Token<"border-critical", string, "colors", "">;
        "border-subdued": import("@stitches/core/types/theme").Token<"border-subdued", string, "colors", "">;
        "border-success": import("@stitches/core/types/theme").Token<"border-success", string, "colors", "">;
        "border-warning": import("@stitches/core/types/theme").Token<"border-warning", string, "colors", "">;
        icon: import("@stitches/core/types/theme").Token<"icon", string, "colors", "">;
        "icon--disabled": import("@stitches/core/types/theme").Token<"icon--disabled", string, "colors", "">;
        "icon-accent": import("@stitches/core/types/theme").Token<"icon-accent", string, "colors", "">;
        "icon-critical": import("@stitches/core/types/theme").Token<"icon-critical", string, "colors", "">;
        "icon-onCritical": import("@stitches/core/types/theme").Token<"icon-onCritical", string, "colors", "">;
        "icon-onPrimary": import("@stitches/core/types/theme").Token<"icon-onPrimary", string, "colors", "">;
        "icon-onPrimary-subdued": import("@stitches/core/types/theme").Token<"icon-onPrimary-subdued", string, "colors", "">;
        "icon-onSuccess": import("@stitches/core/types/theme").Token<"icon-onSuccess", string, "colors", "">;
        "icon-onWarning": import("@stitches/core/types/theme").Token<"icon-onWarning", string, "colors", "">;
        "icon-subdued": import("@stitches/core/types/theme").Token<"icon-subdued", string, "colors", "">;
        "icon-success": import("@stitches/core/types/theme").Token<"icon-success", string, "colors", "">;
        "icon-warning": import("@stitches/core/types/theme").Token<"icon-warning", string, "colors", "">;
        interactive: import("@stitches/core/types/theme").Token<"interactive", string, "colors", "">;
        "interactive--disabled": import("@stitches/core/types/theme").Token<"interactive--disabled", string, "colors", "">;
        "interactive--hovered": import("@stitches/core/types/theme").Token<"interactive--hovered", string, "colors", "">;
        "interactive--pressed": import("@stitches/core/types/theme").Token<"interactive--pressed", string, "colors", "">;
        overlay: import("@stitches/core/types/theme").Token<"overlay", string, "colors", "">;
        secondary: import("@stitches/core/types/theme").Token<"secondary", string, "colors", "">;
        "secondary-subdued": import("@stitches/core/types/theme").Token<"secondary-subdued", string, "colors", "">;
        success: import("@stitches/core/types/theme").Token<"success", string, "colors", "">;
        surface: import("@stitches/core/types/theme").Token<"surface", string, "colors", "">;
        "surface--disabled": import("@stitches/core/types/theme").Token<"surface--disabled", string, "colors", "">;
        "surface--hovered": import("@stitches/core/types/theme").Token<"surface--hovered", string, "colors", "">;
        "surface--pressed": import("@stitches/core/types/theme").Token<"surface--pressed", string, "colors", "">;
        "surface--selected": import("@stitches/core/types/theme").Token<"surface--selected", string, "colors", "">;
        "surface-accent": import("@stitches/core/types/theme").Token<"surface-accent", string, "colors", "">;
        "surface-contrast": import("@stitches/core/types/theme").Token<"surface-contrast", string, "colors", "">;
        "surface-critical": import("@stitches/core/types/theme").Token<"surface-critical", string, "colors", "">;
        "surface-subdued": import("@stitches/core/types/theme").Token<"surface-subdued", string, "colors", "">;
        "surface-success": import("@stitches/core/types/theme").Token<"surface-success", string, "colors", "">;
        "surface-warning": import("@stitches/core/types/theme").Token<"surface-warning", string, "colors", "">;
        text: import("@stitches/core/types/theme").Token<"text", string, "colors", "">;
        "text--disabled": import("@stitches/core/types/theme").Token<"text--disabled", string, "colors", "">;
        "text-critical": import("@stitches/core/types/theme").Token<"text-critical", string, "colors", "">;
        "text-dim": import("@stitches/core/types/theme").Token<"text-dim", string, "colors", "">;
        "text-onContrast": import("@stitches/core/types/theme").Token<"text-onContrast", string, "colors", "">;
        "text-onCritical": import("@stitches/core/types/theme").Token<"text-onCritical", string, "colors", "">;
        "text-onPrimary": import("@stitches/core/types/theme").Token<"text-onPrimary", string, "colors", "">;
        "text-onPrimary-subdued": import("@stitches/core/types/theme").Token<"text-onPrimary-subdued", string, "colors", "">;
        "text-onSuccess": import("@stitches/core/types/theme").Token<"text-onSuccess", string, "colors", "">;
        "text-onWarning": import("@stitches/core/types/theme").Token<"text-onWarning", string, "colors", "">;
        "text-subdued": import("@stitches/core/types/theme").Token<"text-subdued", string, "colors", "">;
        "text-success": import("@stitches/core/types/theme").Token<"text-success", string, "colors", "">;
        warning: import("@stitches/core/types/theme").Token<"warning", string, "colors", "">;
        'color-base-black': import("@stitches/core/types/theme").Token<"color-base-black", string, "colors", "">;
        'color-base-white': import("@stitches/core/types/theme").Token<"color-base-white", string, "colors", "">;
        'color-blue-100': import("@stitches/core/types/theme").Token<"color-blue-100", string, "colors", "">;
        'color-blue-200': import("@stitches/core/types/theme").Token<"color-blue-200", string, "colors", "">;
        'color-blue-300': import("@stitches/core/types/theme").Token<"color-blue-300", string, "colors", "">;
        'color-blue-400': import("@stitches/core/types/theme").Token<"color-blue-400", string, "colors", "">;
        'color-blue-500': import("@stitches/core/types/theme").Token<"color-blue-500", string, "colors", "">;
        'color-blue-600': import("@stitches/core/types/theme").Token<"color-blue-600", string, "colors", "">;
        'color-blue-700': import("@stitches/core/types/theme").Token<"color-blue-700", string, "colors", "">;
        'color-blue-800': import("@stitches/core/types/theme").Token<"color-blue-800", string, "colors", "">;
        'color-blue-900': import("@stitches/core/types/theme").Token<"color-blue-900", string, "colors", "">;
        'color-blue-050': import("@stitches/core/types/theme").Token<"color-blue-050", string, "colors", "">;
        'color-green-100': import("@stitches/core/types/theme").Token<"color-green-100", string, "colors", "">;
        'color-green-300': import("@stitches/core/types/theme").Token<"color-green-300", string, "colors", "">;
        'color-green-500': import("@stitches/core/types/theme").Token<"color-green-500", string, "colors", "">;
        'color-green-600': import("@stitches/core/types/theme").Token<"color-green-600", string, "colors", "">;
        'color-grey-100': import("@stitches/core/types/theme").Token<"color-grey-100", string, "colors", "">;
        'color-grey-200': import("@stitches/core/types/theme").Token<"color-grey-200", string, "colors", "">;
        'color-grey-300': import("@stitches/core/types/theme").Token<"color-grey-300", string, "colors", "">;
        'color-grey-400': import("@stitches/core/types/theme").Token<"color-grey-400", string, "colors", "">;
        'color-grey-500': import("@stitches/core/types/theme").Token<"color-grey-500", string, "colors", "">;
        'color-grey-600': import("@stitches/core/types/theme").Token<"color-grey-600", string, "colors", "">;
        'color-grey-700': import("@stitches/core/types/theme").Token<"color-grey-700", string, "colors", "">;
        'color-grey-800': import("@stitches/core/types/theme").Token<"color-grey-800", string, "colors", "">;
        'color-grey-900': import("@stitches/core/types/theme").Token<"color-grey-900", string, "colors", "">;
        'color-grey-050': import("@stitches/core/types/theme").Token<"color-grey-050", string, "colors", "">;
        'color-orange-100': import("@stitches/core/types/theme").Token<"color-orange-100", string, "colors", "">;
        'color-orange-300': import("@stitches/core/types/theme").Token<"color-orange-300", string, "colors", "">;
        'color-orange-500': import("@stitches/core/types/theme").Token<"color-orange-500", string, "colors", "">;
        'color-orange-600': import("@stitches/core/types/theme").Token<"color-orange-600", string, "colors", "">;
        'color-red-100': import("@stitches/core/types/theme").Token<"color-red-100", string, "colors", "">;
        'color-red-300': import("@stitches/core/types/theme").Token<"color-red-300", string, "colors", "">;
        'color-red-500': import("@stitches/core/types/theme").Token<"color-red-500", string, "colors", "">;
        'color-red-600': import("@stitches/core/types/theme").Token<"color-red-600", string, "colors", "">;
        'color-slate-100': import("@stitches/core/types/theme").Token<"color-slate-100", string, "colors", "">;
        'color-slate-200': import("@stitches/core/types/theme").Token<"color-slate-200", string, "colors", "">;
        'color-slate-300': import("@stitches/core/types/theme").Token<"color-slate-300", string, "colors", "">;
        'color-slate-400': import("@stitches/core/types/theme").Token<"color-slate-400", string, "colors", "">;
        'color-slate-500': import("@stitches/core/types/theme").Token<"color-slate-500", string, "colors", "">;
        'color-slate-600': import("@stitches/core/types/theme").Token<"color-slate-600", string, "colors", "">;
        'color-slate-700': import("@stitches/core/types/theme").Token<"color-slate-700", string, "colors", "">;
        'color-slate-800': import("@stitches/core/types/theme").Token<"color-slate-800", string, "colors", "">;
        'color-slate-900': import("@stitches/core/types/theme").Token<"color-slate-900", string, "colors", "">;
        'color-slate-050': import("@stitches/core/types/theme").Token<"color-slate-050", string, "colors", "">;
    };
    space: {
        none: import("@stitches/core/types/theme").Token<"none", string, "space", "">;
        'extra-tight': import("@stitches/core/types/theme").Token<"extra-tight", string, "space", "">;
        tight: import("@stitches/core/types/theme").Token<"tight", string, "space", "">;
        'base-tight': import("@stitches/core/types/theme").Token<"base-tight", string, "space", "">;
        base: import("@stitches/core/types/theme").Token<"base", string, "space", "">;
        'base-loose': import("@stitches/core/types/theme").Token<"base-loose", string, "space", "">;
        loose: import("@stitches/core/types/theme").Token<"loose", string, "space", "">;
        'extra-loose': import("@stitches/core/types/theme").Token<"extra-loose", string, "space", "">;
        auto: import("@stitches/core/types/theme").Token<"auto", string, "space", "">;
        0: import("@stitches/core/types/theme").Token<"0", string, "space", "">;
        px: import("@stitches/core/types/theme").Token<"px", string, "space", "">;
        1: import("@stitches/core/types/theme").Token<"1", string, "space", "">;
        2: import("@stitches/core/types/theme").Token<"2", string, "space", "">;
        3: import("@stitches/core/types/theme").Token<"3", string, "space", "">;
        4: import("@stitches/core/types/theme").Token<"4", string, "space", "">;
        5: import("@stitches/core/types/theme").Token<"5", string, "space", "">;
        6: import("@stitches/core/types/theme").Token<"6", string, "space", "">;
        8: import("@stitches/core/types/theme").Token<"8", string, "space", "">;
        10: import("@stitches/core/types/theme").Token<"10", string, "space", "">;
        12: import("@stitches/core/types/theme").Token<"12", string, "space", "">;
        16: import("@stitches/core/types/theme").Token<"16", string, "space", "">;
        20: import("@stitches/core/types/theme").Token<"20", string, "space", "">;
        24: import("@stitches/core/types/theme").Token<"24", string, "space", "">;
        32: import("@stitches/core/types/theme").Token<"32", string, "space", "">;
        40: import("@stitches/core/types/theme").Token<"40", string, "space", "">;
        48: import("@stitches/core/types/theme").Token<"48", string, "space", "">;
        56: import("@stitches/core/types/theme").Token<"56", string, "space", "">;
        64: import("@stitches/core/types/theme").Token<"64", string, "space", "">;
    };
    fontSizes: {
        readonly 0: import("@stitches/core/types/theme").Token<"0", string, "fontSizes", "">;
        readonly 1: import("@stitches/core/types/theme").Token<"1", string, "fontSizes", "">;
        readonly 2: import("@stitches/core/types/theme").Token<"2", string, "fontSizes", "">;
        readonly 3: import("@stitches/core/types/theme").Token<"3", string, "fontSizes", "">;
        readonly 4: import("@stitches/core/types/theme").Token<"4", string, "fontSizes", "">;
        readonly 5: import("@stitches/core/types/theme").Token<"5", string, "fontSizes", "">;
        readonly 6: import("@stitches/core/types/theme").Token<"6", string, "fontSizes", "">;
        readonly 7: import("@stitches/core/types/theme").Token<"7", string, "fontSizes", "">;
        readonly 8: import("@stitches/core/types/theme").Token<"8", string, "fontSizes", "">;
        readonly 9: import("@stitches/core/types/theme").Token<"9", string, "fontSizes", "">;
    };
    fonts: {
        readonly body: import("@stitches/core/types/theme").Token<"body", string, "fonts", "">;
        readonly headlines: import("@stitches/core/types/theme").Token<"headlines", string, "fonts", "">;
    };
    fontWeights: {
        light: import("@stitches/core/types/theme").Token<"light", string, "fontWeights", "">;
        base: import("@stitches/core/types/theme").Token<"base", string, "fontWeights", "">;
        semibold: import("@stitches/core/types/theme").Token<"semibold", string, "fontWeights", "">;
        bold: import("@stitches/core/types/theme").Token<"bold", string, "fontWeights", "">;
        extrabold: import("@stitches/core/types/theme").Token<"extrabold", string, "fontWeights", "">;
    };
    lineHeights: {
        readonly 0: import("@stitches/core/types/theme").Token<"0", string, "lineHeights", "">;
        readonly 1: import("@stitches/core/types/theme").Token<"1", string, "lineHeights", "">;
        readonly 2: import("@stitches/core/types/theme").Token<"2", string, "lineHeights", "">;
        readonly 3: import("@stitches/core/types/theme").Token<"3", string, "lineHeights", "">;
        readonly 4: import("@stitches/core/types/theme").Token<"4", string, "lineHeights", "">;
        readonly 5: import("@stitches/core/types/theme").Token<"5", string, "lineHeights", "">;
        readonly 6: import("@stitches/core/types/theme").Token<"6", string, "lineHeights", "">;
        readonly 7: import("@stitches/core/types/theme").Token<"7", string, "lineHeights", "">;
        readonly 8: import("@stitches/core/types/theme").Token<"8", string, "lineHeights", "">;
        readonly 9: import("@stitches/core/types/theme").Token<"9", string, "lineHeights", "">;
    };
    letterSpacings: {};
    sizes: {};
    borderWidths: {
        base: import("@stitches/core/types/theme").Token<"base", string, "borderWidths", "">;
        medium: import("@stitches/core/types/theme").Token<"medium", string, "borderWidths", "">;
        thick: import("@stitches/core/types/theme").Token<"thick", string, "borderWidths", "">;
    };
    borderStyles: {
        base: import("@stitches/core/types/theme").Token<"base", string, "borderStyles", "">;
    };
    radii: {
        readonly ellipse: import("@stitches/core/types/theme").Token<"ellipse", string, "radii", "">;
        readonly 'extra-large': import("@stitches/core/types/theme").Token<"extra-large", string, "radii", "">;
        readonly large: import("@stitches/core/types/theme").Token<"large", string, "radii", "">;
        readonly medium: import("@stitches/core/types/theme").Token<"medium", string, "radii", "">;
        readonly small: import("@stitches/core/types/theme").Token<"small", string, "radii", "">;
    };
    shadows: {
        readonly large: import("@stitches/core/types/theme").Token<"large", string, "shadows", "">;
        readonly low: import("@stitches/core/types/theme").Token<"low", string, "shadows", "">;
        readonly medium: import("@stitches/core/types/theme").Token<"medium", string, "shadows", "">;
    };
    zIndices: {
        base: import("@stitches/core/types/theme").Token<"base", string, "zIndices", "">;
        mid: import("@stitches/core/types/theme").Token<"mid", string, "zIndices", "">;
        high: import("@stitches/core/types/theme").Token<"high", string, "zIndices", "">;
        highest: import("@stitches/core/types/theme").Token<"highest", string, "zIndices", "">;
    };
    transitions: {
        slow: import("@stitches/core/types/theme").Token<"slow", string, "transitions", "">;
        base: import("@stitches/core/types/theme").Token<"base", string, "transitions", "">;
        fast: import("@stitches/core/types/theme").Token<"fast", string, "transitions", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        background?: string | number | boolean | undefined;
        border?: string | number | boolean | undefined;
        "action-critical"?: string | number | boolean | undefined;
        "action-primary"?: string | number | boolean | undefined;
        "action-primary--disabled"?: string | number | boolean | undefined;
        "action-primary--hovered"?: string | number | boolean | undefined;
        "action-primary--pressed"?: string | number | boolean | undefined;
        "action-secondary"?: string | number | boolean | undefined;
        "action-secondary--disabled"?: string | number | boolean | undefined;
        "action-secondary--hovered"?: string | number | boolean | undefined;
        "action-subdued"?: string | number | boolean | undefined;
        "action-subdued--disabled"?: string | number | boolean | undefined;
        "action-subdued--hovered"?: string | number | boolean | undefined;
        "action-subdued--pressed"?: string | number | boolean | undefined;
        "action-warning"?: string | number | boolean | undefined;
        "background-subdued"?: string | number | boolean | undefined;
        "border--disabled"?: string | number | boolean | undefined;
        "border--focused"?: string | number | boolean | undefined;
        "border-accent"?: string | number | boolean | undefined;
        "border-critical"?: string | number | boolean | undefined;
        "border-subdued"?: string | number | boolean | undefined;
        "border-success"?: string | number | boolean | undefined;
        "border-warning"?: string | number | boolean | undefined;
        icon?: string | number | boolean | undefined;
        "icon--disabled"?: string | number | boolean | undefined;
        "icon-accent"?: string | number | boolean | undefined;
        "icon-critical"?: string | number | boolean | undefined;
        "icon-onCritical"?: string | number | boolean | undefined;
        "icon-onPrimary"?: string | number | boolean | undefined;
        "icon-onPrimary-subdued"?: string | number | boolean | undefined;
        "icon-onSuccess"?: string | number | boolean | undefined;
        "icon-onWarning"?: string | number | boolean | undefined;
        "icon-subdued"?: string | number | boolean | undefined;
        "icon-success"?: string | number | boolean | undefined;
        "icon-warning"?: string | number | boolean | undefined;
        interactive?: string | number | boolean | undefined;
        "interactive--disabled"?: string | number | boolean | undefined;
        "interactive--hovered"?: string | number | boolean | undefined;
        "interactive--pressed"?: string | number | boolean | undefined;
        overlay?: string | number | boolean | undefined;
        secondary?: string | number | boolean | undefined;
        "secondary-subdued"?: string | number | boolean | undefined;
        success?: string | number | boolean | undefined;
        surface?: string | number | boolean | undefined;
        "surface--disabled"?: string | number | boolean | undefined;
        "surface--hovered"?: string | number | boolean | undefined;
        "surface--pressed"?: string | number | boolean | undefined;
        "surface--selected"?: string | number | boolean | undefined;
        "surface-accent"?: string | number | boolean | undefined;
        "surface-contrast"?: string | number | boolean | undefined;
        "surface-critical"?: string | number | boolean | undefined;
        "surface-subdued"?: string | number | boolean | undefined;
        "surface-success"?: string | number | boolean | undefined;
        "surface-warning"?: string | number | boolean | undefined;
        text?: string | number | boolean | undefined;
        "text--disabled"?: string | number | boolean | undefined;
        "text-critical"?: string | number | boolean | undefined;
        "text-dim"?: string | number | boolean | undefined;
        "text-onContrast"?: string | number | boolean | undefined;
        "text-onCritical"?: string | number | boolean | undefined;
        "text-onPrimary"?: string | number | boolean | undefined;
        "text-onPrimary-subdued"?: string | number | boolean | undefined;
        "text-onSuccess"?: string | number | boolean | undefined;
        "text-onWarning"?: string | number | boolean | undefined;
        "text-subdued"?: string | number | boolean | undefined;
        "text-success"?: string | number | boolean | undefined;
        warning?: string | number | boolean | undefined;
        'color-base-black'?: string | number | boolean | undefined;
        'color-base-white'?: string | number | boolean | undefined;
        'color-blue-100'?: string | number | boolean | undefined;
        'color-blue-200'?: string | number | boolean | undefined;
        'color-blue-300'?: string | number | boolean | undefined;
        'color-blue-400'?: string | number | boolean | undefined;
        'color-blue-500'?: string | number | boolean | undefined;
        'color-blue-600'?: string | number | boolean | undefined;
        'color-blue-700'?: string | number | boolean | undefined;
        'color-blue-800'?: string | number | boolean | undefined;
        'color-blue-900'?: string | number | boolean | undefined;
        'color-blue-050'?: string | number | boolean | undefined;
        'color-green-100'?: string | number | boolean | undefined;
        'color-green-300'?: string | number | boolean | undefined;
        'color-green-500'?: string | number | boolean | undefined;
        'color-green-600'?: string | number | boolean | undefined;
        'color-grey-100'?: string | number | boolean | undefined;
        'color-grey-200'?: string | number | boolean | undefined;
        'color-grey-300'?: string | number | boolean | undefined;
        'color-grey-400'?: string | number | boolean | undefined;
        'color-grey-500'?: string | number | boolean | undefined;
        'color-grey-600'?: string | number | boolean | undefined;
        'color-grey-700'?: string | number | boolean | undefined;
        'color-grey-800'?: string | number | boolean | undefined;
        'color-grey-900'?: string | number | boolean | undefined;
        'color-grey-050'?: string | number | boolean | undefined;
        'color-orange-100'?: string | number | boolean | undefined;
        'color-orange-300'?: string | number | boolean | undefined;
        'color-orange-500'?: string | number | boolean | undefined;
        'color-orange-600'?: string | number | boolean | undefined;
        'color-red-100'?: string | number | boolean | undefined;
        'color-red-300'?: string | number | boolean | undefined;
        'color-red-500'?: string | number | boolean | undefined;
        'color-red-600'?: string | number | boolean | undefined;
        'color-slate-100'?: string | number | boolean | undefined;
        'color-slate-200'?: string | number | boolean | undefined;
        'color-slate-300'?: string | number | boolean | undefined;
        'color-slate-400'?: string | number | boolean | undefined;
        'color-slate-500'?: string | number | boolean | undefined;
        'color-slate-600'?: string | number | boolean | undefined;
        'color-slate-700'?: string | number | boolean | undefined;
        'color-slate-800'?: string | number | boolean | undefined;
        'color-slate-900'?: string | number | boolean | undefined;
        'color-slate-050'?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        none?: string | number | boolean | undefined;
        'extra-tight'?: string | number | boolean | undefined;
        tight?: string | number | boolean | undefined;
        'base-tight'?: string | number | boolean | undefined;
        base?: string | number | boolean | undefined;
        'base-loose'?: string | number | boolean | undefined;
        loose?: string | number | boolean | undefined;
        'extra-loose'?: string | number | boolean | undefined;
        auto?: string | number | boolean | undefined;
        0?: string | number | boolean | undefined;
        px?: string | number | boolean | undefined;
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
        8?: string | number | boolean | undefined;
        10?: string | number | boolean | undefined;
        12?: string | number | boolean | undefined;
        16?: string | number | boolean | undefined;
        20?: string | number | boolean | undefined;
        24?: string | number | boolean | undefined;
        32?: string | number | boolean | undefined;
        40?: string | number | boolean | undefined;
        48?: string | number | boolean | undefined;
        56?: string | number | boolean | undefined;
        64?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        readonly 0?: string | number | boolean | undefined;
        readonly 1?: string | number | boolean | undefined;
        readonly 2?: string | number | boolean | undefined;
        readonly 3?: string | number | boolean | undefined;
        readonly 4?: string | number | boolean | undefined;
        readonly 5?: string | number | boolean | undefined;
        readonly 6?: string | number | boolean | undefined;
        readonly 7?: string | number | boolean | undefined;
        readonly 8?: string | number | boolean | undefined;
        readonly 9?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        readonly body?: string | number | boolean | undefined;
        readonly headlines?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        light?: string | number | boolean | undefined;
        base?: string | number | boolean | undefined;
        semibold?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
        extrabold?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        readonly 0?: string | number | boolean | undefined;
        readonly 1?: string | number | boolean | undefined;
        readonly 2?: string | number | boolean | undefined;
        readonly 3?: string | number | boolean | undefined;
        readonly 4?: string | number | boolean | undefined;
        readonly 5?: string | number | boolean | undefined;
        readonly 6?: string | number | boolean | undefined;
        readonly 7?: string | number | boolean | undefined;
        readonly 8?: string | number | boolean | undefined;
        readonly 9?: string | number | boolean | undefined;
    } | undefined;
    letterSpacings?: {} | undefined;
    sizes?: {} | undefined;
    borderWidths?: {
        base?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        thick?: string | number | boolean | undefined;
    } | undefined;
    borderStyles?: {
        base?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        readonly ellipse?: string | number | boolean | undefined;
        readonly 'extra-large'?: string | number | boolean | undefined;
        readonly large?: string | number | boolean | undefined;
        readonly medium?: string | number | boolean | undefined;
        readonly small?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        readonly large?: string | number | boolean | undefined;
        readonly low?: string | number | boolean | undefined;
        readonly medium?: string | number | boolean | undefined;
    } | undefined;
    zIndices?: {
        base?: string | number | boolean | undefined;
        mid?: string | number | boolean | undefined;
        high?: string | number | boolean | undefined;
        highest?: string | number | boolean | undefined;
    } | undefined;
    transitions?: {
        slow?: string | number | boolean | undefined;
        base?: string | number | boolean | undefined;
        fast?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        background?: string | number | boolean | undefined;
        border?: string | number | boolean | undefined;
        "action-critical"?: string | number | boolean | undefined;
        "action-primary"?: string | number | boolean | undefined;
        "action-primary--disabled"?: string | number | boolean | undefined;
        "action-primary--hovered"?: string | number | boolean | undefined;
        "action-primary--pressed"?: string | number | boolean | undefined;
        "action-secondary"?: string | number | boolean | undefined;
        "action-secondary--disabled"?: string | number | boolean | undefined;
        "action-secondary--hovered"?: string | number | boolean | undefined;
        "action-subdued"?: string | number | boolean | undefined;
        "action-subdued--disabled"?: string | number | boolean | undefined;
        "action-subdued--hovered"?: string | number | boolean | undefined;
        "action-subdued--pressed"?: string | number | boolean | undefined;
        "action-warning"?: string | number | boolean | undefined;
        "background-subdued"?: string | number | boolean | undefined;
        "border--disabled"?: string | number | boolean | undefined;
        "border--focused"?: string | number | boolean | undefined;
        "border-accent"?: string | number | boolean | undefined;
        "border-critical"?: string | number | boolean | undefined;
        "border-subdued"?: string | number | boolean | undefined;
        "border-success"?: string | number | boolean | undefined;
        "border-warning"?: string | number | boolean | undefined;
        icon?: string | number | boolean | undefined;
        "icon--disabled"?: string | number | boolean | undefined;
        "icon-accent"?: string | number | boolean | undefined;
        "icon-critical"?: string | number | boolean | undefined;
        "icon-onCritical"?: string | number | boolean | undefined;
        "icon-onPrimary"?: string | number | boolean | undefined;
        "icon-onPrimary-subdued"?: string | number | boolean | undefined;
        "icon-onSuccess"?: string | number | boolean | undefined;
        "icon-onWarning"?: string | number | boolean | undefined;
        "icon-subdued"?: string | number | boolean | undefined;
        "icon-success"?: string | number | boolean | undefined;
        "icon-warning"?: string | number | boolean | undefined;
        interactive?: string | number | boolean | undefined;
        "interactive--disabled"?: string | number | boolean | undefined;
        "interactive--hovered"?: string | number | boolean | undefined;
        "interactive--pressed"?: string | number | boolean | undefined;
        overlay?: string | number | boolean | undefined;
        secondary?: string | number | boolean | undefined;
        "secondary-subdued"?: string | number | boolean | undefined;
        success?: string | number | boolean | undefined;
        surface?: string | number | boolean | undefined;
        "surface--disabled"?: string | number | boolean | undefined;
        "surface--hovered"?: string | number | boolean | undefined;
        "surface--pressed"?: string | number | boolean | undefined;
        "surface--selected"?: string | number | boolean | undefined;
        "surface-accent"?: string | number | boolean | undefined;
        "surface-contrast"?: string | number | boolean | undefined;
        "surface-critical"?: string | number | boolean | undefined;
        "surface-subdued"?: string | number | boolean | undefined;
        "surface-success"?: string | number | boolean | undefined;
        "surface-warning"?: string | number | boolean | undefined;
        text?: string | number | boolean | undefined;
        "text--disabled"?: string | number | boolean | undefined;
        "text-critical"?: string | number | boolean | undefined;
        "text-dim"?: string | number | boolean | undefined;
        "text-onContrast"?: string | number | boolean | undefined;
        "text-onCritical"?: string | number | boolean | undefined;
        "text-onPrimary"?: string | number | boolean | undefined;
        "text-onPrimary-subdued"?: string | number | boolean | undefined;
        "text-onSuccess"?: string | number | boolean | undefined;
        "text-onWarning"?: string | number | boolean | undefined;
        "text-subdued"?: string | number | boolean | undefined;
        "text-success"?: string | number | boolean | undefined;
        warning?: string | number | boolean | undefined;
        'color-base-black'?: string | number | boolean | undefined;
        'color-base-white'?: string | number | boolean | undefined;
        'color-blue-100'?: string | number | boolean | undefined;
        'color-blue-200'?: string | number | boolean | undefined;
        'color-blue-300'?: string | number | boolean | undefined;
        'color-blue-400'?: string | number | boolean | undefined;
        'color-blue-500'?: string | number | boolean | undefined;
        'color-blue-600'?: string | number | boolean | undefined;
        'color-blue-700'?: string | number | boolean | undefined;
        'color-blue-800'?: string | number | boolean | undefined;
        'color-blue-900'?: string | number | boolean | undefined;
        'color-blue-050'?: string | number | boolean | undefined;
        'color-green-100'?: string | number | boolean | undefined;
        'color-green-300'?: string | number | boolean | undefined;
        'color-green-500'?: string | number | boolean | undefined;
        'color-green-600'?: string | number | boolean | undefined;
        'color-grey-100'?: string | number | boolean | undefined;
        'color-grey-200'?: string | number | boolean | undefined;
        'color-grey-300'?: string | number | boolean | undefined;
        'color-grey-400'?: string | number | boolean | undefined;
        'color-grey-500'?: string | number | boolean | undefined;
        'color-grey-600'?: string | number | boolean | undefined;
        'color-grey-700'?: string | number | boolean | undefined;
        'color-grey-800'?: string | number | boolean | undefined;
        'color-grey-900'?: string | number | boolean | undefined;
        'color-grey-050'?: string | number | boolean | undefined;
        'color-orange-100'?: string | number | boolean | undefined;
        'color-orange-300'?: string | number | boolean | undefined;
        'color-orange-500'?: string | number | boolean | undefined;
        'color-orange-600'?: string | number | boolean | undefined;
        'color-red-100'?: string | number | boolean | undefined;
        'color-red-300'?: string | number | boolean | undefined;
        'color-red-500'?: string | number | boolean | undefined;
        'color-red-600'?: string | number | boolean | undefined;
        'color-slate-100'?: string | number | boolean | undefined;
        'color-slate-200'?: string | number | boolean | undefined;
        'color-slate-300'?: string | number | boolean | undefined;
        'color-slate-400'?: string | number | boolean | undefined;
        'color-slate-500'?: string | number | boolean | undefined;
        'color-slate-600'?: string | number | boolean | undefined;
        'color-slate-700'?: string | number | boolean | undefined;
        'color-slate-800'?: string | number | boolean | undefined;
        'color-slate-900'?: string | number | boolean | undefined;
        'color-slate-050'?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        none?: string | number | boolean | undefined;
        'extra-tight'?: string | number | boolean | undefined;
        tight?: string | number | boolean | undefined;
        'base-tight'?: string | number | boolean | undefined;
        base?: string | number | boolean | undefined;
        'base-loose'?: string | number | boolean | undefined;
        loose?: string | number | boolean | undefined;
        'extra-loose'?: string | number | boolean | undefined;
        auto?: string | number | boolean | undefined;
        0?: string | number | boolean | undefined;
        px?: string | number | boolean | undefined;
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
        8?: string | number | boolean | undefined;
        10?: string | number | boolean | undefined;
        12?: string | number | boolean | undefined;
        16?: string | number | boolean | undefined;
        20?: string | number | boolean | undefined;
        24?: string | number | boolean | undefined;
        32?: string | number | boolean | undefined;
        40?: string | number | boolean | undefined;
        48?: string | number | boolean | undefined;
        56?: string | number | boolean | undefined;
        64?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        readonly 0?: string | number | boolean | undefined;
        readonly 1?: string | number | boolean | undefined;
        readonly 2?: string | number | boolean | undefined;
        readonly 3?: string | number | boolean | undefined;
        readonly 4?: string | number | boolean | undefined;
        readonly 5?: string | number | boolean | undefined;
        readonly 6?: string | number | boolean | undefined;
        readonly 7?: string | number | boolean | undefined;
        readonly 8?: string | number | boolean | undefined;
        readonly 9?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        readonly body?: string | number | boolean | undefined;
        readonly headlines?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        light?: string | number | boolean | undefined;
        base?: string | number | boolean | undefined;
        semibold?: string | number | boolean | undefined;
        bold?: string | number | boolean | undefined;
        extrabold?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        readonly 0?: string | number | boolean | undefined;
        readonly 1?: string | number | boolean | undefined;
        readonly 2?: string | number | boolean | undefined;
        readonly 3?: string | number | boolean | undefined;
        readonly 4?: string | number | boolean | undefined;
        readonly 5?: string | number | boolean | undefined;
        readonly 6?: string | number | boolean | undefined;
        readonly 7?: string | number | boolean | undefined;
        readonly 8?: string | number | boolean | undefined;
        readonly 9?: string | number | boolean | undefined;
    } | undefined;
    letterSpacings?: {} | undefined;
    sizes?: {} | undefined;
    borderWidths?: {
        base?: string | number | boolean | undefined;
        medium?: string | number | boolean | undefined;
        thick?: string | number | boolean | undefined;
    } | undefined;
    borderStyles?: {
        base?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        readonly ellipse?: string | number | boolean | undefined;
        readonly 'extra-large'?: string | number | boolean | undefined;
        readonly large?: string | number | boolean | undefined;
        readonly medium?: string | number | boolean | undefined;
        readonly small?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        readonly large?: string | number | boolean | undefined;
        readonly low?: string | number | boolean | undefined;
        readonly medium?: string | number | boolean | undefined;
    } | undefined;
    zIndices?: {
        base?: string | number | boolean | undefined;
        mid?: string | number | boolean | undefined;
        high?: string | number | boolean | undefined;
        highest?: string | number | boolean | undefined;
    } | undefined;
    transitions?: {
        slow?: string | number | boolean | undefined;
        base?: string | number | boolean | undefined;
        fast?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/core/types/stitches").ThemeTokens<Argument1, ""> : import("@stitches/core/types/stitches").ThemeTokens<Argument0, "">), globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/core/types/css").AtRule.FontFace | import("@stitches/core/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/core/types/css-util").CSS<{
        bp1: "(min-width: 640px)";
        bp2: "(min-width: 768px)";
        bp3: "(min-width: 1024px)";
    }, {
        colors: {
            background: string;
            border: string;
            "action-critical": string;
            "action-primary": string;
            "action-primary--disabled": string;
            "action-primary--hovered": string;
            "action-primary--pressed": string;
            "action-secondary": string;
            "action-secondary--disabled": string;
            "action-secondary--hovered": string;
            "action-subdued": string;
            "action-subdued--disabled": string;
            "action-subdued--hovered": string;
            "action-subdued--pressed": string;
            "action-warning": string;
            "background-subdued": string;
            "border--disabled": string;
            "border--focused": string;
            "border-accent": string;
            "border-critical": string;
            "border-subdued": string;
            "border-success": string;
            "border-warning": string;
            icon: string;
            "icon--disabled": string;
            "icon-accent": string;
            "icon-critical": string;
            "icon-onCritical": string;
            "icon-onPrimary": string;
            "icon-onPrimary-subdued": string;
            "icon-onSuccess": string;
            "icon-onWarning": string;
            "icon-subdued": string;
            "icon-success": string;
            "icon-warning": string;
            interactive: string;
            "interactive--disabled": string;
            "interactive--hovered": string;
            "interactive--pressed": string;
            overlay: string;
            secondary: string;
            "secondary-subdued": string;
            success: string;
            surface: string;
            "surface--disabled": string;
            "surface--hovered": string;
            "surface--pressed": string;
            "surface--selected": string;
            "surface-accent": string;
            "surface-contrast": string;
            "surface-critical": string;
            "surface-subdued": string;
            "surface-success": string;
            "surface-warning": string;
            text: string;
            "text--disabled": string;
            "text-critical": string;
            "text-dim": string;
            "text-onContrast": string;
            "text-onCritical": string;
            "text-onPrimary": string;
            "text-onPrimary-subdued": string;
            "text-onSuccess": string;
            "text-onWarning": string;
            "text-subdued": string;
            "text-success": string;
            warning: string;
            'color-base-black': "hsl(240, 4%, 5%)";
            'color-base-white': "hsl(0, 0%, 100%)";
            'color-blue-100': "hsl(222, 62%, 96%)";
            'color-blue-200': "hsl(223, 68%, 94%)";
            'color-blue-300': "hsl(224, 81%, 89%)";
            'color-blue-400': "hsl(227, 80%, 72%)";
            'color-blue-500': "hsl(234, 85%, 65%)";
            'color-blue-600': "hsl(245, 100%, 64%)";
            'color-blue-700': "hsl(240, 70%, 46%)";
            'color-blue-800': "hsl(240, 84%, 36%)";
            'color-blue-900': "hsl(241, 82%, 21%)";
            'color-blue-050': "hsl(230, 60%, 98%)";
            'color-green-100': "hsl(120, 40%, 96%)";
            'color-green-300': "hsl(108, 41%, 88%)";
            'color-green-500': "hsl(158, 66%, 40%)";
            'color-green-600': "hsl(158, 100%, 25%)";
            'color-grey-100': "hsl(0, 0%, 96%)";
            'color-grey-200': "hsl(0, 0%, 94%)";
            'color-grey-300': "hsl(0, 0%, 87%)";
            'color-grey-400': "hsl(0, 0%, 60%)";
            'color-grey-500': "hsl(0, 0%, 47%)";
            'color-grey-600': "hsl(0, 0%, 40%)";
            'color-grey-700': "hsl(0, 0%, 20%)";
            'color-grey-800': "hsl(0, 0%, 15%)";
            'color-grey-900': "hsl(0, 0%, 9%)";
            'color-grey-050': "hsl(0, 0%, 98%)";
            'color-orange-100': "hsl(30, 100%, 96%)";
            'color-orange-300': "hsl(30, 100%, 88%)";
            'color-orange-500': "hsl(30, 100%, 74%)";
            'color-orange-600': "hsl(30, 100%, 66%)";
            'color-red-100': "hsl(4, 71%, 96%)";
            'color-red-300': "hsl(4, 74%, 88%)";
            'color-red-500': "hsl(1, 72%, 66%)";
            'color-red-600': "hsl(1, 60%, 49%)";
            'color-slate-100': "hsl(240, 11%, 96%)";
            'color-slate-200': "hsl(240, 10%, 94%)";
            'color-slate-300': "hsl(230, 9%, 87%)";
            'color-slate-400': "hsl(217, 6%, 58%)";
            'color-slate-500': "hsl(220, 4%, 47%)";
            'color-slate-600': "hsl(215, 6%, 41%)";
            'color-slate-700': "hsl(220, 6%, 20%)";
            'color-slate-800': "hsl(216, 6%, 15%)";
            'color-slate-900': "hsl(225, 9%, 9%)";
            'color-slate-050': "hsl(240, 9%, 98%)";
        };
        space: {
            none: string;
            'extra-tight': string;
            tight: string;
            'base-tight': string;
            base: string;
            'base-loose': string;
            loose: string;
            'extra-loose': string;
            auto: string;
            '0': string;
            px: string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '8': string;
            '10': string;
            '12': string;
            '16': string;
            '20': string;
            '24': string;
            '32': string;
            '40': string;
            '48': string;
            '56': string;
            '64': string;
        };
        fontSizes: {
            readonly '0': "12px";
            readonly '1': "14px";
            readonly '2': "16px";
            readonly '3': "20px";
            readonly '4': "24px";
            readonly '5': "32px";
            readonly '6': "40px";
            readonly '7': "48px";
            readonly '8': "64px";
            readonly '9': "72px";
        };
        fonts: {
            readonly body: "'Inter'";
            readonly headlines: "'Open Sauce'";
        };
        fontWeights: {
            light: number;
            base: number;
            semibold: number;
            bold: number;
            extrabold: number;
        };
        lineHeights: {
            readonly '0': "80px";
            readonly '1': "72px";
            readonly '2': "60px";
            readonly '3': "56px";
            readonly '4': "44px";
            readonly '5': "36px";
            readonly '6': "28px";
            readonly '7': "24px";
            readonly '8': "20px";
            readonly '9': "16px";
        };
        letterSpacings: unknown;
        sizes: unknown;
        borderWidths: {
            base: string;
            medium: string;
            thick: string;
        };
        borderStyles: {
            base: string;
        };
        radii: {
            readonly ellipse: "50%";
            readonly 'extra-large': "16px";
            readonly large: "12px";
            readonly medium: "10px";
            readonly small: "4px";
        };
        shadows: {
            readonly large: "0px 16px 40px 0px hsla(240, 4%, 5%, 0.08)";
            readonly low: "0px 1px 2px 0px hsla(240, 4%, 5%, 0.04)";
            readonly medium: "0px 8px 16px 0px hsla(240, 4%, 5%, 0.08)";
        };
        zIndices: {
            base: number;
            mid: number;
            high: number;
            highest: number;
        };
        transitions: {
            slow: string;
            base: string;
            fast: string;
        };
    }, import("@stitches/core/types/config").DefaultThemeMap, {
        m: (value: PropertyValue<'margin'>) => {
            margin: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mt: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mr: (value: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mb: (value: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        ml: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mx: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        my: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        p: (value: PropertyValue<'padding'>) => {
            padding: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pt: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pr: (value: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pb: (value: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pl: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        px: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        py: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        size: (value: PropertyValue<'width'>) => {
            width: {
                readonly [CSSUtil.$$PropertyValue]: "width";
            };
            height: {
                readonly [CSSUtil.$$PropertyValue]: "width";
            };
        };
    }>;
} : K extends `@property ${string}` ? import("@stitches/core/types/css").AtRule.Property : import("@stitches/core/types/css-util").CSS<{
    bp1: "(min-width: 640px)";
    bp2: "(min-width: 768px)";
    bp3: "(min-width: 1024px)";
}, {
    colors: {
        background: string;
        border: string;
        "action-critical": string;
        "action-primary": string;
        "action-primary--disabled": string;
        "action-primary--hovered": string;
        "action-primary--pressed": string;
        "action-secondary": string;
        "action-secondary--disabled": string;
        "action-secondary--hovered": string;
        "action-subdued": string;
        "action-subdued--disabled": string;
        "action-subdued--hovered": string;
        "action-subdued--pressed": string;
        "action-warning": string;
        "background-subdued": string;
        "border--disabled": string;
        "border--focused": string;
        "border-accent": string;
        "border-critical": string;
        "border-subdued": string;
        "border-success": string;
        "border-warning": string;
        icon: string;
        "icon--disabled": string;
        "icon-accent": string;
        "icon-critical": string;
        "icon-onCritical": string;
        "icon-onPrimary": string;
        "icon-onPrimary-subdued": string;
        "icon-onSuccess": string;
        "icon-onWarning": string;
        "icon-subdued": string;
        "icon-success": string;
        "icon-warning": string;
        interactive: string;
        "interactive--disabled": string;
        "interactive--hovered": string;
        "interactive--pressed": string;
        overlay: string;
        secondary: string;
        "secondary-subdued": string;
        success: string;
        surface: string;
        "surface--disabled": string;
        "surface--hovered": string;
        "surface--pressed": string;
        "surface--selected": string;
        "surface-accent": string;
        "surface-contrast": string;
        "surface-critical": string;
        "surface-subdued": string;
        "surface-success": string;
        "surface-warning": string;
        text: string;
        "text--disabled": string;
        "text-critical": string;
        "text-dim": string;
        "text-onContrast": string;
        "text-onCritical": string;
        "text-onPrimary": string;
        "text-onPrimary-subdued": string;
        "text-onSuccess": string;
        "text-onWarning": string;
        "text-subdued": string;
        "text-success": string;
        warning: string;
        'color-base-black': "hsl(240, 4%, 5%)";
        'color-base-white': "hsl(0, 0%, 100%)";
        'color-blue-100': "hsl(222, 62%, 96%)";
        'color-blue-200': "hsl(223, 68%, 94%)";
        'color-blue-300': "hsl(224, 81%, 89%)";
        'color-blue-400': "hsl(227, 80%, 72%)";
        'color-blue-500': "hsl(234, 85%, 65%)";
        'color-blue-600': "hsl(245, 100%, 64%)";
        'color-blue-700': "hsl(240, 70%, 46%)";
        'color-blue-800': "hsl(240, 84%, 36%)";
        'color-blue-900': "hsl(241, 82%, 21%)";
        'color-blue-050': "hsl(230, 60%, 98%)";
        'color-green-100': "hsl(120, 40%, 96%)";
        'color-green-300': "hsl(108, 41%, 88%)";
        'color-green-500': "hsl(158, 66%, 40%)";
        'color-green-600': "hsl(158, 100%, 25%)";
        'color-grey-100': "hsl(0, 0%, 96%)";
        'color-grey-200': "hsl(0, 0%, 94%)";
        'color-grey-300': "hsl(0, 0%, 87%)";
        'color-grey-400': "hsl(0, 0%, 60%)";
        'color-grey-500': "hsl(0, 0%, 47%)";
        'color-grey-600': "hsl(0, 0%, 40%)";
        'color-grey-700': "hsl(0, 0%, 20%)";
        'color-grey-800': "hsl(0, 0%, 15%)";
        'color-grey-900': "hsl(0, 0%, 9%)";
        'color-grey-050': "hsl(0, 0%, 98%)";
        'color-orange-100': "hsl(30, 100%, 96%)";
        'color-orange-300': "hsl(30, 100%, 88%)";
        'color-orange-500': "hsl(30, 100%, 74%)";
        'color-orange-600': "hsl(30, 100%, 66%)";
        'color-red-100': "hsl(4, 71%, 96%)";
        'color-red-300': "hsl(4, 74%, 88%)";
        'color-red-500': "hsl(1, 72%, 66%)";
        'color-red-600': "hsl(1, 60%, 49%)";
        'color-slate-100': "hsl(240, 11%, 96%)";
        'color-slate-200': "hsl(240, 10%, 94%)";
        'color-slate-300': "hsl(230, 9%, 87%)";
        'color-slate-400': "hsl(217, 6%, 58%)";
        'color-slate-500': "hsl(220, 4%, 47%)";
        'color-slate-600': "hsl(215, 6%, 41%)";
        'color-slate-700': "hsl(220, 6%, 20%)";
        'color-slate-800': "hsl(216, 6%, 15%)";
        'color-slate-900': "hsl(225, 9%, 9%)";
        'color-slate-050': "hsl(240, 9%, 98%)";
    };
    space: {
        none: string;
        'extra-tight': string;
        tight: string;
        'base-tight': string;
        base: string;
        'base-loose': string;
        loose: string;
        'extra-loose': string;
        auto: string;
        '0': string;
        px: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '8': string;
        '10': string;
        '12': string;
        '16': string;
        '20': string;
        '24': string;
        '32': string;
        '40': string;
        '48': string;
        '56': string;
        '64': string;
    };
    fontSizes: {
        readonly '0': "12px";
        readonly '1': "14px";
        readonly '2': "16px";
        readonly '3': "20px";
        readonly '4': "24px";
        readonly '5': "32px";
        readonly '6': "40px";
        readonly '7': "48px";
        readonly '8': "64px";
        readonly '9': "72px";
    };
    fonts: {
        readonly body: "'Inter'";
        readonly headlines: "'Open Sauce'";
    };
    fontWeights: {
        light: number;
        base: number;
        semibold: number;
        bold: number;
        extrabold: number;
    };
    lineHeights: {
        readonly '0': "80px";
        readonly '1': "72px";
        readonly '2': "60px";
        readonly '3': "56px";
        readonly '4': "44px";
        readonly '5': "36px";
        readonly '6': "28px";
        readonly '7': "24px";
        readonly '8': "20px";
        readonly '9': "16px";
    };
    letterSpacings: unknown;
    sizes: unknown;
    borderWidths: {
        base: string;
        medium: string;
        thick: string;
    };
    borderStyles: {
        base: string;
    };
    radii: {
        readonly ellipse: "50%";
        readonly 'extra-large': "16px";
        readonly large: "12px";
        readonly medium: "10px";
        readonly small: "4px";
    };
    shadows: {
        readonly large: "0px 16px 40px 0px hsla(240, 4%, 5%, 0.08)";
        readonly low: "0px 1px 2px 0px hsla(240, 4%, 5%, 0.04)";
        readonly medium: "0px 8px 16px 0px hsla(240, 4%, 5%, 0.08)";
    };
    zIndices: {
        base: number;
        mid: number;
        high: number;
        highest: number;
    };
    transitions: {
        slow: string;
        base: string;
        fast: string;
    };
}, import("@stitches/core/types/config").DefaultThemeMap, {
    m: (value: PropertyValue<'margin'>) => {
        margin: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    mt: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    mr: (value: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    mb: (value: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    ml: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    mx: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    my: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [CSSUtil.$$PropertyValue]: "margin";
        };
    };
    p: (value: PropertyValue<'padding'>) => {
        padding: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    pt: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    pr: (value: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    pb: (value: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    pl: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    px: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    py: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [CSSUtil.$$PropertyValue]: "padding";
        };
    };
    size: (value: PropertyValue<'width'>) => {
        width: {
            readonly [CSSUtil.$$PropertyValue]: "width";
        };
        height: {
            readonly [CSSUtil.$$PropertyValue]: "width";
        };
    };
}>; })[]) => () => string, prefix: "", keyframes: (style: {
    [offset: string]: import("@stitches/core/types/css-util").CSS<{
        bp1: "(min-width: 640px)";
        bp2: "(min-width: 768px)";
        bp3: "(min-width: 1024px)";
    }, {
        colors: {
            background: string;
            border: string;
            "action-critical": string;
            "action-primary": string;
            "action-primary--disabled": string;
            "action-primary--hovered": string;
            "action-primary--pressed": string;
            "action-secondary": string;
            "action-secondary--disabled": string;
            "action-secondary--hovered": string;
            "action-subdued": string;
            "action-subdued--disabled": string;
            "action-subdued--hovered": string;
            "action-subdued--pressed": string;
            "action-warning": string;
            "background-subdued": string;
            "border--disabled": string;
            "border--focused": string;
            "border-accent": string;
            "border-critical": string;
            "border-subdued": string;
            "border-success": string;
            "border-warning": string;
            icon: string;
            "icon--disabled": string;
            "icon-accent": string;
            "icon-critical": string;
            "icon-onCritical": string;
            "icon-onPrimary": string;
            "icon-onPrimary-subdued": string;
            "icon-onSuccess": string;
            "icon-onWarning": string;
            "icon-subdued": string;
            "icon-success": string;
            "icon-warning": string;
            interactive: string;
            "interactive--disabled": string;
            "interactive--hovered": string;
            "interactive--pressed": string;
            overlay: string;
            secondary: string;
            "secondary-subdued": string;
            success: string;
            surface: string;
            "surface--disabled": string;
            "surface--hovered": string;
            "surface--pressed": string;
            "surface--selected": string;
            "surface-accent": string;
            "surface-contrast": string;
            "surface-critical": string;
            "surface-subdued": string;
            "surface-success": string;
            "surface-warning": string;
            text: string;
            "text--disabled": string;
            "text-critical": string;
            "text-dim": string;
            "text-onContrast": string;
            "text-onCritical": string;
            "text-onPrimary": string;
            "text-onPrimary-subdued": string;
            "text-onSuccess": string;
            "text-onWarning": string;
            "text-subdued": string;
            "text-success": string;
            warning: string;
            'color-base-black': "hsl(240, 4%, 5%)";
            'color-base-white': "hsl(0, 0%, 100%)";
            'color-blue-100': "hsl(222, 62%, 96%)";
            'color-blue-200': "hsl(223, 68%, 94%)";
            'color-blue-300': "hsl(224, 81%, 89%)";
            'color-blue-400': "hsl(227, 80%, 72%)";
            'color-blue-500': "hsl(234, 85%, 65%)";
            'color-blue-600': "hsl(245, 100%, 64%)";
            'color-blue-700': "hsl(240, 70%, 46%)";
            'color-blue-800': "hsl(240, 84%, 36%)";
            'color-blue-900': "hsl(241, 82%, 21%)";
            'color-blue-050': "hsl(230, 60%, 98%)";
            'color-green-100': "hsl(120, 40%, 96%)";
            'color-green-300': "hsl(108, 41%, 88%)";
            'color-green-500': "hsl(158, 66%, 40%)";
            'color-green-600': "hsl(158, 100%, 25%)";
            'color-grey-100': "hsl(0, 0%, 96%)";
            'color-grey-200': "hsl(0, 0%, 94%)";
            'color-grey-300': "hsl(0, 0%, 87%)";
            'color-grey-400': "hsl(0, 0%, 60%)";
            'color-grey-500': "hsl(0, 0%, 47%)";
            'color-grey-600': "hsl(0, 0%, 40%)";
            'color-grey-700': "hsl(0, 0%, 20%)";
            'color-grey-800': "hsl(0, 0%, 15%)";
            'color-grey-900': "hsl(0, 0%, 9%)";
            'color-grey-050': "hsl(0, 0%, 98%)";
            'color-orange-100': "hsl(30, 100%, 96%)";
            'color-orange-300': "hsl(30, 100%, 88%)";
            'color-orange-500': "hsl(30, 100%, 74%)";
            'color-orange-600': "hsl(30, 100%, 66%)";
            'color-red-100': "hsl(4, 71%, 96%)";
            'color-red-300': "hsl(4, 74%, 88%)";
            'color-red-500': "hsl(1, 72%, 66%)";
            'color-red-600': "hsl(1, 60%, 49%)";
            'color-slate-100': "hsl(240, 11%, 96%)";
            'color-slate-200': "hsl(240, 10%, 94%)";
            'color-slate-300': "hsl(230, 9%, 87%)";
            'color-slate-400': "hsl(217, 6%, 58%)";
            'color-slate-500': "hsl(220, 4%, 47%)";
            'color-slate-600': "hsl(215, 6%, 41%)";
            'color-slate-700': "hsl(220, 6%, 20%)";
            'color-slate-800': "hsl(216, 6%, 15%)";
            'color-slate-900': "hsl(225, 9%, 9%)";
            'color-slate-050': "hsl(240, 9%, 98%)";
        };
        space: {
            none: string;
            'extra-tight': string;
            tight: string;
            'base-tight': string;
            base: string;
            'base-loose': string;
            loose: string;
            'extra-loose': string;
            auto: string;
            '0': string;
            px: string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '8': string;
            '10': string;
            '12': string;
            '16': string;
            '20': string;
            '24': string;
            '32': string;
            '40': string;
            '48': string;
            '56': string;
            '64': string;
        };
        fontSizes: {
            readonly '0': "12px";
            readonly '1': "14px";
            readonly '2': "16px";
            readonly '3': "20px";
            readonly '4': "24px";
            readonly '5': "32px";
            readonly '6': "40px";
            readonly '7': "48px";
            readonly '8': "64px";
            readonly '9': "72px";
        };
        fonts: {
            readonly body: "'Inter'";
            readonly headlines: "'Open Sauce'";
        };
        fontWeights: {
            light: number;
            base: number;
            semibold: number;
            bold: number;
            extrabold: number;
        };
        lineHeights: {
            readonly '0': "80px";
            readonly '1': "72px";
            readonly '2': "60px";
            readonly '3': "56px";
            readonly '4': "44px";
            readonly '5': "36px";
            readonly '6': "28px";
            readonly '7': "24px";
            readonly '8': "20px";
            readonly '9': "16px";
        };
        letterSpacings: unknown;
        sizes: unknown;
        borderWidths: {
            base: string;
            medium: string;
            thick: string;
        };
        borderStyles: {
            base: string;
        };
        radii: {
            readonly ellipse: "50%";
            readonly 'extra-large': "16px";
            readonly large: "12px";
            readonly medium: "10px";
            readonly small: "4px";
        };
        shadows: {
            readonly large: "0px 16px 40px 0px hsla(240, 4%, 5%, 0.08)";
            readonly low: "0px 1px 2px 0px hsla(240, 4%, 5%, 0.04)";
            readonly medium: "0px 8px 16px 0px hsla(240, 4%, 5%, 0.08)";
        };
        zIndices: {
            base: number;
            mid: number;
            high: number;
            highest: number;
        };
        transitions: {
            slow: string;
            base: string;
            fast: string;
        };
    }, import("@stitches/core/types/config").DefaultThemeMap, {
        m: (value: PropertyValue<'margin'>) => {
            margin: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mt: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mr: (value: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mb: (value: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        ml: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mx: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        my: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        p: (value: PropertyValue<'padding'>) => {
            padding: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pt: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pr: (value: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pb: (value: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pl: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        px: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        py: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        size: (value: PropertyValue<'width'>) => {
            width: {
                readonly [CSSUtil.$$PropertyValue]: "width";
            };
            height: {
                readonly [CSSUtil.$$PropertyValue]: "width";
            };
        };
    }>;
}) => {
    (): string;
    name: string;
}, config: {
    prefix: "";
    media: {
        bp1: "(min-width: 640px)";
        bp2: "(min-width: 768px)";
        bp3: "(min-width: 1024px)";
    };
    theme: {
        colors: {
            background: string;
            border: string;
            "action-critical": string;
            "action-primary": string;
            "action-primary--disabled": string;
            "action-primary--hovered": string;
            "action-primary--pressed": string;
            "action-secondary": string;
            "action-secondary--disabled": string;
            "action-secondary--hovered": string;
            "action-subdued": string;
            "action-subdued--disabled": string;
            "action-subdued--hovered": string;
            "action-subdued--pressed": string;
            "action-warning": string;
            "background-subdued": string;
            "border--disabled": string;
            "border--focused": string;
            "border-accent": string;
            "border-critical": string;
            "border-subdued": string;
            "border-success": string;
            "border-warning": string;
            icon: string;
            "icon--disabled": string;
            "icon-accent": string;
            "icon-critical": string;
            "icon-onCritical": string;
            "icon-onPrimary": string;
            "icon-onPrimary-subdued": string;
            "icon-onSuccess": string;
            "icon-onWarning": string;
            "icon-subdued": string;
            "icon-success": string;
            "icon-warning": string;
            interactive: string;
            "interactive--disabled": string;
            "interactive--hovered": string;
            "interactive--pressed": string;
            overlay: string;
            secondary: string;
            "secondary-subdued": string;
            success: string;
            surface: string;
            "surface--disabled": string;
            "surface--hovered": string;
            "surface--pressed": string;
            "surface--selected": string;
            "surface-accent": string;
            "surface-contrast": string;
            "surface-critical": string;
            "surface-subdued": string;
            "surface-success": string;
            "surface-warning": string;
            text: string;
            "text--disabled": string;
            "text-critical": string;
            "text-dim": string;
            "text-onContrast": string;
            "text-onCritical": string;
            "text-onPrimary": string;
            "text-onPrimary-subdued": string;
            "text-onSuccess": string;
            "text-onWarning": string;
            "text-subdued": string;
            "text-success": string;
            warning: string;
            'color-base-black': "hsl(240, 4%, 5%)";
            'color-base-white': "hsl(0, 0%, 100%)";
            'color-blue-100': "hsl(222, 62%, 96%)";
            'color-blue-200': "hsl(223, 68%, 94%)";
            'color-blue-300': "hsl(224, 81%, 89%)";
            'color-blue-400': "hsl(227, 80%, 72%)";
            'color-blue-500': "hsl(234, 85%, 65%)";
            'color-blue-600': "hsl(245, 100%, 64%)";
            'color-blue-700': "hsl(240, 70%, 46%)";
            'color-blue-800': "hsl(240, 84%, 36%)";
            'color-blue-900': "hsl(241, 82%, 21%)";
            'color-blue-050': "hsl(230, 60%, 98%)";
            'color-green-100': "hsl(120, 40%, 96%)";
            'color-green-300': "hsl(108, 41%, 88%)";
            'color-green-500': "hsl(158, 66%, 40%)";
            'color-green-600': "hsl(158, 100%, 25%)";
            'color-grey-100': "hsl(0, 0%, 96%)";
            'color-grey-200': "hsl(0, 0%, 94%)";
            'color-grey-300': "hsl(0, 0%, 87%)";
            'color-grey-400': "hsl(0, 0%, 60%)";
            'color-grey-500': "hsl(0, 0%, 47%)";
            'color-grey-600': "hsl(0, 0%, 40%)";
            'color-grey-700': "hsl(0, 0%, 20%)";
            'color-grey-800': "hsl(0, 0%, 15%)";
            'color-grey-900': "hsl(0, 0%, 9%)";
            'color-grey-050': "hsl(0, 0%, 98%)";
            'color-orange-100': "hsl(30, 100%, 96%)";
            'color-orange-300': "hsl(30, 100%, 88%)";
            'color-orange-500': "hsl(30, 100%, 74%)";
            'color-orange-600': "hsl(30, 100%, 66%)";
            'color-red-100': "hsl(4, 71%, 96%)";
            'color-red-300': "hsl(4, 74%, 88%)";
            'color-red-500': "hsl(1, 72%, 66%)";
            'color-red-600': "hsl(1, 60%, 49%)";
            'color-slate-100': "hsl(240, 11%, 96%)";
            'color-slate-200': "hsl(240, 10%, 94%)";
            'color-slate-300': "hsl(230, 9%, 87%)";
            'color-slate-400': "hsl(217, 6%, 58%)";
            'color-slate-500': "hsl(220, 4%, 47%)";
            'color-slate-600': "hsl(215, 6%, 41%)";
            'color-slate-700': "hsl(220, 6%, 20%)";
            'color-slate-800': "hsl(216, 6%, 15%)";
            'color-slate-900': "hsl(225, 9%, 9%)";
            'color-slate-050': "hsl(240, 9%, 98%)";
        };
        space: {
            none: string;
            'extra-tight': string;
            tight: string;
            'base-tight': string;
            base: string;
            'base-loose': string;
            loose: string;
            'extra-loose': string;
            auto: string;
            '0': string;
            px: string;
            '1': string;
            '2': string;
            '3': string;
            '4': string;
            '5': string;
            '6': string;
            '8': string;
            '10': string;
            '12': string;
            '16': string;
            '20': string;
            '24': string;
            '32': string;
            '40': string;
            '48': string;
            '56': string;
            '64': string;
        };
        fontSizes: {
            readonly '0': "12px";
            readonly '1': "14px";
            readonly '2': "16px";
            readonly '3': "20px";
            readonly '4': "24px";
            readonly '5': "32px";
            readonly '6': "40px";
            readonly '7': "48px";
            readonly '8': "64px";
            readonly '9': "72px";
        };
        fonts: {
            readonly body: "'Inter'";
            readonly headlines: "'Open Sauce'";
        };
        fontWeights: {
            light: number;
            base: number;
            semibold: number;
            bold: number;
            extrabold: number;
        };
        lineHeights: {
            readonly '0': "80px";
            readonly '1': "72px";
            readonly '2': "60px";
            readonly '3': "56px";
            readonly '4': "44px";
            readonly '5': "36px";
            readonly '6': "28px";
            readonly '7': "24px";
            readonly '8': "20px";
            readonly '9': "16px";
        };
        letterSpacings: unknown;
        sizes: unknown;
        borderWidths: {
            base: string;
            medium: string;
            thick: string;
        };
        borderStyles: {
            base: string;
        };
        radii: {
            readonly ellipse: "50%";
            readonly 'extra-large': "16px";
            readonly large: "12px";
            readonly medium: "10px";
            readonly small: "4px";
        };
        shadows: {
            readonly large: "0px 16px 40px 0px hsla(240, 4%, 5%, 0.08)";
            readonly low: "0px 1px 2px 0px hsla(240, 4%, 5%, 0.04)";
            readonly medium: "0px 8px 16px 0px hsla(240, 4%, 5%, 0.08)";
        };
        zIndices: {
            base: number;
            mid: number;
            high: number;
            highest: number;
        };
        transitions: {
            slow: string;
            base: string;
            fast: string;
        };
    };
    themeMap: import("@stitches/core/types/config").DefaultThemeMap;
    utils: {
        m: (value: PropertyValue<'margin'>) => {
            margin: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mt: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mr: (value: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mb: (value: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        ml: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        mx: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        my: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [CSSUtil.$$PropertyValue]: "margin";
            };
        };
        p: (value: PropertyValue<'padding'>) => {
            padding: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pt: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pr: (value: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pb: (value: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        pl: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        px: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        py: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [CSSUtil.$$PropertyValue]: "padding";
            };
        };
        size: (value: PropertyValue<'width'>) => {
            width: {
                readonly [CSSUtil.$$PropertyValue]: "width";
            };
            height: {
                readonly [CSSUtil.$$PropertyValue]: "width";
            };
        };
    };
}, reset: () => void;
declare const darkTheme: string & {
    className: string;
    selector: string;
} & import("@stitches/core/types/stitches").ThemeTokens<{
    colors: {
        background: string;
        border: string;
        "action-critical": string;
        "action-primary": string;
        "action-primary--disabled": string;
        "action-primary--hovered": string;
        "action-primary--pressed": string;
        "action-secondary": string;
        "action-secondary--disabled": string;
        "action-secondary--hovered": string;
        "action-subdued": string;
        "action-subdued--disabled": string;
        "action-subdued--hovered": string;
        "action-subdued--pressed": string;
        "action-warning": string;
        "background-subdued": string;
        "border--disabled": string;
        "border--focused": string;
        "border-accent": string;
        "border-critical": string;
        "border-subdued": string;
        "border-success": string;
        "border-warning": string;
        icon: string;
        "icon--disabled": string;
        "icon-accent": string;
        "icon-critical": string;
        "icon-onCritical": string;
        "icon-onPrimary": string;
        "icon-onPrimary-subdued": string;
        "icon-onSuccess": string;
        "icon-onWarning": string;
        "icon-subdued": string;
        "icon-success": string;
        "icon-warning": string;
        interactive: string;
        "interactive--disabled": string;
        "interactive--hovered": string;
        "interactive--pressed": string;
        overlay: string;
        secondary: string;
        "secondary-subdued": string;
        success: string;
        surface: string;
        "surface--disabled": string;
        "surface--hovered": string;
        "surface--pressed": string;
        "surface--selected": string;
        "surface-accent": string;
        "surface-contrast": string;
        "surface-critical": string;
        "surface-subdued": string;
        "surface-success": string;
        "surface-warning": string;
        text: string;
        "text--disabled": string;
        "text-critical": string;
        "text-dim": string;
        "text-onContrast": string;
        "text-onCritical": string;
        "text-onPrimary": string;
        "text-onPrimary-subdued": string;
        "text-onSuccess": string;
        "text-onWarning": string;
        "text-subdued": string;
        "text-success": string;
        warning: string;
        'color-base-black': "hsl(240, 4%, 5%)";
        'color-base-white': "hsl(0, 0%, 100%)";
        'color-blue-100': "hsl(222, 62%, 96%)";
        'color-blue-200': "hsl(223, 68%, 94%)";
        'color-blue-300': "hsl(224, 81%, 89%)";
        'color-blue-400': "hsl(227, 80%, 72%)";
        'color-blue-500': "hsl(234, 85%, 65%)";
        'color-blue-600': "hsl(245, 100%, 64%)";
        'color-blue-700': "hsl(240, 70%, 46%)";
        'color-blue-800': "hsl(240, 84%, 36%)";
        'color-blue-900': "hsl(241, 82%, 21%)";
        'color-blue-050': "hsl(230, 60%, 98%)";
        'color-green-100': "hsl(120, 40%, 96%)";
        'color-green-300': "hsl(108, 41%, 88%)";
        'color-green-500': "hsl(158, 66%, 40%)";
        'color-green-600': "hsl(158, 100%, 25%)";
        'color-grey-100': "hsl(0, 0%, 96%)";
        'color-grey-200': "hsl(0, 0%, 94%)";
        'color-grey-300': "hsl(0, 0%, 87%)";
        'color-grey-400': "hsl(0, 0%, 60%)";
        'color-grey-500': "hsl(0, 0%, 47%)";
        'color-grey-600': "hsl(0, 0%, 40%)";
        'color-grey-700': "hsl(0, 0%, 20%)";
        'color-grey-800': "hsl(0, 0%, 15%)";
        'color-grey-900': "hsl(0, 0%, 9%)";
        'color-grey-050': "hsl(0, 0%, 98%)";
        'color-orange-100': "hsl(30, 100%, 96%)";
        'color-orange-300': "hsl(30, 100%, 88%)";
        'color-orange-500': "hsl(30, 100%, 74%)";
        'color-orange-600': "hsl(30, 100%, 66%)";
        'color-red-100': "hsl(4, 71%, 96%)";
        'color-red-300': "hsl(4, 74%, 88%)";
        'color-red-500': "hsl(1, 72%, 66%)";
        'color-red-600': "hsl(1, 60%, 49%)";
        'color-slate-100': "hsl(240, 11%, 96%)";
        'color-slate-200': "hsl(240, 10%, 94%)";
        'color-slate-300': "hsl(230, 9%, 87%)";
        'color-slate-400': "hsl(217, 6%, 58%)";
        'color-slate-500': "hsl(220, 4%, 47%)";
        'color-slate-600': "hsl(215, 6%, 41%)";
        'color-slate-700': "hsl(220, 6%, 20%)";
        'color-slate-800': "hsl(216, 6%, 15%)";
        'color-slate-900': "hsl(225, 9%, 9%)";
        'color-slate-050': "hsl(240, 9%, 98%)";
    };
    space: {
        none: string;
        'extra-tight': string;
        tight: string;
        'base-tight': string;
        base: string;
        'base-loose': string;
        loose: string;
        'extra-loose': string;
        auto: string;
        '0': string;
        px: string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '8': string;
        '10': string;
        '12': string;
        '16': string;
        '20': string;
        '24': string;
        '32': string;
        '40': string;
        '48': string;
        '56': string;
        '64': string;
    };
    fontSizes: {
        readonly '0': "12px";
        readonly '1': "14px";
        readonly '2': "16px";
        readonly '3': "20px";
        readonly '4': "24px";
        readonly '5': "32px";
        readonly '6': "40px";
        readonly '7': "48px";
        readonly '8': "64px";
        readonly '9': "72px";
    };
    fonts: {
        readonly body: "'Inter'";
        readonly headlines: "'Open Sauce'";
    };
    fontWeights: {
        light: number;
        base: number;
        semibold: number;
        bold: number;
        extrabold: number;
    };
    lineHeights: {
        readonly '0': "80px";
        readonly '1': "72px";
        readonly '2': "60px";
        readonly '3': "56px";
        readonly '4': "44px";
        readonly '5': "36px";
        readonly '6': "28px";
        readonly '7': "24px";
        readonly '8': "20px";
        readonly '9': "16px";
    };
    letterSpacings: {};
    sizes: {};
    borderWidths: {
        base: string;
        medium: string;
        thick: string;
    };
    borderStyles: {
        base: string;
    };
    radii: {
        readonly ellipse: "50%";
        readonly 'extra-large': "16px";
        readonly large: "12px";
        readonly medium: "10px";
        readonly small: "4px";
    };
    shadows: {
        readonly large: "0px 16px 40px 0px hsla(240, 4%, 5%, 0.08)";
        readonly low: "0px 1px 2px 0px hsla(240, 4%, 5%, 0.04)";
        readonly medium: "0px 8px 16px 0px hsla(240, 4%, 5%, 0.08)";
    };
    zIndices: {
        base: number;
        mid: number;
        high: number;
        highest: number;
    };
    transitions: {
        slow: string;
        base: string;
        fast: string;
    };
}, "">;
export declare type CSSTypes = CSSUtil.CSS<typeof config['media'], typeof config['theme'], typeof config['themeMap'], typeof config['utils']>;
export { css, getCssText, theme, createTheme, globalCss, prefix, keyframes, config, reset, darkTheme, };
