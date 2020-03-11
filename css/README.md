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
* HTML문서의 태그내에 CSS 규칙을 배치해서 적용한다.
```html
<h2 style="color: blue;"> Blue Text </h2>
```

* HTML문서의 <style></style> 블록에서 `CSS 선택기` 사용하여 스타일을 HTML 요소에 적용한다.
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

## font 스타일 변경
* `font-size` 글골 크기를 지정
* `font-family: FAMILY_NAME, GENERIC_NAME;` `FAMILY_NAME` 로 글꼴을 설정하고 없을 경우에는 `GENERIC_NAME을` 사용한다.

## 구글 폰트 사용
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

## width를 사용하여 이미지 사이즈 지정
* 글꼴과 마찬가지로 `px`(픽셀)을 사용하여 너비 속성을 제어하는 `width`를 지정한다.
```css
img {
    width: 500px;
}
```

## 테두리 추가
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

## 모서리를 둥글게
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

