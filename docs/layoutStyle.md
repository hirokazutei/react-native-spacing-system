# Layout Style

## Type

```jsx
type CommonFlexType = "flex-start" | "flex-end" | "center";

type LayoutStyle = {
  alignContent?: CommonFlexType | "stretch" | "space-between" | "space-around",
  alignItems?: CommonFlexType | "baseline" | "stretch",
  alignSelf?: CommonFlexType | "auto" | "baseline" | "stretch",
  aspectRatio?: number,
  bottom?: number | string,
  direction?: "inherit" | "ltr" | "rtl", // iOS Only
  display?: "none" | "flex",
  end?: number | string,
  flex?: number,
  flexBasis?: number | string,
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse",
  flexGrow?: number,
  flexShrink?: number,
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse",
  height?: number | string,
  justifyContent?:
    | CommonFlexType
    | "space-between"
    | "space-around"
    | "space-evenly",
  left?: number | string,
  maxHeight?: number | string,
  maxWidth?: number | string,
  minHeight?: number | string,
  minWidth?: number | string,
  overflow?: "visible" | "hidden" | "scroll",
  position?: "absolute" | "relative",
  right?: number | string,
  start?: number | string,
  top?: number | string,
  width?: number | string,
  zIndex?: number,
};
```

## Explanation

One way to look at the `LayoutStyle` is ReactNative's `FlexStyle` with `border`, `margin` and `padding` related attributes removed. `Inset` determines the offset between the children and the surrounding element(s) as well as how these items are layouted, therefore `margin` and `padding` attributes are redundant. The reason to why `border` related attributes are removed is because it is not exactly layouting, and it requires a color to be meaningful, therefore should be delegated to a `View` component that handles other non-layout related styles.
