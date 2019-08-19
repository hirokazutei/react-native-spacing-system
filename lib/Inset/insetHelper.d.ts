import { InsetDebugOptions, PaddingPossibilities, InsetStyles } from "./insetTypes";
export declare function convertInsetPaddingKeyToValue<T>({ keyedPaddings, spacing }: {
    keyedPaddings: PaddingPossibilities<keyof T>;
    spacing: {
        [K in keyof T]: number;
    };
}): PaddingPossibilities<number>;
export declare const obtainInsetPaddingStyle: ({ paddings, debugOptions }: {
    paddings: PaddingPossibilities<number>;
    debugOptions?: InsetDebugOptions | undefined;
}) => InsetStyles;
//# sourceMappingURL=insetHelper.d.ts.map