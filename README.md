# Bonhomme UI

React UI components

[Live demo](https://ui.bonhomme.lol)

## Installation

`npm install @maxbonhomme/ui`

`yarn add @maxbonhomme/ui`

## Components

### GradientBlur

Progressive Blur to pur on top on anything.

#### Props

- `direction`: For TS Use `Direction` enum
- `direction`: For JS use: 'to bottom' | 'to top' | 'to left' | 'to right'
- `style`: CSS object

### Usage

```tsx
import { GradientBlur, Direction } from "@maxbonhomme/ui"

const Component = () => <GradientBlur direction={Direction.TO_BOTTOM} />
```
