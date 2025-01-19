# ngx-x-browser-svg-mask

Angular attribute directive that handles cross browser considerations for applying SVG image masks in the DOM.

## Table of contents

- [Table of contents](#table-of-contents)
- [About This Package](#about-this-package)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## About This Package

This package provides a directive for Angular 2+ that helps handle some of the cross browser specifics involved with creating SVG masks. When it comes to compositing an SVG using a base image and a mask image, each browser requires slightly different properties and some (Safari) require a specific path structure for the mask reference. To ease the burden of creating many SVG masks in your application, applying this directive will help you not have to worry about any of the specifics and generate SVG masks with minimal attribute assignment.

## Installation

`npm install ngx-x-browser-svg-mask --save`

## Usage

1. Import `NgxXBrowserSVGMaskModule` in your app module (or other Angular module) and place it in your imports section:

   ```typescript
   import { NgxXBrowserSVGMaskModule } from "ngx-x-browser-svg-mask";

   @NgModule({
      imports: [
        ...,
        NgxXBrowserSVGMaskModule,
      ],
      ...
   })
   export class AppModule { }
   ```

2. Use the `ngxSVGMask` directive on image elements to provide a reference to your SVG mask in a cross browser friendly way.

   ```
    <svg version="1.2">
       <mask id="elm-tree-mask">
         <image [attr.xlink:href]="'./assets/elm-tree.svg'"
                 preserveAspectRatio="xMidYMid slice"
                 [attr.width]="'100%'"
                 [attr.height]="'100%'">
         </image>
       </mask>

       <image width="500"
               height="338"
               [ngxSVGMask]="'#elm-tree-mask'"
               [attr.xlink:href]="'./assets/salmon-catch.jpg'">
       </image>
     </svg>
   ```

## API

### Input Properties

`ngxSVGMask` {string}

- The `HTMLElement` id associated with the `mask` node that will be used to mask the bitmap element.
