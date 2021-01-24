# Exported Types

## DebugContext

### DebugContextProps

> The `props` passed into the debug context.

- `debug`: `boolean` if debug mode is on or not
- [Optional] `inset`: `InsetDebugItemProps`
- [Optional] `queue`: `DebugItemProps`
- [Optional] `stack`: `DebugItemProps`

### DebugItemProps

> The `props` passed into `Context` to control `Stack`'s and `Queue`'s debug options.

- [Optional] `debug`: `boolean` if debug mode is on or not
- [Optional] `color`: `string` the color of the debug shade
- [Optional] `border`: `boolean` to show the debug border or not
- [Optional] `borderColor`: `string` the color of the debug border
- [Optional] `opacity`: `number` the opacity of the debug elements

### InsetDebugItemProps

> The `props` passed into `Context` to control `Inset`'s debug options.

- [Optional] `debug`: `boolean` if debug mode is on or not
- [Optional] `color`: `string` the color of the debug shade

## Stack

### StackProps

> The `props` passed into `Stack`.

- `size`: `number` or keys declared to indicate size
- [Optional] `_debug`: `boolean` if debug mode is on for the component or not
- [Optional] `_debugOptions`: `StackDebugOptions` controls the debugging options for the component

### StackDebugOptions

> The `props` passed into `Stack`'s `_debugOptions`.

- [Optional] `color`: `string` the color of the debug shade
- [Optional] `border`: `boolean` to show the debug border or not
- [Optional] `borderColor`: `string` the color of the debug border
- [Optional] `opacity`: `number` the opacity of the debug elements

## Queue

### QueueProps

> The `props` passed into `Queue`.

- `size`: `number` or keys declared to indicate size
- [Optional] `_debug`: `boolean` if debug mode is on for the component or not
- [Optional] `_debugOptions`: `StackDebugOptions` controls the debugging options for the component

### QueueDebugOptions

> The `props` passed into `Queue`'s `_debugOptions`.

- [Optional] `color`: `string` the color of the debug shade
- [Optional] `border`: `boolean` to show the debug border or not
- [Optional] `borderColor`: `string` the color of the debug border
- [Optional] `opacity`: `number` the opacity of the debug elements

## Inset

### InsetProps

> The `props` passed into `Inset`.

- This type is a union type of the intersection between `InsetOtherProps` and various cases of `InsetPadingType`.
- To put it more simply, this type is a combination of `InsetOtherProps` (could be `InsetLayoutlessOtherProps` in Flow) and one of:
  - `InsetPaddingAllType`
  - `InsetPaddingVerHorType`
  - `InsetPaddingHorizontalType`
  - `InsetPaddingVerticalType`
  - `InsetPaddingOtherType`

### InsetDebugOptions

> The `props` passed into `Inset`'s `_debugOptions`.

- [Optional] `color`: `string` the color of the debug shade

### InsetOtherProps

> The non-padding related `props` passed into `Inset`.

- children: `React.Node` the content passed into the `Inset`
- [Optional] `layout`: `LayoutStyle` more on [LayoutStyle](https://github.com/hirokazutei/react-native-spacing-system/blob/develop/docs/layoutStyle.md)
- [Optional] `onLayout`: `(event: LayoutChangeEvent) => void` Callback for when the component mounts or changes layout.
- [Optional] `_debug`: `boolean` if debug mode is on for the component or not
- [Optional] `_debugOptions`: `InsetDebugOptions` controls the debugging options for the component

### InsetLayoutlessOtherProps [Flow Only]

> The non-padding related `props` without the `layout` prop passed into `Inset`.

- children: `React.Node` the content passed into the `Inset`
- [Optional] `_debug`: `boolean` if debug mode is on for the component or not
- [Optional] `_debugOptions`: `InsetDebugOptions` controls the debugging options for the component

### InsetPaddingType

> The possible padding `props` for `Inset`.

- A union type of different padding combinations.

#### InsetPaddingAllType

> The padding type where `all` is being used.

- `all`: `number` or keys declared to indicate size of padding from all sides

### InsetPaddingVerHorType

> The padding type where `vertical` and `horizontal` are being used.

- `horizontal`: `number` or keys declared to indicate size of padding from horizontal sides
- `vertical`: `number` or keys declared to indicate size of padding from vertical sides

### InsetPaddingVerticalType

> The padding type where `vertical` is being used.

- `vertical`: `number` or keys declared to indicate size of padding from vertical sides
- [Optional] `right`: `number` or keys declared to indicate size of padding from right side
- [Optional] `left`: `number` or keys declared to indicate size of padding from left side

#### InsetPaddingHorizontalType

> The padding type where `horizontal` is being used.

- `horizontal`: `number` or keys declared to indicate size of padding from horizontal sides
- [Optional] `top`: `number` or keys declared to indicate size of padding from top side
- [Optional] `bottom`: `number` or keys declared to indicate size of padding from bottom side

#### InsetPaddingOtherType

> The padding type where `all`, `vertical` and `horizontal` or not used, and one of the `top`, `right`, `bottom`, or `left` is being used.

- This type is a union of:
  - `InsetPaddingOtherTopType`
  - `InsetPaddingOtherRightType`
  - `InsetPaddingOtherBottomType`
  - `InsetPaddingOtherLeftType`
- The issue it attempts to solve is never for `Inset` to have no padding, therefore making one of the padding options always necessary.

##### InsetPaddingOtherTopType

> The padding type where `top` is required.

##### InsetPaddingOtherRightType

> The padding type where `right` is required.

##### InsetPaddingOtherBottomType

> The padding type where `bottom` is required.

##### InsetPaddingOtherLeftType

> The padding type where `left` is required.
