import * as React from "react";

export type DebugItemProperty = { debug: boolean; color: string };

export type DebugContext = {
  debug: boolean;
  inset?: DebugItemProperty;
  queue?: DebugItemProperty;
  stack?: DebugItemProperty;
};

export const DebugContext: React.Context<DebugContext> = React.createContext({
  debug: false as boolean
});
