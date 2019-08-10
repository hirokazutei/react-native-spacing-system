type DefaultDebugColorKeys = "stack" | "queue" | "inset";
type DefaultDebugBorderKeys = "stack" | "queue";

export const defaultDebugColor: { [key in DefaultDebugColorKeys]: string } = {
  stack: "#00FFFF",
  queue: "#FF00FF",
  inset: "#FFFF00"
};
export const defaultBorderColor: { [key in DefaultDebugBorderKeys]: string } = {
  stack: "#0080ff",
  queue: "#ff0080"
};
