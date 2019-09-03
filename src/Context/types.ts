export type DebugItemProps = { debug: boolean; color: string };

export type DebugContextProps = {
  debug: boolean;
  inset?: DebugItemProps;
  queue?: DebugItemProps;
  stack?: DebugItemProps;
};
