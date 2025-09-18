import { NgModule } from '@angular/core';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

import {
  ArrowDownOutline, ArrowUpOutline,
  BellOutline,
  DashboardOutline,
  EyeInvisibleOutline, EyeOutline,
  FolderOutline, FormOutline,
  HomeOutline,
  KeyOutline,
  LeftOutline,
  MenuFoldOutline, MenuUnfoldOutline, MenuOutline,
  NotificationOutline, NumberOutline,
  RightOutline,
  ScanOutline, SearchOutline, ShoppingCartOutline, TeamOutline, UserOutline, ClearOutline,
} from '@ant-design/icons-angular/icons';
import { NzSpinModule } from 'ng-zorro-antd/spin';

registerLocaleData(zh);

const ICONS = [
  ArrowDownOutline, ArrowUpOutline,
  BellOutline,
  DashboardOutline,
  EyeInvisibleOutline, EyeOutline,
  FolderOutline, FormOutline,
  HomeOutline,
  KeyOutline,
  LeftOutline,
  MenuFoldOutline, MenuUnfoldOutline, MenuOutline,
  NotificationOutline, NumberOutline,
  RightOutline,
  ScanOutline, SearchOutline, ShoppingCartOutline,
  TeamOutline,
  UserOutline, ClearOutline,
  MenuOutline, MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline, NotificationOutline, UserOutline, BellOutline, ShoppingCartOutline, LeftOutline, RightOutline, HomeOutline, SearchOutline, FolderOutline, NumberOutline, ArrowUpOutline, ArrowDownOutline, EyeOutline, EyeInvisibleOutline, KeyOutline,
  TeamOutline, ScanOutline,
];
const MODULES = [
  NzAvatarModule, NzAffixModule,
  NzBadgeModule, NzBreadCrumbModule, NzButtonModule,
  NzCardModule, NzCheckboxModule, NzCollapseModule,
  NzDatePickerModule, NzDividerModule, NzDrawerModule, NzDropDownModule, NzDescriptionsModule,
  NzEmptyModule,
  NzFormModule,
  NzGridModule,
  NzIconModule, NzImageModule, NzInputModule, NzInputNumberModule,
  NzLayoutModule, NzListModule,
  NzMenuModule, NzMessageModule, NzModalModule,
  NzNotificationModule,
  NzPaginationModule, NzPageHeaderModule, NzPopconfirmModule,
  NzRadioModule,
  NzSelectModule, NzSkeletonModule, NzSliderModule, NzStatisticModule, NzStepsModule, NzSwitchModule, NzSpinModule,
  NzTableModule, NzTabsModule, NzTagModule, NzTimelineModule,
  NzImageModule,
  NzStepsModule,
  NzResultModule,
  NzCarouselModule
]

@NgModule({
  imports: [],
  exports: [
    ...MODULES
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_TW },
    { provide: NZ_ICONS, useValue: ICONS }
  ]
})
export class AntdModule {
}
