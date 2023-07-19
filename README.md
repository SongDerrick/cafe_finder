# :bulb: Discover Cafes! 
새로운 카페를 찾고 공유하는 웹 애플리케이션
<br>
<br> 

>**Discover Cafes!**, <br>

> 실시간으로 업데이트 되는 정보를 통해 취향 저격 카페와 후기를 찾아보세요 <br>
> 매일 매일 색다른 카페를 발견하고, 최고의 디저트 경험을 즐겨보세요! <br/> 

<br>


## 💻 Next.js, MongoDB, Google SDK, Vercel을 활용한 소셜 웹 애플리케이션 <br>
![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React.js](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


- [x] Next.js를 활용한 풀스택 웹 애플리케이션 구현
- [x] Google SDK와 next-auth를 이용하여, OAuth2.0 서비스 구축
- [x] Next.js 기반 백엔드 서버를 구축하여, 소셜 애플리케이션 서비스를 제공하기 위한 CRUD 서비스 구축
- [x] React.js를 활용한 프론트엔드 디자인


Visit our project here
[Discover Cafes!](https://cafe-finder-eight.vercel.app/)

## 🙆 Members
|Name|Education|github ID|
|:---|:---|:---|
|송도윤|GIST 전기전자컴퓨터공학부|[SongDerrick](https://github.com/SongDerrick/)|
|윤동규|KAIST 전산학부|[justinyoonwk](https://github.com/justinyoonwk)|

please vist my blog haha 😄 -> [도윤송의 블로그](https://doyoonsong.vercel.app)
<br/>

---


## 📖 Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Installation](#installation)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgments)
  
## Project Description

지금 책잼은 독서를 새로운 차원으로 끌어올릴 수 있는 독서 플랫폼입니다. 책을 사랑하는 이들을 위해 다양한 기능을 제공하고 있습니다.
<br>
먼저, 책모임 홍보 서비스를 통해 독서 모임을 만들고 다른 사람들과 함께 책을 읽을 수 있게 도와드립니다. 
<br>
이를 통해 독서를 좀 더 즐겁고 의미 있는 경험으로 만들 수 있습니다. 
<br>
독서 모임에서는 책에 대한 감상을 공유하고, 독서 후기를 작성하여 다른 사람들과 소통할 수 있습니다.
<br>
또한, 책에 대한 기록을 남기고 다른 사람들과 공유하는 서비스를 제공합니다. 
<br>

내가 읽은 책들과 감상평을 기록하여 독서 경험을 기록으로 남길 수 있습니다. 
<br>
이를 통해 자신의 독서 성취를 확인하고, 다른 사람들과 읽은 책에 대한 이야기를 나눌 수 있습니다.
<br>
<br>
뿐만 아니라, 지금 어떤 책들을 읽고 있는지 알 수 있는 서비스도 제공합니다. 
<br>
다른 사람들의 독서 현황을 확인하여 독서 동기부여를 받을 수 있습니다.
<br>
또한, 내가 읽은 책들에 대한 추천도 받을 수 있어 새로운 독서 목록을 찾는 데 도움이 됩니다.
<br>
지금 책잼은 독서의 재미를 더하고, 독서를 사랑하는 사람들이 함께 소통하고 성장할 수 있는 플랫폼입니다. 
<br>
책잼을 통해 독서를 더욱 풍부하고 의미 있는 경험으로 만들어보세요!

### Loading Page             

|<img src="images/Screenshot_1.jpg" alt="Sc1" width="270" height="570">|

### Tab 1 : ☎️ Contacts
<img src="images/Screenshot_2.jpg" alt="Sc2" width="270" height="570"> <img src="images/Screenshot_5.jpg" alt="Sc5" width="270" height="570"> <img src="images/Tab1.gif" alt="Sc4" width="270" height="570">

First tab is My Contacts.<br>
By clicking the purple floating button, you can add a new contact.<br>
By clicking the gray phone button, you can directed to phone call with designated phone number.<br/>
<br/>
if we want to put initial data into application, we can modify 
```
    private val dataList = mutableListOf(
        PhoneData("Jang", "010-1234-1234"),
        PhoneData("Song", "010-1241-1313"),
        PhoneData("LSLS", "010-1313-1313"),
        PhoneData("SSSS", "010-4142-4224"),
        PhoneData("ALSS", "010-1414-1414")
    )
```
in java>ui>phone>Phonefragment.kt

### Tab 2 : 📑 Gallery             
<img src="images/Screenshot_3.jpg" alt="Sc3" width="270" height="570"> <img src="images/Screenshot_6.jpg" alt="Sc3" width="270" height="570"> <img src="images/Tab2.gif" alt="Sc4" width="270" height="570">

Second tab is My Gallery.<br>
It has layout of staggered grid layout. Even with different size images, each images are not distorted but rather shown in aspect ratio.<br>
You also have access to each images by clicking them, you can zoom out and zoom in by multi-touch pinching motion.<br>
Also, with external storage access granted you can download each images by clicking download button.

### Tab 3 : 👅 Wise Sayings Generator                   
<img src="images/Screenshot_4.jpg" alt="Sc4" width="270" height="570"> <img src="images/Tab3.gif" alt="Sc4" width="270" height="570">

Final tab is Wise Sayings Generator.<br>
Everytime the screen is clicked new wise sayings are generated from APIs from https://api.qwer.pw/.<br>
However, response from the APIs were in JSON format, and actual sayings and the person who said it were all contained in single string.<br>
Therefore, we had to parse them to use as adequate output.


## Features

<br/>Main Activity<br/>
We used navgationcontroller to make three tabs in bottom. It is 'Phone, gallery, Wise Saying'

<br/>Phone<br/>
We used Relativelayout to put floating action button and recyclerview in one page.
In recyclerview, we put phonedata having 'name' and 'phoneNum'. 
<br/>
<img width="178" alt="image" src="https://github.com/SongDerrick/android_three_tab/assets/55375379/6c95836d-4c93-4cc5-b37f-99c82024cb43">
<br/>
one item of recyclerview is like this.

and if We push FAB(Floating Action Button), the bottom sheet appears to add contact.
<br/>
<img width="177" alt="image" src="https://github.com/SongDerrick/android_three_tab/assets/55375379/59ea947d-9f46-4fa2-87c3-2eae30d3fcad"><br/>
This is a capture of bottom sheet. <br/>
We can click 'ic_phone' to change our phone into calling page.

<br/>Gallery<br/>

in fragment_home.xml, we made recyclerview to show our gallery. and in activity_detailed.xml, we made detailed image view.
We used StaggeredGridLayoutManager to make grid resized depending on component image's size.<br/>
<img width="181" alt="image" src="https://github.com/SongDerrick/molcamp_week_1/assets/55375379/bfba0a94-e11b-432e-802c-12662aa9d9c9"><br/>
this is the detailed image view of our application.


<br/>Wise Saying<br/>

in fragment_notifications.xml we made Relativelayout that has progressbar and two textviews.we used api from https://api.qwer.pw/
we parsed wise saying with dashbar, dividing the wise saying and the person who made it.
  
## Installation

Nothing Special.<br/>
Clone and Build project in Android Studio.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!
<br/>
1.Fork the Project<br/>
2.Create your Feature Branch (```git checkout -b feature/AmazingFeature```)<br/>
3.Commit your Changes (```git commit -m 'Add some AmazingFeature'```)<br/>
4.Push to the Branch (```git push origin feature/AmazingFeature```)<br/>
5.Open a Pull Request<br/>

## Acknowledgments

<https://api.qwer.pw/> <br/>
<https://developer.android.com/docs?hl=ko> <br/>
