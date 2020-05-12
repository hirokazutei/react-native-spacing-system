import { PaddingPossibilities, InsetStyles } from "./insetTypes";
export declare function convertInsetPaddingKeyToValue<T>({ keyedPaddings, spacing, }: {
    keyedPaddings: PaddingPossibilities<keyof T>;
    spacing: {
        [K in keyof T]: number;
    };
}): PaddingPossibilities<number>;
export declare const obtainInsetPaddingStyle: ({ paddings, }: {
    paddings: PaddingPossibilities<number>;
}) => InsetStyles;
//# sourceMappingURL=insetHelper.d.ts.map