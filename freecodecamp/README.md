
# Responsive Web Design Certification (300 hours)

## Table of contents

* [Basic CSS](#basic-css)
    * [CSS란?](#css란)
    * [CSS가 제어하는 항목](#css가-제어하는-항목)
    * [CSS를 적용하는 방법](#css를-적용하는-방법)
    * [배우기](#배우기)
        * [Change the Color of Text](#change-the-color-of-text)
        * [Use CSS Selectors to Style Elements](#use-css-selectors-to-style-elements)
        * [Use a CSS Class to Style an Element](#use-a-css-class-to-style-an-element)
        * [Style Multiple Elements with a CSS Class](#style-multiple-elements-with-a-css-class)
        * [Change the Font Size of an Element](#change-the-font-size-of-an-element)
        * [Set the Font Family of an Element](#set-the-font-family-of-an-element)
        * [Import a Google Font](#import-a-google-font)


# Basic HTML and HTML5 

# Basic CSS 

## CSS란? 

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

## 배우기

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
* 인터넷에는 웹 글꼴에 대한 많은 소스가 있으나, 여기에서는 Google Fonts 를 사용해보자.

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
```

* 이제 `font-family: FAMILY_NAME, GENERIC_NAME;` 와 같이 사용해서 `Lobster` 글꼴을 사용 할 수 있다.
* `GENERIC_NAME` 은 선택사항이며 지정된 글꼴을 사용 할 수 없는 경우 대체 글꼴이다.
* 대소문자를 구분하며 이름에 공백이 있을 경우 따옴표로 묶어야 한다.

```css
* {
    font-family: Lobster, "Open Sans"
}
```

### Specify How Fonts Should Degrade
<!-- [Specify How Fonts Should Degrade](#specify-how-fonts-should-degrade) -->

* 모든 브라우저에서 사용 할 수 있는 몇가지 기본 글꼴 `monospace, serif, sans-serif`



# Applied Visual Design

To Do
In Progress 
Done