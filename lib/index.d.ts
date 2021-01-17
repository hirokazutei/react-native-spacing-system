/// <reference types="react" />
import { DebugContext } from "./Context";
import { DebugContextProps, DebugItemProps, InsetDebugItemProps } from "./Context/types";
import Inset from "./Inset";
import insetFactory from "./Inset/insetFactory";
import { All, InsetDebugOptions, Horizontal, InsetProps, LayoutStyle, Other, PaddingPossibilities, VerHor, Vertical, InsetStyles } from "./Inset/insetTypes";
import Stack from "./Stack";
import stackFactory from "./Stack/stackFactory";
import { StackDebugOptions, StackProps, StackStyles } from "./Stack/stackTypes";
import Queue from "./Queue";
import queueFactory from "./Queue/queueFactory";
import { QueueDebugOptions, QueueProps, QueueStyles } from "./Queue/queueTypes";
declare function spacingFactory<SpacingKeys, DisallowLayout extends boolean | undefined = undefined>(spacing: {
    [K in keyof SpacingKeys]: number;
}, disallowLayout?: DisallowLayout): {
    Inset: import("react").FunctionComponent<InsetProps<keyof SpacingKeys, DisallowLayout>>;
    Stack: import("react").FunctionComponent<StackProps<keyof SpacingKeys>>;
    Queue: import("react").FunctionComponent<QueueProps<keyof SpacingKeys>>;
};
export { DebugContext, DebugContextProps, InsetDebugItemProps, DebugItemProps, Inset, insetFactory, All, InsetDebugOptions, Horizontal, InsetProps, LayoutStyle, Other, PaddingPossibilities, VerHor, Vertical, InsetStyles, spacingFactory, Stack, stackFactory, StackDebugOptions, StackProps, StackStyles, Queue, queueFactory, QueueDebugOptions, QueueProps, QueueStyles, };
//# sourceMappingURL=index.d.ts.map