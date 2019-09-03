export declare type DebugItemProps = {
    debug?: boolean;
    color?: string;
    border?: boolean;
    borderColor?: string;
};
export declare type InsetDebugItemProps = Omit<DebugItemProps, "border" | "borderColor">;
export declare type DebugContextProps = {
    debug: boolean;
    inset?: InsetDebugItemProps;
    queue?: DebugItemProps;
    stack?: DebugItemProps;
};
//# sourceMappingURL=types.d.ts.map