/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  OnInit,
  Injector,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Third party packages
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
SwiperCore.use([Pagination, Autoplay, Navigation]);

// Custom packages

import { BBDBaseComponent, BBDConfirmDialogComponent } from '@core/shared';
import { AppStoreApiServ, BuildProjectApiServ } from '@core/services';
import { BuildProjectReq, BuildProjectView, PagingRequest, PagingResponse } from '@core/models';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent extends BBDBaseComponent implements OnInit {
  searchControl = new FormControl('');
  searchOptions: string[] = ['國安國宅', '干城好宅', '尊榮貴賓'];
  searchValue = '';

  campainDate: Date = new Date();

  campaignList = [
    {
      signupDate: '2025.11.23',
      title: '宜蘭響應114年10月1日起公費新冠流感疫苗研討會暨宣導活動',
      sort: '學會公告'
    },
    {
      signupDate: '2025.10.15',
      title: '感染管制員甄試核心課程研習班（台中場）',
      sort: '活動訊息'
    },
    {
      signupDate: '2025.09.30',
      title: '114年長照機構感染管制查核工作坊-新北場',
      sort: '學會公告'
    },
    {
      signupDate: '2025.08.20',
      title: '113年長照機構嬰幼兒呼吸道疾病感染管制實務研討會',
      sort: '系統公告'
    },
    {
      signupDate: '2025.07.10',
      title: '114年長照機構感染管制查核工作坊-台中中山場',
      sort: '學會公告'
    }
  ];

  newsList = [
    {
      date: '2025.11.23',
      title: '呼吸道細胞融合病毒疫苗使用建議',
      sort: '學會公告'
    },
    {
      date: '2025.10.15',
      title: '2025年度醫療科技創新論壇開放報名',
      sort: '活動訊息'
    },
    {
      date: '2025.09.30',
      title: '新版臨床指引正式發布，即日起生效',
      sort: '學會公告'
    },
    {
      date: '2025.08.20',
      title: '會員系統維護通知：8/25 晚間暫停服務',
      sort: '系統公告'
    },
    {
      date: '2025.07.10',
      title: '醫學期刊投稿流程更新說明',
      sort: '學會公告'
    }
  ];

  campaignSwipe = {
    slidesPerView: 3,
    spaceBetween: 32,
    navigation: {
      nextEl: '.swiper-btn.next',
      prevEl: '.swiper-btn.prev',
    },
  };

  request = new PagingRequest<BuildProjectReq>();
  response: PagingResponse<BuildProjectView> | null = null;
  dataSource: BuildProjectView[] = [];

  constructor(
    public buildProjectApiServ: BuildProjectApiServ,
    private _dialog: MatDialog,
    private _appStoreApiServ: AppStoreApiServ,
    private _router: Router,
    protected override injector: Injector) {
    super(injector);
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    this.getCaches();
    this.doParamsInit();
    this.onSearch();
  }

  getCaches(): void {
    //
  }

  doParamsInit(): void {
    this.request.queryRequest = new BuildProjectReq();
    this.request.pageSize = 500;
    this.doParamsReset();
  }
  doParamsReset(): void {
    this.response = null;
    this.dataSource = [];
  }

  onSearch(pageIndex = 1): void {
    this.request.pageIndex = pageIndex;
    this.doParamsReset();
    this.spinnerServ.show();
    // this.sharedFuncServ.doQueryTimeOptimize<CorpReq>(this.request.queryRequest);
    this.buildProjectApiServ.getBuildProjectViewsPaging(this.request).subscribe({
      next: (res) => {
        if (!res || res.rows.isUndefinedOrNullOrEmpty()) {
          this.bbdNotifyServ.success('查無任何資料。');
          return;
        }
        this.response = res;
        this.dataSource = [...this.response.rows];

        console.log(this.dataSource);

      },
      error: (err) => {
        this.bbdNotifyServ.error('執行失敗', err);
      }
    }).add(() => this.spinnerServ.hide());
  }

  deleteBuildProject(view: BuildProjectView): void {
    const dialogRef = this._dialog.open(BBDConfirmDialogComponent, {
      data: {
        title: `您確認要「刪除」?`,
        content: `執行「刪除」專案「${view.name}」，刪除後將無法復原。`,
      },
      panelClass: 'rounded-md', // optional
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.spinnerServ.show();
        this.buildProjectApiServ.deleteBuildProject(view.id).subscribe({
          next: (res) => {
            if (res) {
              this.bbdNotifyServ.success(`刪除成功`);
              this.onSearch();
            }
          },
          error: (err) => {
            this.bbdNotifyServ.error('執行失敗', err);
          },
        }).add(() => this.spinnerServ.hide());
      }
    });
  }

  doRouterPage(item: BuildProjectView): void {
    const baseUrl = '/project/edit';
    const queryParams: any = {
      buildProjectId: item.id,
      mode: 'edit',
    };
    const queryString = new URLSearchParams(queryParams).toString();
    this.buildProjectApiServ.getBuildProjVolumeViewsByProjectId(item.id).subscribe({
      next: (res) => {
        if (res?.length) {

          this._router.navigate(['/project/mass-comparison'], {
            queryParams: {
              buildProjectId: item.id
            }
          });
          return;
        }
        window.location.href = `${baseUrl}?${queryString}`;
      },
      error: () => {
        window.location.href = `${baseUrl}?${queryString}`;
      }
    });
  }
}
