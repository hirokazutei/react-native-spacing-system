import { DebugContext } from "./Context";
import {
  DebugContextProps,
  DebugItemProps,
  InsetDebugItemProps,
} from "./Context/types";
import Inset from "./Inset";
import insetFactory from "./Inset/insetFactory";
import {
  All as InsetPaddingAllType,
  InsetDebugOptions,
  Horizontal as InsetPaddingHorizontalType,
  InsetProps,
  LayoutStyle,
  Other as InsetPaddingOtherType,
  PaddingPossibilities as InsetPaddingType,
  VerHor as InsetPaddingVerHorType,
  Vertical as InsetPaddingVerticalType,
} from "./Inset/insetTypes";

import Stack from "./Stack";
import stackFactory from "./Stack/stackFactory";
import { StackDebugOptions, StackProps } from "./Stack/stackTypes";
import Queue from "./Queue";
import queueFactory from "./Queue/queueFactory";
import { QueueDebugOptions, QueueProps } from "./Queue/queueTypes";

function spacingFactory<
  SpacingKeys,
  DisallowLayout extends boolean | undefined = undefined
>(
  spacing: { [K in keyof SpacingKeys]: number },
  disallowLayout?: DisallowLayout
) {
  const Inset = insetFactory<SpacingKeys, DisallowLayout>(
    spacing,
    disallowLayout
  );
  const Stack = stackFactory<SpacingKeys>(spacing);
  const Queue = queueFactory<SpacingKeys>(spacing);
  return { Inset, Stack, Queue };
}

export {
  DebugContext,
  DebugContextProps,
  InsetDebugItemProps,
  DebugItemProps,
  Inset,
  insetFactory,
  InsetDebugOptions,
  InsetPaddingAllType,
  InsetPaddingHorizontalType,
  InsetPaddingOtherType,
  InsetPaddingType,
  InsetPaddingVerHorType,
  InsetPaddingVerticalType,
  InsetProps,
  LayoutStyle,
  spacingFactory,
  Stack,
  stackFactory,
  StackDebugOptions,
  StackProps,
  Queue,
  queueFactory,
  QueueDebugOptions,
  QueueProps,
};
