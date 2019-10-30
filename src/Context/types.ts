export type DebugItemProps = {
  debug?: boolean;
  color?: string;
  border?: boolean;
  borderColor?: string;
  opacity?: number;
};

export type InsetDebugItemProps = Omit<
  DebugItemProps,
  "border" | "borderColor"
>;

export type DebugContextProps = {
  debug: boolean;
  inset?: InsetDebugItemProps;
  queue?: DebugItemProps;
  stack?: DebugItemProps;
};
