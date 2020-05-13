<h1 align="center">
    React Native Spacing System
</h1>
<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" />
    </a>
    <a href="https://www.npmjs.org/package/react-native-spacing-system">
        <img src="https://img.shields.io/npm/v/react-native-spacing-system.svg?style=for-the-badge&color=blue" />
    </a>
    <a href="https://github.com/hirokazutei/react-native-spacing-system/commits/develop">
        <img src="https://img.shields.io/github/last-commit/hirokazutei/react-native-spacing-system.svg?style=for-the-badge" />
    </a>
    <a href="https://github.com/hirokazutei/react-native-spacing-system/pulls">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge" />
    </a>
</p>

<p align="center">
    <a href="https://facebook.github.io/react-native/">
        <img src="https://img.shields.io/badge/-ReactNative-black.svg?style=for-the-badge&logo=react&logoColor=white&color=61DAFB">
    </a>
    <a href="https://www.npmjs.com/package/react-native-spacing-system">
        <img src="https://img.shields.io/badge/-NPM-black.svg?style=for-the-badge&logo=NPM&color=CB3837">
    </a>
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/-Typescript-black.svg?style=for-the-badge&logo=typescript&color=007ACC">
    </a>
    <a href="https://flow.org/">
        <img src="https://img.shields.io/badge/Supports-Flow_type-black.svg?style=for-the-badge&color=E8BD36">
    </a>
</p>

Using margin and padding to control spacing between components introduces too many ways to accomplish the same goal. React Native Spacing System seeks to standardize your React Native code and increase legibility though the usage of spacing components.

Factory method are provided so that you can use your own spacing key instead of raw value.

TypeScript and Flow are both supported!

# Installation

```
npm install react-native-spacing-system
```

or

```
yarn add react-native-spacing-system
```

# Sentiment & Rationalization

Inspired by Nathan Curtis's Medium article [Space In Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62) and this [react-spacing](https://github.com/nathanwinder/react-spacing) library by Nathan Winder, I figured I'd do something similar for React Native with slight tweaks.

**Stack:**
![#45e6e6](https://placehold.it/30/45e6e6/000000?text=+) &nbsp;&nbsp;
**Queue:**
![#e645e6](https://placehold.it/30/e645e6/000000?text=+) &nbsp;&nbsp;
**Inset:**
![#e6e645](https://placehold.it/30/e6e645/000000?text=+) &nbsp;&nbsp;

<img src="https://raw.githubusercontent.com/hirokazutei/react-native-spacing-system/master/.github/main-example.png" width="400"/> <img src="https://raw.githubusercontent.com/hirokazutei/react-native-spacing-system/master/.github/main-example-debug.png" width="400"/>

For the full sentiment and rationalization, please check out my [Medium blog post: Enforcing Component Spacing in React & React Native](https://medium.com/@hirokazutei/enforcing-component-spacing-in-react-react-native-556b8ef90dea?sk=9a3c83f74fceab3a0a402343ef987e6f).

# Features

## Stack

`Stack` is a vertical spacing component, think of a pile of plates at a buffet.

<p align="center">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-spacing-system/develop/.github/stack-example.gif" width="400" />
</p>

### Usage

Stack takes `size: number`, `debug?: boolean` and `debugOptions?: {color?: string, border?: boolean, borderColor?: string, opacity?: number}`.

```jsx
import * as React from "react";
import { View } from 'react-native';
import { Stack } from "react-native-spacing-system";
import { BuffetPlates } from "./BuffetPlates";
import { KitchenCounter } from "./KitchenCounter";

/*
    Creates a vertical space with size of 16 between
     <BuffetPlates /> and <KitchenCounter /> components.
*/
const QueueExample = () => {
  return (
    <View>
      <BuffetPlates />
      <Stack size={16} />
      <BuffetPlates />
      <Stack size={16} />
      <KitchenCounter />
    </View>
  );
```

## Queue

`Queue` is a horizontal spacing component, think of people queueing for that new bubbletea joint.

<p align="center">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-spacing-system/develop/.github/queue-example.gif" width="400" />
</p>

### Usage

Queue takes `size: number`, `debug?: boolean` and `debugOptions?: {color?: string, border?: boolean, borderColor?: string, opacity?: number}`.

```jsx
import * as React from "react";
import { View } from "react-native";
import { Queue } from "react-native-spacing-system";
import { BubbleTeaJoint } from "./BubbleTeaJoint";
import { PatientPatron } from "./PatientPatron";

/*
    Creates a horizontal space with size of 16 between
    <BubbleTeaJoint /> and <PatientPatron /> components.
    Only works when flex direction is row.
*/
const StackExample = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <BubbleTeaJoint />
      <Queue size={16} />
      <PatientPatron />
      <Queue size={16} />
      <PatientPatron />
    </View>
  );
};
```

## Inset

`Inset` is a boundary spacing component, think of adding frames around a picture (the child).

<p align="center">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-spacing-system/develop/.github/inset-example.gif" width="400" />
</p>

### Usage

Inset takes `children: ReactNode`, `debug?: boolean`, `debugOptions?: {color?: string}`, `flex?: number`, and `paddings: PaddingCombinations`.

The allowed `PaddingCombinations` are as follows:

- `{all: number}`
- `{horizontal: number, vertical: number}`
- `{horizontal: number, bottom?: number, top?: number}`
- `{vertical: number, left?: number, right?: number}`
- `{left?: number, top?: number, right?:number, bottom: number}`

```jsx
import * as React from "react";
import { Inset } from "react-native-spacing-system";
import { PictureNeedingAFrame } from "./PictureNeedingAFrame";

/*
    Creates a padding of size 16 around 
    the <PictureNeedingAFrame /> component.
*/
const InsetExample = () => {
  return (
    <Inset all={16}>
      <PictureNeedingAFrame />
    </Inset>
  );
};
```

## Factory Methods

Create your own spacing component with custom keys by passing in the space mapping object into the factory method provided.

- `stackFactory()`
- `queueFactory()`
- `insetFactory()`

```tsx
import { stackFactory } from "react-native-spacing-system";

const spacing = {
  tall: 8,
  grande: 12,
  venti: 16
};

const Stack = stackFactory(spacing);

<Stack size={16}/> // Error
<Stack size="venti"/> // Works
```

### `spacingFactory`

If the spacing object is expected to be used in all `Stack`, `Queue`, and `Inset`, `spacingFactory` can be used to create the components in one function.

```tsx
import { spacingFactory } from "react-native-spacing-system";

const spacing = {
  tall: 8,
  grande: 12,
  venti: 16,
};

const { Stack, Queue, Inset } = spacingFactory(spacing);
```

### Flow

Depending on your version of **flow**, you may have to pass in the type of your space object.

```javascript
/* @flow */
import { stackFactory } from "react-native-spacing-system";

type SpacingKey = 'tall' | 'grande' | 'venti'

type Spacing = {[key: SpacingKey]: number}

const spacing: Spacing = {
  tall: 8,
  grande: 12,
  venti: 16
};

const Stack = stackFactory<Spacing>(spacing);

<Stack size={16}/> // Error
<Stack size="venti"/> // Works
```

## Debug Mode

Each component supports a debug mode where their spacing is highlighted.

Import the `DebugContext` and use the `Provider` to toggle debug mode on and off.

```jsx
import * as React from "react";
import { DebugContext } from "react-native-spacing-system";
import ComponentWithSpacingSystemComponents from "./ComponentWithSpacingSystemComponents";

const SomeComponent = () => {
  return (
    <DebugContext.Provider value={{ debug: booleanValue }}>
      <ComponentWithSpacingSystemComponents />
    </DebugContext.Provider>
  );
};
```

You can also control debug mode of each type of spacing component as well as their border highlighting.

#### Expected Type (TypeScript)

```tsx
type DebugContextProps = {
  debug: boolean;
  inset?: {
    debug?: boolean;
    color?: string;
  };
  queue?: {
    debug?: boolean;
    color?: string;
    border?: boolean;
    borderColor?: string;
    opacity?: number;
  };
  stack?: {
    debug?: boolean;
    color?: string;
    border?: boolean;
    borderColor?: string;
    opacity?: number;
  };
};
```

#### Expected Type (Flow)

```jsx
type DebugContextProps = {|
  debug: boolean,
  inset?: {|
    debug?: boolean,
    color?: string,
  |},
  queue?: {|
    debug?: boolean,
    color?: string,
    border?: boolean,
    borderColor?: string,
    opacity?: number,
  |},
  stack?: {|
    debug?: boolean,
    color?: string,
    border?: boolean,
    borderColor?: string,
    opacity?: number,
  |},
|};
```

<h2 align="center">
    Contacts & Social Media
</h2>
<p align="center">
    <a href="https://twitter.com/asublimeaddict">
        <img src="https://img.shields.io/badge/-Twitter-black.svg?style=for-the-badge&logo=twitter&logoColor=white&color=1DA1F2">
    </a>
    <a href="https://www.linkedin.com/in/hirokazutei/">
        <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&color=0077B5">
    </a>
    <a href="https://www.instagram.com/hirokazutei/">
        <img src="https://img.shields.io/badge/-Instagram-black.svg?style=for-the-badge&logo=instagram&logoColor=white&color=E4405F">
    </a>
    <a href="https://medium.com/@hirokazutei/enforcing-component-spacing-in-react-react-native-556b8ef90dea">
        <img src="https://img.shields.io/badge/-Medium-black.svg?style=for-the-badge&logo=Medium&logoColor=white&color=12100E">
    </a>
    <a href="https://hirokazutei.me">
        <img src="https://img.shields.io/badge/-Blog-black.svg?style=for-the-badge&logo=about.me&logoColor=white&color=gray">
    </a>
</p>
