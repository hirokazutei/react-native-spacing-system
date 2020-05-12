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

function spacingFactory<T>(spacing: { [K in keyof T]: number }) {
  const Inset = insetFactory<T>(spacing);
  const Stack = stackFactory<T>(spacing);
  const Queue = queueFactory<T>(spacing);
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
