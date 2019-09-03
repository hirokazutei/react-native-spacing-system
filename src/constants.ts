type DefaultDebugColorKeys = "stack" | "queue" | "inset";
type DefaultDebugBorderKeys = "stack" | "queue";

export const DEFAULT_DEBUG_COLORS: {
  [key in DefaultDebugColorKeys]: string;
} = {
  stack: "#45e6e6",
  queue: "#e645e6",
  inset: "#e6e645"
};
export const DEFAULT_DEFAULT_BORDER_COLORS: {
  [key in DefaultDebugBorderKeys]: string;
} = {
  stack: "#45b8b8",
  queue: "#b845b8"
};

export const DEBUG_BORDER_THICKNESS = 1;
