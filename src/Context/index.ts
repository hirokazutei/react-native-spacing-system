import * as React from "react";
import { DebugContextProps } from "./types";

export const DebugContext: React.Context<DebugContextProps> = React.createContext(
  {
    debug: false as boolean,
  }
);
