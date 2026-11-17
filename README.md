# Diary by PixieFits — 사이트

App Store 제출에 필요한 **개인정보 처리방침 URL**과 **지원 URL**을 위한 정적 사이트입니다.
빌드 과정이 없습니다. GitHub Pages에 그대로 올리면 됩니다.

```
index.html     소개 페이지        → App Store "마케팅 URL" (선택)
privacy.html   개인정보 처리방침  → App Store "개인정보 처리방침 URL" (필수)
support.html   고객지원           → App Store "지원 URL" (필수)
terms.html     이용약관
style.css      스타일 (superpickypeople 사이트와 같은 에디토리얼 톤)
lang.js        영문/한국어 전환
.nojekyll      GitHub Pages가 Jekyll로 처리하지 않도록
```

## ⚠️ 올리기 전에 반드시

세 파일에 **`REPLACE-ME@example.com`** 이라고 적힌 자리가 있습니다. 실제 연락처로 바꾸세요.

```bash
grep -rn "REPLACE-ME" .
```

App Store 심사에서 연락이 닿지 않는 지원 주소는 리젝 사유가 됩니다.

## 배포

```bash
cd site
git init
git add .
git commit -m "Diary by PixieFits — privacy, terms and support"
git branch -M main
git remote add origin https://github.com/<아이디>/diary-by-pixiefits.git
git push -u origin main
```

GitHub → 저장소 → **Settings → Pages** → Source를 `Deploy from a branch`,
Branch를 `main` / `/ (root)` 로 두고 저장하면 1~2분 뒤에 열립니다.

```
https://<아이디>.github.io/diary-by-pixiefits/privacy.html   ← 개인정보 처리방침 URL
https://<아이디>.github.io/diary-by-pixiefits/support.html   ← 지원 URL
```

## 왜 한 URL 안에서 언어를 바꾸나

App Store Connect는 처리방침 **URL 하나**만 받습니다. 그래서 한국어판을 별도 주소에 두지 않고
같은 문서 안에 넣고 토글로 전환합니다. 처음 열 때는 브라우저 언어를 따라가고, 고른 언어는 기억됩니다.

## 내용이 앱과 어긋나지 않게

처리방침은 실제 코드에서 확인한 저장 지점을 그대로 적은 것입니다.

| 문서에 적힌 것 | 실제 위치 |
|---|---|
| 일기 페이지 | `users/{uid}/diary/{YYYY-MM-DD}` |
| 착용 기록 | `users/{uid}/wears` |
| 누끼 조각 | `users/{uid}/closetItems` + Storage `wardrobe/{uid}/pieces/` |
| 저장한 룩 | `users/{uid}/saved` |
| 페이지 사진 | Storage `diary/{uid}/{날짜}/` |
| 공용 옷장 | `outfits` (PixieFits와 공유) |
| 기기에만 | `pixiediary.city` · `pixiediary.draft` · `pixiediary.entries` · `pixiediary.pieces` |
| 외부 호출 | `open-meteo.com` (도시명·좌표만, 식별자 없음) |

앱에서 저장 위치를 바꾸면 **이 문서도 같이 고쳐야 합니다.** 처리방침과 실제 동작이 다르면
심사 문제 이전에 법적 문제가 됩니다.
