import { DebugContext } from "./Context";
import {
  DebugContextProps,
  DebugItemProps,
  InsetDebugItemProps,
} from "./Context/types";
import Inset from "./Inset";
import insetFactory from "./Inset/insetFactory";
import {
  All,
  InsetDebugOptions,
  Horizontal,
  InsetProps,
  LayoutStyle,
  Other,
  PaddingPossibilities,
  VerHor,
  Vertical,
  InsetStyles,
} from "./Inset/insetTypes";
import Stack from "./Stack";
import stackFactory from "./Stack/stackFactory";
import { StackDebugOptions, StackProps, StackStyles } from "./Stack/stackTypes";
import Queue from "./Queue";
import queueFactory from "./Queue/queueFactory";
import { QueueDebugOptions, QueueProps, QueueStyles } from "./Queue/queueTypes";

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
  All,
  InsetDebugOptions,
  Horizontal,
  InsetProps,
  LayoutStyle,
  Other,
  PaddingPossibilities,
  VerHor,
  Vertical,
  InsetStyles,
  spacingFactory,
  Stack,
  stackFactory,
  StackDebugOptions,
  StackProps,
  StackStyles,
  Queue,
  queueFactory,
  QueueDebugOptions,
  QueueProps,
  QueueStyles,
};
