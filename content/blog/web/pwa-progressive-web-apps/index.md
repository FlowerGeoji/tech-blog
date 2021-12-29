---
title: PWA-Progressive Web Apps
date: 2021-12-29 00:12:99
category: web
thumbnail: { thumbnailSrc }
draft: false
---

블로그나 사이트를 만들다보면 manifest설정(Gatsby starter를 사용한다면 'gatsby-plugin-manifest'플러그인을 볼 수 있을겁니다)을 발견할수 있습니다. manifest가 무엇인지 찾아보면 PWA(프로그레시브 웹앱)이라는 단어를 들어볼 수 있는데요. 본 글에서는 PWA와 manifest가 무엇인지 알아보고 manifest설정을 통해 무엇을 할 수 있는지 살펴보도록 하겠습니다.

## PWA(Progressive Web Apps)

PWA는 간단하게 말해서 **웹앱과 네이티브앱(안드로이드, iOS 등)의 기능들에서 이점만을 갖도록 여러가지 기술과 표준 패턴을 사용해서 개발된 <u>웹앱</u>입니다.**

- 웹앱은 설치과정이 필요하지 않고, 쉽게 검색이 가능하며, 링크(URL)로 쉽게 공유가 가능합니다.
- 네이티브의 앱은 운영체제와 보다 잘 호환되기 때문에 더 좋은 사용자 환경을 제공할 수 있습니다. '설치'를 하기 때문에 홈화면에서 쉽게 접근이 가능하고 오프라인 동작이 가능합니다.

PWA는 완전히 새로운 개념이나 기술을 이야기하는 것이 아닙니다. 기존의 웹앱에서 어떤 기능이나 기술을 제거하지 않고도 충분히 PWA로 만들 수 있습니다.

### 웹앱이 PWA가 되려면?

위에서도 언급했듯이, PWA는 여러가지 기술을 통하여 웹앱이 몇가지 원칙과 표준을 지키게 함으로써 만들 수 있습니다.

#### Discoverable
- 쉽게 검색이나 접근이 가능해야합니다. 
- sitemap, rss등을 제공하여 검색 엔진(SEO)에 등록함으로써 브라우저 검색이 가능하게 할 수 있습니다.
- [Web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)를 제공하여 홈 화면이너 앱 목록에서 쉽게 접근하도록 할 수 있습니다.

#### Installable
- 설치가 가능하여 디아비스의 홈 화면이나 앱 런처 등록하여 쉽게 접근할 수 있어야 합니다.
- Web app manfiest를 정의함으로써 홈 화면에 등록할 수 있습니다.
- 향후에는 [web app installation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installing)을 제공하여 사용자가 손쉽게 웹앱을 설치하도록 할 수 있습니다.

#### Linkable
- 쉽게 공유가 가능해야 합니다.
- 걱정마세요! 웹엡은 URL로 공유가 가능합니다!

#### Network independent
- 네트워크 연결이 없어도 동작해야 합니다.
- 네트워크 호출이 안되더라도 사용자가 기존에 열람했던 컨텐츠를 볼 수 있고, 접근제어를 할 수 있어야 합니다.
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)나 [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)를 사용하여 네트워크 요청과 응답을 캐싱하고, [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)나 [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) 등을 사용하여 저장함으로써 오프라인 기능을 제공할 수 있습니다.

#### Progressively enhanced
- 최신 브라우저의 모든 기능은 사용 못하더라도, 이전 브라우저의 기본적인 기능들을 사용할 수 있어야 합니다.
- PWA를 개발할때는 기능들이 브라우저 호환성에 잘 맞춰 동작하도록 해야합니다.([Progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement))

#### Re-engageable
- 새로운 컨텐츠가 추가되면 사용자들에게 알려 다시 앱에 접근할수 있도록 해야합니다.
- [Web Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)를 사용해서 서버에서 웹앱으로 메세지를 보내고, [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)를 통하여 시스템 알림으로 사용자들에게 새 소식을 전달할 수 있습니다.

#### Responsively designed
- 반응형 디자인으로 모바일 폰, 태블릿, 노트북, TV 등에서도 사용할 수 있어야 합니다.

#### Secure
- HTTPS처럼 제 3자로부터 데이터가 안전하게 보호됩니다.

[참고자료]
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#network_independence
- https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction
- https://developer.mozilla.org/en-US/docs/Web/Manifest