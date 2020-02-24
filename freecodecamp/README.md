
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
        * 


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
* 예를 들어 HTML 요소 주위에 빨간색 5픽셀 테두리르 만들려면 이 클래스를 사용 할 수 있다.
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
* 예를 들면 `padding-top:40px;padding-right:20px; padding-bottom:20px; padding-left:40px;` 와 같이 설정 할 수 있다.


### Add Different Margin to Each Side of an Element
* 요소의 `margin` 도 각 측면에서 다른 값을 갖도로 정의 할 수 있다.
* 예를 들면 `margin-top:40px;margin-right:20px; margin-bottom:20px; margin-left:40px;` 와 같이 설정 할 수 있다.


### Use Clockwise Notation to Specify the Padding of an Element