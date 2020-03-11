# CSS 

## Table of contents 
* [CSS란?](#css란)
* [CSS를 적용하는 방법](#css를-적용하는-방법)
* [인라인 스타일로 스타일 적용](#인라인-스타일로-스타일-적용)
* [CSS 선택기를 사용하여 스타일 적용](#CSS-선택기를-사용하여-스타일-적용)
* [클래스를 사용하여 여러 HTML 요소에 스타일 적용](#클래스를-사용하여-여러-HTML-요소에-스타일-적용)
* [font 스타일 변경](#font-스타일-변경)
* [구글 폰트 사용](#구글-폰트-사용)


## CSS란 ?
CSS (Cascading Style Sheets)는 HTML로 작성하는 텍스트 및 기타 내용을 표시하는 방법을 브라우저에 알려준다. 

## CSS를 적용하는 방법
* style 속성을 사용해서 HTML 요소에 인라인으로 스타일을 적용한다.
```html
<h2 style="color: blue;"> Blue Text </h2>
```

* HTML문서의 태그내에 <style></style>블록을 배치하고 `CSS 선택기`를 사용해서 스타일을 적용한다.
```html
<style>
    h2 {
        color: red;
    }
</style>
```

* 외부 스타일 시트에 CSS 규칙을 작성한 다음 HTML 문서에서 해당 파일을 참조한다.

__index.html__
```html
<link href="./style.css" rel="stylesheet" type="text/css">
```
__style.css__
```css
/* ... */
```


## Class를 사용한 스타일 지정
* Class를 사용하여 여러 HTML 요소에 스타일을 적용 할 수 있다.
```css
.blue-text {
    color: blue;
}
```

## 고유한 id 속성을 사용한 스타일 지정
* 각 HTML 요소의 고유한 `id` 속성을 사용하여 단일 요소의 스타일을 지정 할 수 있다.
* 브라우저는 강제 하지 않지만, `id` 속성은 고유해야하는 것이 널리 권장되는 모범 사례이다. 
```css
#app-title {
    color: red;
}
```

## 속성 선택기를 사용하여 스타일 지정
* `id` 및 `class` 선택기 외에 `[attr=value]` 속성 선택기(attribute selector) 를 사용해서 스타일을 지정할 요소 그룹을 선택 할 수 있다.
```css
[type='radio'] {
    margin: 20px 0px 20px 0px;
}
```


## 글꼴 스타일 지정하기
* `font-size` 글꼴 크기를 지정
* `font-family: FAMILY_NAME, GENERIC_NAME;` `FAMILY_NAME` 로 글꼴을 설정하고 없을 경우에는 `GENERIC_NAME을` 사용한다.

## 글꼴 스타일 구글 폰트 사용하기
* 운영체제에서 사용되는 일반적인 글꼴 외에도 사용자 정의 웹 글꼴을 지정 할 수 있다.
* [Google Fonts](https://fonts.google.com/)는 글꼴의 URL을 참조하여 CSS에서 사용 할 수 있는 무료 웹 글꼴 라이브러리이다. 
```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
p {
    font-family: Lobster, "Open Sans"
}
</style>
```

## 글꼴 스타일 오픈 타입 사용하기
* 글꼴을 다운로드 받은 후, 다음과 같이 `@font-face` 로 선언하고 사용 할 수 있다.
```css
@font-face {
  font-family: 'Quesat Light Italic';
  src: url('./assets/fonts/Quesat/Quesat Light Italic Demo.otf') format('opentype');
}
.logo {
    font-family: 'Quesat Bold Italic';
}
```

## 이미지의 사이즈
* 요소의 너비를 제어하는 `width` 속성을 사용한다.
* 글꼴과 마찬가지로 `px`(픽셀)을 사용하여 이미지 너비를 지정한다.


## 테두리 스타일 지정하기
* `border`(테두리)에 `style`, `color`, `width` 같은 속성을 사용해서 테두리를 만들 수 있다.
```css
.red-border {
    border-width: 5px;
    border-solid: solid;
    border-color: red;
}
.blue-border {
    border: 1px solid blue;
}
```

## 테두리 모서리를 둥글게
* `border-raduis` 속성은 모서리를 둥글에 반올림 한다.
* `px` (픽셀) 외에 `%` (퍼센티지)로 설정 할 수 있다.
```css 
.red-border {
    border-radius: 5px;
}
.blue-border {
    border-radius: 50%;
}
```

## 요소의 패딩 조정
* HTML 요소는 기본적으로 작은 사각형이다.
* HTML 요소를 둘러싸는 공간을 제어 하는 중요한 세 가지 속성은 `padding`, `margin`, `border` 이다.
* `padding`은 요소의 내용과 요소의 `border` 사이의 공간을 제어한다.
* 각 측면마다 다른 값을 갖도록 정의 할 수 있다.
```css
.blue-box {
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
}

```

## 요소의 마진 조정
* `margin`은 요소의 `border`와 주변 요소 사이의 간격을 제어한다
* `margin` 을 음수 값으로 설정하면 요소가 커진다.
* 각 측면 마다 다른 값을 갖도록 정의 할 수 있다.
```css
.red-box {
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
}
```

## 시계 방향 표기법 사용하여 요소의 패딩 지정
* `padding-top`, `padding-right`, `padding-bottom`, `padding-left`를 시계방향으로 한줄에 모두 지정 할 수 있다.
```css
padding: 10px 20px 10px 20px;
```


## 시계 방향 표기법 사용하여 요소의 마진 지정
* `margin-top`, `margin-right`, `margin-bottom`, `margin-left`도 시계방향으로 한줄에 모두 지정 할 수 있다.
```css
margin: 20px 40px 20px 40px;
```

## 절대 단위와 상대 단위
* `px`(픽셀)은 길이 단위의 한 유형으로, 브라우저에 항목 크기 또는 간격을 지정하는 방법을 알려준다.
* CSS에는 `px`(픽셀) 외에도 사용 할 수 있는 다양한 길이 단위 옵션이 있다.
* 길이 단위의 두 가지 주요 유형은 `absoluted`(절대적)과 `relative`(상대적)이 있다. 
* `absolute`(절대적인) 단위는 물리적은 길이 단위로 `in`과 `mm`으로 각각 인치 및 밀리미터를 제공한다. 절대 길이 단위는 실제 측정값과 비슷하지만, 화면의 해상도에 따라 약간의 차이가 있다.
* `relative`(상대적) 단위는 `em` 또는 `rem`으로 `em`은 요소의 글꼴의 크기를 기반으로 한다. 예를 들어, `font-size` 속성을 사용하면 부모의 `font-size` 속성과 관련이 있다. 


## CSS 상속
* 모든 HTML페이지에는 `body` 요소가 있고, 스타일을 지정하면 다른 모든 요소가 스타일을 상속한다.
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


## 스타일의 우선순위
* 때로는 HTML 요소가 서로 충돌하는 여러 스타일을 수신 할 수 있다.
* 브라우저는 선언 순서대로 CSS를 위에서 아래로 읽는다.
* 즉, 충돌이 발생하면 브라우저는 마지막에 온 CSS 선언을 사용한다.
* 그런데, 요소에 id를 부여하면 id에 대한 스타일링이 우선시 된다.
* 그리고 id 보다는 inline 스타일링 우선시 된다.
* 하지만 가장 강력한 방법은 `!important` 이다.
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
<h1 class="pink-text blue-text">
    Blue
</h1>
<h1 id="orange-text" class="pink-text blue-text">
    Orange
</h1>
<h1 id="orange-text" class="pink-text blue-text" style="color:white">
    White
</h1>
```
> !important > inline > id > 마지막에 온 선언