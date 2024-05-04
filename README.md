<!-- vscode-markdown-toc -->
* 1. [安裝與運行](#)
* 2. [客製化變數](#-1)
* 3. [目錄](#-1)
* 4. [Text](#Text)
	* 4.1. [Text Color](#TextColor)
	* 4.2. [Font Size](#FontSize)
	* 4.3. [Text Decoration](#TextDecoration)
	* 4.4. [Text Align](#TextAlign)
	* 4.5. [Font Weight](#FontWeight)
	* 4.6. [Font Style](#FontStyle)
	* 4.7. [Line Height](#LineHeight)
* 5. [Backgrounds](#Backgrounds)
	* 5.1. [Background Color](#BackgroundColor)
* 6. [Spacings](#Spacings)
	* 6.1. [padding](#padding)
	* 6.2. [margin](#margin)
* 7. [Effects](#Effects)
	* 7.1. [Opacity](#Opacity)
	* 7.2. [Box Shadow](#BoxShadow)
* 8. [Borders](#Borders)
	* 8.1. [Border](#Border)
	* 8.2. [Border Color](#BorderColor)
	* 8.3. [Border Width](#BorderWidth)
	* 8.4. [Border Radius](#BorderRadius)
* 9. [Layout](#Layout)
	* 9.1. [Overflow](#Overflow)
	* 9.2. [Position](#Position)
	* 9.3. [top](#top)
	* 9.4. [left](#left)
	* 9.5. [right](#right)
	* 9.6. [bottom](#bottom)
* 10. [Display](#Display)
	* 10.1. [Flex-direction](#Flex-direction)
	* 10.2. [flex-grow](#flex-grow)
	* 10.3. [flex-wrap](#flex-wrap)
	* 10.4. [flex-shrink](#flex-shrink)
	* 10.5. [justify-content](#justify-content)
	* 10.6. [align-items](#align-items)
	* 10.7. [align-self](#align-self)
	* 10.8. [order](#order)
* 11. [Transform](#Transform)
* 12. [Sizing](#Sizing)
	* 12.1. [width](#width)
	* 12.2. [Height](#Height)
	* 12.3. [max-width](#max-width)
	* 12.4. [max-height](#max-height)
	* 12.5. [viewport-height](#viewport-height)
	* 12.6. [viewport-width](#viewport-width)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc --># TimCSS Library

此專案為仿照 tailwindcss 自製的 css 框架。

##  1. <a name=''></a>安裝與運行

```js
npm install  // 安裝套件
gulp // 用gulp運行專案
```

##  2. <a name='-1'></a>客製化變數

在scss資料夾內，找到_variable.scss檔案，更改scss檔的變數，即可客製化。

```
--source
  --scss
    --abstract
      --_variables.scss
```

##  3. <a name='-1'></a>目錄


##  4. <a name='Text'></a>Text

###  4.1. <a name='TextColor'></a>Text Color

改變文字顏色的 class

``` css
.text-primary:   color: #326dee;
.text-secondary: color: #1ac886;
.text-danger:    color: #d32752;
.text-light:     color: #fff;
.text-dark:      color: #000;
```

###  4.2. <a name='FontSize'></a>Font Size

改變文字大小的 class

``` css
.fs-1: { font-size: 4rem;}
.fs-2: { font-size: 3rem;}
.fs-3: { font-size: 2.25rem;}
.fs-4: { font-size: 2rem;}
.fs-5: { font-size: 1.75rem;}
```
RWD斷點 
`fs-1、fs-sm-1、fs-md-1、fs-lg-1、fs-xl-1`

###  4.3. <a name='TextDecoration'></a>Text Decoration

改變文字裝飾的 class

``` css
.text-decoration-none { text-decoration: none; }
.text-decoration-underline { text-decoration: underline; }
.text-decoration-line-through { text-decoration: line-through; }
```

###  4.4. <a name='TextAlign'></a>Text Align

改變文字對齊的 class

``` css
.text-start { text-align: left; }
.text-end { text-align: right; }
.text-center { text-align: center; }
```
RWD斷點 
`text-start、text-sm-start、text-md-start、text-lg-start、text-xl-start`

###  4.5. <a name='FontWeight'></a>Font Weight

改變字體粗細

``` css
.fw-lighter { font-weight: lighter; }
.fw-light { font-weight: 300; }
.fw-normal { font-weight: 400; }
.fw-bold { font-weight: 700; }
.fw-bolder { font-weight: bolder;}
```

###  4.6. <a name='FontStyle'></a>Font Style

改變字體樣式

``` css
.fst-italic { font-style: italic; }
.fst-normal { font-style: normal; }
```

###  4.7. <a name='LineHeight'></a>Line Height

改變行高

``` css
.lh-1 { line-height: 1; }
.lh-sm { line-height: 1.25; }
.lh-base { line-height: 1.5; }
.lh-lg { line-height: 2; }
```

##  5. <a name='Backgrounds'></a>Backgrounds

###  5.1. <a name='BackgroundColor'></a>Background Color

改變元素背景色的 class

``` css
.bg-primary   { background-color: #326dee; }
.bg-secondary { background-color: #326dee; }
.bg-danger   { background-color: #d32752; }
.bg-light    { background-color: #fff; }
.bg-dark     { background-color: #000; }
```

##  6. <a name='Spacings'></a>Spacings

###  6.1. <a name='padding'></a>padding

改變元素 padding

``` css
.p-auto { padding: auto; }
.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.625rem; }
.p-4 { padding: 0.75rem; }
```
RWD斷點 
`p-auto、p-sm-1、p-md-1、p-lg-1、p-xl-1`

方向
`padding-left: pl、padding-right: pr、 padding-top: pt、padding-bottom: pb`

###  6.2. <a name='margin'></a>margin

改變元素 margin

``` css
.m-auto { margin : auto; }
.m-0 { margin : 0; }
.m-1 { margin : 0.25rem; }
.m-2 { margin : 0.5rem; }
.m-3 { margin : 0.625rem; }
.m-4 { margin : 0.75rem; }
```
RWD斷點 
`m-auto、m-sm-1、m-md-1、m-lg-1、m-xl-1`

方向
`margin-left: ml、margin-right: mr、 margin-top: mt、margin-bottom: mb`

##  7. <a name='Effects'></a>Effects

###  7.1. <a name='Opacity'></a>Opacity

改變元素 Opacity 透明度

``` css
.opacity-0 { opacity: 0; }
.opacity-25 { opacity: 0.25; }
.opacity-50 { opacity: 0.5; }
.opacity-75 { opacity: 0.75; }
.opacity-100 { opacity: 1; }
```
RWD斷點 
`opacity-0、opacity-sm-0、opacity-md-0、opacity-lg-0、opacity-xl-0`

###  7.2. <a name='BoxShadow'></a>Box Shadow

改變元素 Box Shadow

``` css
.shadow {    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); }
.shadow-sm { box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); }
.shadow-lg { box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175); }
.shadow-none  { box-shadow: none; }
```


##  8. <a name='Borders'></a>Borders

###  8.1. <a name='Border'></a>Border

改變元素 Border

``` css
.border { border: 1px solid #c2c2c2; }
.border-0 { border: 0; }
```

方向
`border-top、border-left、border-bottom、border-right`;

###  8.2. <a name='BorderColor'></a>Border Color

改變元素 Border Color

``` css
.border-primary { border-color: #326dee; }
.border-secondary { border-color: #1ac886; }
.border-danger { border-color: #d32752; }
.border-light { border-color: #fff; }
.border-dark { border-color: #000; }
```

###  8.3. <a name='BorderWidth'></a>Border Width

改變元素 Border Width

``` css
.border-0 { border-width: 0px; }
.border-1 { border-width: 1px; }
.border-2 { border-width: 2px; }
.border-3 { border-width: 3px; }
.border-4 { border-width: 4px; }
.border-5 { border-width: 5px; }
```

###  8.4. <a name='BorderRadius'></a>Border Radius

改變元素 Border Radius

``` css
.rounded-0 { border-radius: 0; }
.rounded-1 { border-radius: 0.2rem; }
.rounded-2 { border-radius: 0.25rem; }
.rounded-3 { border-radius: 0.3rem; }
.rounded-circle { border-radius: 50%; }
.rounded-pill { border-radius: 50rem; }
```
RWD斷點 
`rounded-0、rounded-sm-0、rounded-md-0、rounded-lg-0、rounded-xl-0`

##  9. <a name='Layout'></a>Layout

###  9.1. <a name='Overflow'></a>Overflow

``` css
.overflow-auto { overflow: auto; }
.overflow-hidden { overflow: hidden; }
.overflow-visible { overflow: visible; }
.overflow-scroll { overflow: scroll; }
```

RWD斷點 
`overflow-sm-auto overflow-md-auto overflow-lg-auto overflow-xl-auto`

###  9.2. <a name='Position'></a>Position

元素 Position 定位屬性

``` css
.position-static { position: static; }
.position-relative { position: relative; }
.position-absolute { position: absolute; }
.position-fixed { position: fixed; }
.position-sticky { position: sticky; }
```
`position-sm-static position-md-static position-lg-static position-xl-static`

###  9.3. <a name='top'></a>top

``` css
.top-0 { top: 0; }
.top-50 { top: 50%; }
.top-100 { top: 100%; }
```
`top-sm-0 top-md-0 top-lg-0 top-xl-0`

###  9.4. <a name='left'></a>left

``` css
.start-0 { left: 0; }
.start-50 { left: 50%; }
.start-100 { left: 100%; }
```
`start-sm-0 start-md-0 start-lg-0 start-xl-0`

###  9.5. <a name='right'></a>right

``` css
.end-0 { right: 0; }
.end-50 { right: 50%; }
.end-100 { right: 100%; }
```
`end-sm-0 end-md-0 end-lg-0 end-xl-0`

###  9.6. <a name='bottom'></a>bottom

``` css
.bottom-0 { bottom: 0; }
.bottom-50 { bottom: 50%; }
.bottom-100 { bottom: 100%; }
```
`bottom-sm-0 bottom-md-0 bottom-lg-0 bottom-xl-0`


##  10. <a name='Display'></a>Display

元素 display 布局

``` css
.d-flex { display: flex; }
.d-inline-flex { display: inline-flex; }
.d-block { display: block; }
.d-inline { display: inline; }
.d-table { display: table; }
.d-none { display: none; }
```
RWD斷點 
`d-flex d-sm-flex d-md-flex d-lg-flex`;

###  10.1. <a name='Flex-direction'></a>Flex-direction

改變元素 flex 方向

``` css
.flex-row {         flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-column {      flex-direction: column; }
.flex-column-reverse { flex-direction: column-reverse; }
```
`flex-row flex-sm-row flex-md-row flex-lg-row flex-xl-row`

###  10.2. <a name='flex-grow'></a>flex-grow

``` css
.flex-grow-0 { flex-grow: 0; }
.flex-grow-1 { flex-grow: 1; }
```

`flex-grow-0 flex-grow-sm-0 flex-grow-md-0 flex-grow-lg-0 flex-grow-xl-0`


###  10.3. <a name='flex-wrap'></a>flex-wrap

``` css
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }
```
`flex-wrap flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap`

###  10.4. <a name='flex-shrink'></a>flex-shrink

``` css
.flex-shrink-0 { flex-shrink: 0; }
.flex-shrink-1 { flex-shrink: 1; }
```
`flex-shrink-0 flex-shrink-sm-0 flex-shrink-md-0 flex-shrink-lg-0 flex-shrink-xl-0`

###  10.5. <a name='justify-content'></a>justify-content

``` css
.justify-content-start { justify-content: flex-start; }
.justify-content-end {   justify-content: flex-end; }
.justify-content-center { justify-content: center; }
.justify-content-between { justify-content: space-between;}
.justify-content-around {  justify-content: space-around; }
.justify-content-evenly { justify-content: space-evenly; }
```

`justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start`

###  10.6. <a name='align-items'></a>align-items

``` css
.align-items-start { align-items: flex-start; }
.align-items-end {   align-items: flex-end; }
.align-items-center {align-items: center; }
.align-items-baseline { align-items: baseline; }
.align-items-stretch { align-items: stretch; }
```
`align-items-sm-start align-items-md-start align-items-lg-start align-items-xl-start`

###  10.7. <a name='align-self'></a>align-self

``` css
.align-self-start { align-self: flex-start; }
.align-self-end { align-self: flex-end; }
.align-self-center { align-self: center; }
.align-self-between { align-self: space-between; }
.align-self-around { align-self: space-around; }
.align-self-stretch { align-self: stretch; }
```

`align-self-sm-start align-self-md-start align-self-lg-start align-self-xl-start`

###  10.8. <a name='order'></a>order

``` css
.order-first { order: -1; }
.order-0 { order: 0; }
.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }
.order-4 { order: 4; }
.order-5 { order: 5; }
.order-last { order: 6; }
```

##  11. <a name='Transform'></a>Transform

``` css
.translate-middle { transform: translate(-50%, -50%); }
.translate-middle-x { transform: translateX(-50%); }
.translate-middle-y { transform: translateY(-50%); }
```

##  12. <a name='Sizing'></a>Sizing

###  12.1. <a name='width'></a>width

``` css
.w-25 { width: 25%; }
.w-50 { width: 50%; }
.w-75 { width: 75%; }
.w-100 { width: 100%; }
.w-auto { width: auto; }
```
`w-sm-25 w-md-25 w-lg-25 w-xl-25`

###  12.2. <a name='Height'></a>Height

``` css
.h-25 { height: 25%; }
.h-50 { height: 50%; }
.h-75 { height: 75%; }
.h-100 { height: 100%; }
.h-auto { height: auto; }
```
`h-sm-25 h-md-25 h-lg-25 h-xl-25`

###  12.3. <a name='max-width'></a>max-width

``` css
.max-width-100 { max-width: 100%; }
```
`max-width-sm-25 max-width-md-25 max-width-lg-25 max-width-xl-25`

###  12.4. <a name='max-height'></a>max-height

``` css
.max-height-100 { max-height: 100%; }
```
`max-height-sm-25 max-height-md-25 max-height-lg-25 max-height-xl-25`

###  12.5. <a name='viewport-height'></a>viewport-height

``` css
.vh-100 { viewport-height: 100vh; }
```
`vh-sm-100 vh-md-100 vh-lg-100 vh-xl-100`

###  12.6. <a name='viewport-width'></a>viewport-width

``` css
.vw-100 { viewport-height: 100vw; }
```
`vw-sm-100 vw-md-100 vw-lg-100 vw-xl-100`



