import type * as Native from './css';
import type * as ThemeUtil from './theme';
import type * as Util from './util';
import {DefaultThemeMap} from '@stitches/core';

export {Native};

export interface CSSProperties extends Native.StandardLonghandProperties, Native.StandardShorthandProperties, Native.SvgProperties {
}

declare type ValueByPropertyName<PropertyName> = PropertyName extends keyof CSSProperties ? CSSProperties[PropertyName] : never;
declare type TokenByPropertyName<PropertyName, Theme, ThemeMap> = PropertyName extends keyof ThemeMap ? TokenByScaleName<ThemeMap[PropertyName], Theme> : never;
declare type TokenByScaleName<ScaleName, Theme> = ScaleName extends keyof Theme ? Util.Prefixed<'$', keyof Theme[ScaleName]> : never;
export declare type CSS<Media = {}, Theme = {}, ThemeMap = DefaultThemeMap, Utils = {}> = {
  [K in Util.Prefixed<'@', keyof Media>]?: CSS<Media, Theme, ThemeMap, Utils>;
} & {
  [K in keyof Utils as K extends keyof CSSProperties ? never : K]?: Utils[K] extends (arg: infer P) => any ? (P extends any[] ? ($$PropertyValue extends keyof P[0] ? ValueByPropertyName<P[0][$$PropertyValue]> | TokenByPropertyName<P[0][$$PropertyValue], Theme, ThemeMap> | Native.Globals | ThemeUtil.ScaleValue | undefined : $$ScaleValue extends keyof P[0] ? TokenByScaleName<P[0][$$ScaleValue], Theme> | {
    scale: P[0][$$ScaleValue];
  } | undefined : never)[] | P : $$PropertyValue extends keyof P ? ValueByPropertyName<P[$$PropertyValue]> | TokenByPropertyName<P[$$PropertyValue], Theme, ThemeMap> | Native.Globals | undefined : $$ScaleValue extends keyof P ? TokenByScaleName<P[$$ScaleValue], Theme> | {
    scale: P[$$ScaleValue];
  } | undefined : never) | P : never;
} & {
  [K in keyof ThemeMap as K extends keyof CSSProperties ? never : K extends keyof Utils ? never : K]?: Native.Globals | Util.Index | undefined;
} & {
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | TokenByPropertyName<K, Theme, ThemeMap> | Native.Globals | ThemeUtil.ScaleValue | Util.Index | undefined;
};
export declare const $$PropertyValue: unique symbol;
export declare type $$PropertyValue = typeof $$PropertyValue;
export declare const $$ScaleValue: unique symbol;
export declare type $$ScaleValue = typeof $$ScaleValue;
export declare const $$ThemeValue: unique symbol;
export declare type $$ThemeValue = typeof $$ThemeValue;
export declare type PropertyValue<Property extends keyof CSSProperties, Config = null> = Config extends null ? {
  readonly [K in $$PropertyValue]: Property;
} : Config extends {
  [K: string]: any;
} ? CSS<Config['media'], Config['theme'], Config['themeMap'], Config['utils']>[Property] : never;
