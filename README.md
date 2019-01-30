# Santiment UI Library

Santiment UI React library.

### List of components

  1. Button
  2. Input
  3. Panel
  4. Search input
  5. Select search input 

## Setup

### Cloning

`git clone git@github.com:santiment/san-ui.git && cd san-ui`

### Installing dependencies

`yarn`

## Usage

### Starting a development build

`yarn storybook`

### Building the project

`yarn build:storybook`

### Building the library

`yarn build:lib`

### Publishing the library

`yarn lib-publish`

### In the project
In order to access CSS variables `main.scss` should be imported into the project's main style file, e.g.:
```scss
/* index.scss */

@import "~@santiment-network/ui/main.scss";

/* ... */
```
