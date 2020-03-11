# CSS


## CSS란 ?
CSS (Cascading Style Sheets)는 HTML로 작성하는 텍스트 및 기타 내용을 표시하는 방법을 브라우저에 알려준다. 

## CSS를 적용하는 방법
* <style></style> 속성을 사용하여 스타일을 HTML 요소에 적용 
* HTML문서의 태그내에 CSS 규칙을 배치해서 적용
* 외부 스타일 시트에 CSS 규칙을 작성한 다음 HTML 문서에서 해당 파일을 참조

## 인라인 스타일로 스타일 적용
```html
<h2 style="color: blue;"> Blue Text </h2>
```

## CSS 선택기를 사용하여 스타일 적용
* `style` 블록에서 `CSS 선택기`를 사용해 요소에 스타일을 적용 한다.
```html
<style>
    h2 {
        color: red;
    }
</style>
```

## 클래스를 사용하여 여러 HTML 요소에 스타일 적용
<style>
    .blue-text {
        color: blue;
    }
</style>
<h2 class="blue-text"> Title </h2>
<div>
    <p class="blue-text"> Contents </p>
</div>
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
