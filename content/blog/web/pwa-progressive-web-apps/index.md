---
title: PWA-Progressive Web Apps
date: 2021-12-29 00:12:99
category: web
draft: false
---

블로그나 사이트를 만들다보면 manifest설정(Gatsby starter를 사용한다면 'gatsby-plugin-manifest'플러그인을 볼 수 있을겁니다)을 발견할수 있습니다. manifest가 무엇인지 찾아보면 PWA(프로그레시브 웹앱)이라는 단어를 들어볼 수 있는데요. 본 글에서는 PWA와 manifest가 무엇인지 간략하게 알아보도록 하겠습니다.

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
- HTTPS처럼 제 3자로부터 데이터가 안전하게 보호되야 합니다.

---

## 왜 PWA인가?

<span>해당 본문을 보기전에 잘 정리된(좀 오래됬지만) [관련자료](https://altenull.github.io/2018/02/25/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9-%EC%95%B1-Progressive-Web-Apps-%EB%9E%80/)를 보고오시면 더 이해가 잘되실겁니다.</span>

왜 PWA일까요? 모바일 사용자들은 네이티브 앱만으로는 부족한걸까요? 우리는 이쯤에서 네이티브 앱과 웹앱의 사용방식을 한번 되돌아볼 필요가 있습니다.

여러분은 한달에 '앱' 설치를 몇번 하시나요? 사람마다 그리고 상황마다 다를 수 있지만 '앱' 설치를 그렇게 자주 하지는 않습니다(심지어 '설치'는 뭔가 큰일을 하는 느낌입니다. 귀찮죠). 하지만 그럼에도 불구하고 대부분의 모바일 사용 시간은 '앱'을 사용하는데 쓰입니다. 그리고 대부분 매번 사용하던(유튜브나 인스타 같은) '앱'만 다시 사용하죠.

그렇다면 '웹'은 어떤가요? '웹'은 '앱'에 비해서 모바일에서 사용 시간이 그렇게 긴편은 아닙니다. 하지만 사용자들은 '웹'을 통해서 쉽게 원하는 자료를 검색하고, 이곳저곳을 자유롭게 드나듭니다. 그리고 친구들에게 아주 손쉽고 빠르게 공유가 가능합니다(URL만 복사해서 보내주면 됩니다!)

웹과 앱은 각각 특성과 장단점이 아주 분명합니다. 앱은 OS친화적이고 다양한 기능들을 사용할 수 있기때문에 사용자들에게 더 좋은 경험을 제공할 수 있습니다. 그에 웹은 기능적인 한계가 있지만 URL을 통해 아주 쉽게 접근이 가능하고 딱히 설치과정이 필요없어서 사용하는데 가벼운 느낌을 줍니다. 그렇기때문에 PWA를 통해서 '웹'과 '앱'의 이점만을 취합하여 사용자들에게 제공하면 더 좋은 사용자 경험을 제공할 수 있을 것입니다.

## 마무리

이번 포스트에서는 간단하게 PWA가 무엇인지 어떠한 특성을 가지는지를 적어봤습니다. 다음 포스트에서는 웹앱에서 어떠한 기술들을 사용해서 PWA를 만드는지 좀 더 상세하게 알아보도록 하겠습니다.

[참고자료]
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#network_independence
- https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps/Introduction
- https://developer.mozilla.org/en-US/docs/Web/Manifest