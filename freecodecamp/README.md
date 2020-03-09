
# Responsive Web Design Certification (300 hours)

## Table of contents

* [Basic CSS](#basic-css)
    * [CSS는?](#css는)
    * [CSS가 제어하는 항목](#css가-제어하는-항목)
    * [CSS를 적용하는 방법](#css를-적용하는-방법)
    * [학습하기](#학습하기)
        * [Change the Color of Text](#change-the-color-of-text)
        * [Use CSS Selectors to Style Elements](#use-css-selectors-to-style-elements)
        * [Use a CSS Class to Style an Element](#use-a-css-class-to-style-an-element)
        * [Style Multiple Elements with a CSS Class](#style-multiple-elements-with-a-css-class)
        * [Change the Font Size of an Element](#change-the-font-size-of-an-element)
        * [Set the Font Family of an Element](#set-the-font-family-of-an-element)
        * [Import a Google Font](#import-a-google-font)
        * [Specify How Fonts Should Degrade](#specify-how-fonts-should-degrade)
        * [Size Your Images](#size-your-images)
        * [Add Borders Around Your Elements](#add-borders-around-your-elements)
        * [Add Rounded Corners with border-radius](#add-rounded-corners-with-border-radius)
        * [Make Circular Images with a border-radius](#make-circular-images-with-a-border-raduis)
        * [Give a Background Color to a div Element](#give-a-background-color-to-a-div-element)
        * [Set the id of an Element](#set-the-id-of-an-element)
        * [Use an id Attribute to Style an Element](#use-an-id-attribute-to-style-an-element)
        * [Adjust the Padding of an Element](#adjust-the-padding-of-an-element)
        * [Adjust the Margin of an Element](#adjust-the-margin-of-an-element)
        * [Add a Negative Margin to an Element](#add-a-negative-margin-to-an-element)
        * [Add Different Padding to Each Side of an Element](#add-different-padding-to-each-side-of-an-element)
        * [Add Different Margin to Each Side of an Element](#add-different-margin-to-each-side-of-an-element)
        * [Use Clockwise Notation to Specify the Padding of an Element](#use-clockwise-notation-to-specify-the-padding-of-an-element)
        * [Use Clockwise Notation to Specify the margin of an Element](use-clockwise-notation-to-specify-the-margin-of-an-element)
        * [Use Attribute Selectors to Style Elements](use-attribute-selectors-to-style-elements)
        * [Understand Absoulte versus Relative Units](understand-absoulte-versus-relative-units)
        * [Style the HTML Body Element](style-the-html-body-element)
        * [Inherit Styles from the Body Element](inherit-styles-from-the-body-element)
        * [Prioritize One Style Over Another](prioritize-one-style-over-another)
        * [Override Styles in Subsequent CSS](override-styles-in-subsequent-css)
        * [Override Class Declarations by Styling ID Attributes](override-class-declarations-by-styling-id-attributes)
        * [Override Class Declarations with Inline Styles](override-class-declarations-with-inline-styles)
        * [Override All Other Styles by using Important](override-all-other-styles-by-using-important)



# Basic HTML and HTML5 

# Basic CSS 

## CSS는?

CSS (Cascading Style Sheets)는 HTML로 작성하는 텍스트 및 기타 내용을 표시하는 방법을 브라우저에 알려준다. 


## CSS가 제어하는 항목

* color
* fonts
* positioning
* sizing
* decorations
* transitions

## CSS를 적용하는 방법
* style 속성을 사용하여 인라인 스타일을 HTML 요소에 직접 적용
* HTML 문서의 태그내에 CSS 규칙을 배치
* 외부 스타일 시트에 CSS 규칙을 작성한 다음 HTML 문서에서 해당 파일을 참조 

## 학습하기

### Change the Color of Text 

* 다음은 인라인 스타일로 `h2` 요소의 텍스트 색상을 파란색으로 설정한 예제이다.
* 인라인 스타일로 적용 할 때는 `;` 으로 끝내는 것이 좋다

```html
<h2 style="color: blue;"> Cat Photo App </h2>
```


### Use CSS Selectors to Style Elements

* 인라인 스타일 보다 더 좋은 방법이다.
* 코드 위에 `style` 블록을 만들고 `CSS 선택기`를 사용 해서 `h2` 요소에 스타일을 적용 한다.
* 중괄호 안에 작성하고 세미콜론을 추가하자.

```html
<style>
    h2 {
        color: red;
    }
</style>
```

### Use a CSS Class to Style an Element

* 클래스는 HTML 요소에 스타일 추가를 재사용 할 수 있는 방법이다.

```html
<style>
    .blue-text {
        color: blue;
    }
</style>
```

### Style Multiple Elements with a CSS Class

* 클래스를 사용하면 여러 HTML 요소에 동일한 CSS 스타일을 사용 할 수 있다.

```html
<style>
    .blue-text {
        color: blue;
    }
</style>
<h2 class="blue-text"> Cat Photo App </h2>
<div>
    <p class="blue-text"> Things cats love:</p>
    <ul>
        <li> cat nip </li>
        <li> laser pointers </li>
        <li> lasagna </li>
    </ul>
</div>
```

### Change the Font Size of an Element

* 글꼴 크기는 다음과 같이 `font-size` CSS 속성에 의해 제어 된다.
```css
h1 {
    font-size: 30px;
}
```

### Set the Font Family of an Element

* 글꼴은 `font-family` 속성을 사용하여 설정 할 수 있다.
* 예를 들면, 다음은 `h2` 요소의 글꼴을 `sans-serif` 로 설정 한다.

```css
h2 {
    font-family: sans-serif;
}
```

### Import a Google Font 

* 대부분의 운영체제에서 사용되는 일반적인 글꼴 외에도 사용자 정의 웹 글꼴을 지정 할 수 있다.
* [Google Fonts](https://fonts.google.com/)는 글꼴의 URL을 참조하여 CSS에서 사용 할 수 있는 무료 웹 글꼴 라이브러리이다.
* 인터넷에는 웹 글꼴에 대한 많은 소스가 있으며, 다음은 Google Fonts 를 사용한 예제이다.

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

* `font-family: FAMILY_NAME, GENERIC_NAME;` 에서 `FAMILY_NAME`에 `Lobster` 글꼴을 사용한다.
* 대소문자를 구분하며 이름에 공백이 있을 경우 따옴표로 묶어야 한다.

```css
p {
    font-family: Lobster, "Open Sans"
}
```

### Specify How Fonts Should Degrade
* `font-family: FAMILY_NAME, GENERIC_NAME;` 에서 `GENERIC_NAME`에 대한 설명이다
* 모든 브라우저에는 사용 할 수 있는 몇가지 기본 글꼴 `monospace, serif, sans-serif` 이 있다.
* 한 글꼴클 사용 할 수 없으면 브라우저에 다른 글꼴로 degrade (강등) 하도록 지시 할 수 있다 
* 다음은 `Helvetica` 글꼴의 degrade 글꼴을 `sans-serif` 로 설정한 예제다.
* 일반 기존 글꼴 모음은 대소문자를 구분하지 않고, CSS 키워드 이므로 따옴표도 필요하지 않다
```css
p {
    font-family: Helvetica, sans-serif;
}
```

참고: 컴퓨터에 `FAMILY_NAME` 글꼴이 설치되어 있으면, 브라우저에서 글꼴을 찾을 수 있으므로, degrade (강등) 되지 않는다.


### Size Your Images
* CSS에는 요소의 너비를 제어하는 `width` 속성이 있다.
* 글꼴과 마찬가지로 `px`(픽셀)을 사용하여 이미지 너비를 지정한다.
* 다음 예는 HTML 요소에 너비 500 픽셀을 적용 하는 CSS클래스 `large-image` 이다.
```css
.large-imsage {
    width: 500px;
}
```

### Add Borders Around Your Elements
* CSS `border` (테두리)에는 `style`, `color`, `width` 같은 속성이 있다
* 예를 들어 HTML 요소 주위에 빨간색 5픽셀 테두리를 만들려면 이 클래스를 사용 할 수 있다.
```css
.red-border {
    border-color: red;
    border-width: 5px;
    border-solid: solid;
}
```


### Add Rounded Corners with border-radius
* CSS의 `border-radius` 속성은 모서리를 둥글게 반올림 할 수 있다.
* 픽셀로 설정 할 수 있다.

```css
.thick-green-border {
    border-radius: 10px;
}
```


### Make Circular Images with a border-radius
* `border-radius` 속성은 픽셀 외에 퍼센티지로 설정 할 수 있다.

```css 
.thick-green-border {
    border-radius: 50%;
}
```


### Give a Background Color to a div Element
* `background-color` 속성을 사용하여 요소의 배경색을 설정 할 수 있다.

```css
.green-background {
    background-color: green;
}
```


### Set the id of an Element
* Class 외에도 각 HTML요소에 `id` 속성이 있을 수 있다.
* `id` 속성을 사용하면 단일 요소의 스타일을 지정 할 수 있으며, 나중에 JavaScript 를 사용하여 특정 요소를 선택하고 수정 할 수 있다.
* `id` 속성은 고유 해야 한다. 브라우저는 이를 강제 하지 않지만, 널리 권장되는 모범 사례다.

```html
<h2 id="cat-photo-app">
```

### Use an id Attribute to Style an Element
* `id`에 적용하는 스타일은 재사용 할 수 없으며 한 요소에만 적용 해야 한다.
* 그래서 클래스보다 높은 중요성이 `id`에 적용된다.
* 클래스를 `.` 을 ID는 `#` 을 이름앞에 넣어서 참조한다. 

```css
#cat-photo-element {
    background-color: green;
}
```

### Adjust the Padding of an Element 
* HTML 요소는 기본적으로 작은 사각형이다.
* HTML 요소를 둘러싸는 공간을 제어 하는 중요한 세 가지 속성은 `padding`, `margin`, `border` 이다.
* `padding`은 요소의 내용과 요소의 `border` 사이의 공간을 제어한다.

### Adjust the Margin of an Element 
* 요소의 `margin`은 요소의 `border`와 주변 요소 사이의 간격을 제어한다


### Add a Negative Margin to an Element 
* 요소의 `margin` 을 음수 값으로 설정하면 요소가 커진다.

### Add Different Padding to Each Side of an Element
* `padding`을 각 측면에 다른 양을 갖도록 정의 할 수 있다.
* 예를 들면 다음과 같이 설정 할 수 있다.
```css
.blue-box {
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
}

```

### Add Different Margin to Each Side of an Element
* 요소의 `margin` 도 각 측면에서 다른 값을 갖도로 정의 할 수 있다.
* 예를 들면 다음과 같이 설정 할 수 있다.
```css
.red-box {
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
}
```

### Use Clockwise Notation to Specify the Padding of an Element
* `padding-top`, `padding-right`, `padding-bottom`, `padding-left`를 시계방향으로 한줄에 모두 지정 할 수 있다.
```css
padding: 10px 20px 10px 20px;
```

### Use Clockwise Notation to Specify the margin of an Element 
* `margin-top`, `margin-right`, `margin-bottom`, `margin-left`도 시계방향으로 한줄에 모두 지정 할 수 있다.
```css
margin: 20px 40px 20px 40px;
```

### Use Attribute Selectors to Style Elements
* `id` 및 `class` selector 외에 `[attr=value]` attribute selector 를 사용해서 스타일을 지정할 요소 그룹을 선택 할 수 있다.
```css
[type='radio'] {
    margin: 20px 0px 20px 0px;
}
```

### Understand Absoulte versus Relative Units
* 지난 과제에서는 요소의 `padding`과 `margin`을 모두 `px`(픽셀)로 설정하고 있다.
* `px`(픽셀)은 길이 단위의 한 유형으로, 브라우저에 항목 크기 또는 간격을 지정하는 방법을 알려준다.
* CSS에는 `px`(픽셀) 외에도 사용 할 수 있는 다양한 길이 단위 옵션이 있다.
* 길이 단위의 두 가지 주요 유형은 `absoluted`(절대적)과 `relative`(상대적)이 있다. 
* `absolute`(절대적인) 단위는 물리적은 길이 단위로 `in`과 `mm`으로 각각 인치 및 밀리미터를 제공한다. 절대 길이 단위는 실제 측정값과 비슷하지만, 화면의 해상도에 따라 약간의 차이가 있다.
* `relative`(상대적) 단위는 `em` 또는 `rem`으로 `em`은 요소의 글꼴의 크기를 기반으로 한다. 예를 들어, `font-size` 속성을 사용하면 부모의 `font-size` 속성과 관련이 있다. 

> 뷰포트의 크기에 연결된 여러 상대적 단위 옵션은, `Responsive Web Design` 에서 다룹니다.

### Style the HTML Body Element
* 이제 새롭게 CSS상속에 대해 알아보자
* 모든 HTML페이지에는 `body` 요소가 있고, 이는 `background-color` 속성을 주면 색을 띠는 것으로 증명 할 수 있다.
```css
body {
    background-color: black;
}
```

### Inherit Styles from the Body Element
* 다른 HTML 요소와 마찬가지로 `body` 요소에 스타일을 지정 할 수 있다.
* 다른 모든 요소는 `body` 요소의 스타일을 상속한다.
```css
body {
    background-color: black;
    color: green;
    font-family: monospace;
}

```
```html
<h1>
    Hello World
</h1>
```


### Prioritize One Style Over Another
* 때로는 HTML 요소가 서로 충돌하는 여러 스타일을 수신 할 수 있다.
* 예를 들어 `h1` 요소는 동시에 녹색과 분홍색이 될 수 없다.
* 텍스트를 분홍색으로 만드는 클래스를 만든 다음 `h1` 요소에 적용하면 클래스가 `body`요소에서 상속 받은 `color: green;` 요소를 재정의 한다.
```css
body {
    background-color: black;
    color: green;
    font-family: monospace;
}
.pink-text {
    color: pink;
}

```
```html
<h1 class="pink-text">
    Hello World
</h1>
```


### Override Styles in Subsequent CSS 
* `pink-text` 클래스는 `body` 요소의 CSS 선언을 무시한다.
* `h1` 요소에 `pink-text` 클래스와 `blue-text` 클래스를 모두 적용하면?

> 두 번째 선언이 첫 번째 선언 보다 항상 우선된다.

```css
body {
    background-color: black;
    color: green;
    font-family: monospace;
}
.pink-text {
    color: pink;
}
.blue-text {
    color: blue;
}

```
```html
<h1 class="blue-text pink-text"> 
    Blue
</h1>
```


### Override Class Declarations by Styling ID Attributes
* 브라우저는 선언 순서대로 CSS를 위에서 아래로 읽는다.
* 즉, 충돌이 발생하면 브라우저는 마지막에 온 CSS 선언을 사용한다 
* 그런데, 요소에 id를 부여하면 id에 대한 스타일링이 우선시 된다 

```css
body {
    background-color: black;
    color: green;
    font-family: monospace;
}
#orange-text {
    color: orange;
}
.pink-text {
    color: pink;
}
.blue-text {
    color: blue;
}
```
```html
<h1 id="orange-text" class="pink-text blue-text">
    Orange
</h1>
```

### Override Class Declarations with Inline Styles
* Class 보다 Id에 대한 스타일링이 우선시 된다.
* 그리고, Id 보다는 inline 스타일링이 우선시 된다.
```css
body {
    background-color: black;
    color: green;
    font-family: monospace;
}
#orange-text {
    color: orange;
}
.pink-text {
    color: pink;
}
.blue-text {
    color: blue;
}
```
```html
<h1 id="orange-text" class="pink-text blue-text" style="color:white">
    White
</h1>
```

### Override All Other Styles by using Important
* inline 스타일이 `style`의 모든 CSS 선언을 재정의 한다
* 하지만 가장 강력한 방법은 `!importatn` 이다
```css
body {
    background-color: black;
    font-family: monospace;
    color: green;
}
#orange-text {
color: orange;
}
.pink-text {
    color: pink !important;
}
.blue-text {
    color: blue;
}
```

```html
<h1 id="orange-text" class="pink-text blue-text" style="color: white">
    Hello World!
</h1>
```

### Use Hex Code for Specific Colors
* CSS에서 색상을 표현하는 방법으로 16진수 코드를 사용한다.
* 예를들어 `#000000` 은 검은색이다.
```css
body {
    color: #000000; /* black */
}
```

### Use Hex Code to Mix Colors 
* 16진 코드는 6개의 16진 숫자를 사용하여 각각 2개의 빨강(R). 녹색(G), 파랑(B)의 구성요소로 색상을 나타낸다.
* 이 세 가지 순수한 색상(빨강, 녹색, 파랑)은 각각의 양을 변화 시켜서 1600만개 이상의 다른 색상을 만들 수 있다.
* 예를들어, 주황색은 순수한 빨강이며, 녹색과 섞여 있고 파랑은 없다. 16진수로는 `#ffa500`
* 숫자 `0`은 16진 코드에서 가장 낮은 숫자이며 색상이 완전히 없음을 나타낸다.
* 숫자 `f`는 16진 코드에서 가장 높은 숫자이며 가능한 최대 밝기를 나타낸다.