<h1 align="center">
    React Native Spacing System
</h1>
<p align="center">
    <a href="https://www.gnu.org/licenses/gpl-3.0">
        <img src="https://img.shields.io/badge/license-GPLv3-blue.svg?style=for-the-badge" />
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
</p>

Using margin and padding to control spacing between components introduces too many ways to accomploish the same task in a multitude of ways. For the sake of standardizing code, making spacings consistent and increasing legibility, we can instead use spacing components to act as shims.

## Installation

```
npm install react-native-spacing-system
```

or

```
yarn add react-native-spacing-system
```

## Sentiment & Rationalization

Inspired by Nathan Curtis's Medium article [Space In Design Systems](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62) and this [react-spacing](https://github.com/nathanwinder/react-spacing) library by Nathan Winder (are they the same person?), I figured I'd do something similar for React Native with slight tweaks.

<img src="https://raw.githubusercontent.com/hirokazutei/react-native-spacing-system/master/.github/main-example.png" width="400"/> <img src="https://raw.githubusercontent.com/hirokazutei/react-native-spacing-system/master/.github/main-example-debug.png" width="400"/>

The full sentiment and rationalization will be posted on a blog later.

## Features

### Debug

Each component supports a debug mode where their spacing is highlighted.

Import the `DebugContext` and use the `Provider` to toggle debug mode on and off.

```jsx
import * as React from "react";
import { DebugContext } from "react-native-spacing-system";
import ComponentWithSpacingSystemComponents from "./ComponentWithSpacingSystemComponents";

const SomeComponent = () => {
  return (
    <DebugContext.Provider value={booleanValue}>
      <ComponentWithSpacingSystemComponents />
    </DebugContext.Provider>
  );
};
```

**Stack:**
![#45e6e6](https://placehold.it/30/45e6e6/000000?text=+) &nbsp;&nbsp;
**Queue:**
![#e645e6](https://placehold.it/30/e645e6/000000?text=+) &nbsp;&nbsp;
**Inset:**
![#e6e645](https://placehold.it/30/e6e645/000000?text=+) &nbsp;&nbsp;

## Stack

`Stack` is a vertical spacing component, think of a pile of plates at a buffet.

<p align="center">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-spacing-system/develop/.github/stack-example.gif" width="400" />
</p>

### Usage

Stack takes `size: number`, `debug?: boolean` and `debugOptions?: {color?: string, border?: boolean, borderColor?: string}`.

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

Queue takes `size: number`, `debug?: boolean` and `debugOptions?: {color?: string, border?: boolean, borderColor?: string}`.

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
    <a href="https://hirokazutei.me">
        <img src="https://img.shields.io/badge/-Blog-black.svg?style=for-the-badge&logo=about.me&logoColor=white&color=gray">
    </a>
</p>
