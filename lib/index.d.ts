/// <reference types="react" />
import { DebugContext } from "./Context";
import { DebugContextProps, DebugItemProps, InsetDebugItemProps } from "./Context/types";
import Inset from "./Inset";
import insetFactory from "./Inset/insetFactory";
import { All as InsetPaddingAllType, InsetDebugOptions, Horizontal as InsetPaddingHorizontalType, InsetProps, LayoutStyle, Other as InsetPaddingOtherType, OtherT as InsetPaddingOtherTopType, OtherR as InsetPaddingOtherRightType, OtherB as InsetPaddingOtherBottomType, OtherL as InsetPaddingOtherLeftType, PaddingPossibilities as InsetPaddingType, VerHor as InsetPaddingVerHorType, Vertical as InsetPaddingVerticalType } from "./Inset/insetTypes";
import Stack from "./Stack";
import stackFactory from "./Stack/stackFactory";
import { StackDebugOptions, StackProps } from "./Stack/stackTypes";
import Queue from "./Queue";
import queueFactory from "./Queue/queueFactory";
import { QueueDebugOptions, QueueProps } from "./Queue/queueTypes";
declare function spacingFactory<SpacingKeys, DisallowLayout extends boolean | undefined = undefined>(spacing: {
    [K in keyof SpacingKeys]: number;
}, disallowLayout?: DisallowLayout): {
    Inset: import("react").FunctionComponent<InsetProps<keyof SpacingKeys, DisallowLayout>>;
    Stack: import("react").FunctionComponent<StackProps<keyof SpacingKeys>>;
    Queue: import("react").FunctionComponent<QueueProps<keyof SpacingKeys>>;
};
export { DebugContext, DebugContextProps, InsetDebugItemProps, DebugItemProps, Inset, insetFactory, InsetDebugOptions, InsetPaddingAllType, InsetPaddingHorizontalType, InsetPaddingOtherType, InsetPaddingOtherTopType, InsetPaddingOtherRightType, InsetPaddingOtherBottomType, InsetPaddingOtherLeftType, InsetPaddingType, InsetPaddingVerHorType, InsetPaddingVerticalType, InsetProps, LayoutStyle, spacingFactory, Stack, stackFactory, StackDebugOptions, StackProps, Queue, queueFactory, QueueDebugOptions, QueueProps, };
//# sourceMappingURL=index.d.ts.map