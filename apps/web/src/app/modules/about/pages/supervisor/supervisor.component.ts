import { Component, Injector, OnInit } from '@angular/core';

// Custom packages
import { BBDBaseComponent } from '@core/shared';
import { title } from 'process';

export interface Member {
  name: string;
  title: string;
  describe: string[];
  photoUrl?: string;
}

@Component({
  selector: 'web-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.scss']
})
export class SupervisorComponent extends BBDBaseComponent implements OnInit {

  chairman = [
    {
      name: '薛博仁 教授',
      title: '理事長',
      describe: [
        '中國醫藥大學 副校長',
        '中醫大附醫檢驗醫學中心院長',
        '國立台灣大學醫學院附設醫院內科部主治醫師'
      ],
      photoUrl: 'assets/image/members/chairman-01.png'
    },
    {
      name: '柯文謙 教授',
      title: '常務監事',
      describe: [
        '國立成功大學醫學院醫學系教授',
        '曾任 國立成功大學醫學院附設醫院 副院長'
      ],
      photoUrl: 'assets/image/members/standing-supervisors-01.png'
    }
  ];

  standingDirectors = [
    {
      name: '吳俊忠 教授',
      title: '常務理事',
      describe: [
        '亞洲大學講座教授',
        '曾任亞洲大學醫學暨健康學院院長',
        '陽明大學生物醫學暨工程學院院長'
      ],
      photoUrl: 'assets/image/members/standing-directors-01.png'
    },
    {
      name: '張詩聖 副教授',
      title: '常務理事',
      describe: [
        '中國醫藥大學附設醫院人工智慧中心主任'
      ],
      photoUrl: 'assets/image/members/standing-directors-02.png'
    },
    {
      name: '郭律成 醫師',
      title: '常務理事',
      describe: [
        '臺大醫院內科部主治醫師',
        '臺大醫院醫療資訊長',
        '暨智慧醫療中心副主任'
      ],
      photoUrl: 'assets/image/members/standing-directors-03.png'
    },
    {
      name: '謝文祥 副部長',
      title: '常務理事',
      describe: [
        '義大醫療體系行政中心',
        '智慧醫療部 部長',
        '醫療品質部 副部長',
        '義大醫院醫學教育委員會 副主席'
      ],
      photoUrl: 'assets/image/members/standing-directors-04.png'
    }
  ];

  directors = [
    {
      name: '王唯堯 副教授',
      title: '理事',
      describe: [
        '中山醫學大學附設醫院感染科主治醫師',
        '中山醫學大學醫學系專任副教授'
      ],
      photoUrl: 'assets/image/members/directors-03.png'
    },
    {
      name: '余志強 副教授',
      title: '理事',
      describe: [
        '亞洲大學附設醫院檢驗部主任'
      ],
      photoUrl: 'assets/image/members/directors-08.png'
    },
    {
      name: '吳亞倫 工程師',
      title: '理事',
      describe: [
        '中國醫藥大學附設醫院人工智慧醫學診斷中心演算法工程師'
      ],
      photoUrl: 'assets/image/members/directors-10.png'
    },
    {
      name: '施宏謀 醫師',
      title: '理事',
      describe: [
        '中國醫藥大學附設醫院急症暨外傷中心急診部副主任',
        '護理部病房護理站病房主任',
        '急症暨外傷中心急診部主治醫師'
      ],
      photoUrl: 'assets/image/members/directors-04.png'
    },

    {
      name: '郭錦輯 教授',
      title: '理事',
      describe: [
        '中國醫藥大學附設醫院大數據中心副院長',
        '中國醫藥大學附設醫院醫學研究部副主任',
        '中國醫藥大學附設醫院內科部醫藥系主治醫師'
      ],
      photoUrl: 'assets/image/members/directors-01.png'
    },
    {
      name: '陳一心 醫師',
      title: '理事',
      describe: [
        '臺中慈濟醫院腎臟內科主任',
        '中興大學人工智慧與資料科學研究所助理教授'
      ],
      photoUrl: 'assets/image/members/directors-06.png'
    },
    {
      name: '游雅言 主任',
      title: '理事',
      describe: [
        '衛生福利部彰化醫院醫學檢驗科主任'
      ],
      photoUrl: 'assets/image/members/directors-07.png'
    },
    {
      name: '黃昱璁 醫師',
      title: '理事',
      describe: [
        '國立臺灣大學醫學院附設醫院檢驗醫學部主治醫師'
      ],
      photoUrl: 'assets/image/members/directors-02.png'
    },
    {
      name: '賴志政 醫師',
      title: '理事',
      describe: [
        '奇美醫學中心加護醫學部主治醫師'
      ],
      photoUrl: 'assets/image/members/directors-05.png'
    },
    {
      name: '賴靜憶 副主任',
      title: '理事',
      describe: [
        '台中榮民總醫院病理檢驗部 品保副主任',
        '中國醫藥大學附設醫院醫事檢驗師'
      ],
      photoUrl: 'assets/image/members/directors-09.png'
    },
  ];

  supervisors = [
    {
      name: '王敦仁 專員',
      title: '監事',
      describe: [
        '馬偕紀念醫院/總院院長辦公室/專員'
      ],
      photoUrl: 'assets/image/members/supervisors-04.png'
    },
    {
      name: '李岱芬 醫檢師',
      title: '監事',
      describe: [
        '國立台灣大學醫學院附設醫院醫事檢驗師'
      ],
      photoUrl: 'assets/image/members/supervisors-02.png'
    },
    {
      name: '林正修 醫師',
      title: '監事',
      describe: [
        '彰化基督教醫院醫師',
        '中國醫藥大學附設醫院 檢驗醫學部顧問主治醫師',
        '台中市立老人復健綜合醫院 檢驗醫學科主任'
      ],
      photoUrl: 'assets/image/members/supervisors-01.png'
    },
    {
      name: '林進福 醫檢師',
      title: '監事',
      describe: [
        '中國醫藥大學附設醫院醫事檢驗師'
      ],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
      // photoUrl: 'assets/image/members/supervisors-04.png'
    },
  ];

  secretaryGeneral = [
    {
      name: '蕭瓊子 副主任',
      title: '秘書長',
      describe: [
        '中國醫藥大學附設醫院檢驗醫學部副主任',
        '亞洲大學助理教授'
      ],
      photoUrl: 'assets/image/members/secretary-general.png'
    }
  ];

  DeputySecretaryGeneral = [
    {
      name: '蔡雅雯',
      title: '南區副秘書長',
      describe: [
        '奇美醫院院長室專員',
        '奇美醫院醫檢師'
      ],
      photoUrl: 'assets/image/members/deputy-secretary-001.jpg'
    },

    {
      name: '朱學緯',
      title: '北區副秘書長',
      describe: [
        '國立台灣大學附設醫院醫檢師'
      ],
      photoUrl: 'assets/image/members/deputy-secretary-002.jpg'
    },
    {
      name: '何文育',
      title: '中區副秘書長',
      describe: [
        '中國醫藥大學北港附設醫院院務秘書'
      ],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
    },
  ];

  secretariat = [
    {
      name: '薛翔中',
      title: '秘書處',
      describe: [],
      photoUrl: 'assets/image/illustration/avatar-defualt-male.svg'
    },
    {
      name: '吳慧芸',
      title: '秘書處',
      describe: [],
      photoUrl: 'assets/image/illustration/avatar-defualt-female.svg'
    }
  ];

  alternate = [
    { name: '陳嘉文', title: '監事備 1', describe: ['衛生福利部豐原醫院醫事檢驗科主任'], photoUrl: 'assets/image/illustration/avatar-defualt-male.svg' },
    { name: '何文育', title: '理事備 2', describe: ['中國醫藥大學北港附設醫院院務秘書'], photoUrl: 'assets/image/illustration/avatar-defualt-male.svg' },
    { name: '張煜昌', title: '理事備 3', describe: ['中國醫藥大學附設醫院醫事檢驗師'], photoUrl: 'assets/image/illustration/avatar-defualt-male.svg' },
    { name: '蔡雅雯', title: '理事備 4', describe: ['奇美醫院專員'], photoUrl: 'assets/image/illustration/avatar-defualt-female.svg' },
    { name: '鄭敏琳', title: '理事備 5', describe: ['長安醫院檢驗科科主任'], photoUrl: 'assets/image/illustration/avatar-defualt-female.svg' }
  ]

  constructor(
    protected override injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    console.log('supervisor component init');
  }
}
