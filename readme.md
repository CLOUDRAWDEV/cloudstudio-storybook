# CloudStudio Design System Library

<img src="https://img.shields.io/badge/Version-v1.2.0-206FD6?style=for-the-badge&logoColor=white"/>

---

<img src="https://img.shields.io/badge/React-v18.2.0-61DAFB?style=flat-square&logo=React&logoColor=white"/>

<img src="https://img.shields.io/badge/Next.js-12.2.0-000000?style=flat-square&logo=Next.js&logoColor=white"/>

<img src="https://img.shields.io/badge/Storybook-v6.5.13-FF4785?style=flat-square&logo=Storybook&logoColor=white"/>

---

## 페이지 링크

https://cloudrawdev.github.io/cloudstudio-storybook/

---

## 소개

본 문서는 CloudStudio의 UI 컴포넌트 및 디자인 시스템 관리를 위해 작성되었습니다.

CloudStudio에 사용되는 UI 컴포넌트를 사전에 테스트해볼 수 있습니다.

테스트 중 발견된 오류 및 개선 사항 발견 시 알려주시면 최대한 빠르게 수정하겠습니다. 😊

---

## 스토리북 구성

스토리로 작성된 UI 컴포넌트 목록은 다음과 같이 구성되어 있습니다.

```js
    Components // Core Root.
        ㄴ 컴포넌트 // 컴포넌트 명
            ㄴ All Props // 컴포넌트에 사용가능한 모든 props list를 포함하는 스토리입니다.
            ㄴ Use Case // 해당 컴포넌트의 사용 예가 Description이 함께 작성되어 있는 스토리입니다.
            ㄴ ...
            ㄴ Style Props // UI 스타일 변경과 관련된 스토리입입니다.
```

예) Button.stories.tsx

```js
    Components
        ㄴ Button
            ㄴ Button // 범용적으로 사용되는 Button 컴포넌트입니다.
                // All Props
                ㄴ All Props
                // Use Case
                ㄴ Primary // 버튼 UI 필요할 때 일반적으로 사용되는 Button 컴포넌트입니다.
                ㄴ Cancel // 동작을 취소할 때 사용되는 CancelButton 컴포넌트입니다.
                ㄴ Warning // 부정지표가 예상될 때 경고를 위해 사용되는 WarningButton 컴포넌트입니다.
                // Style Props
                ㄴ Color
                ㄴ Size
                ㄴ Variant
            ㄴ ...

```

---

Copyright ⓒ 2021 Cloudraw. Inc.
