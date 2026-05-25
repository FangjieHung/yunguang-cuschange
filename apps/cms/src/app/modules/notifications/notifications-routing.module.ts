import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendNotificationComponent } from './pages/send-notification/send-notification.component';
import { NotificationHistoryComponent } from './pages/notification-history/notification-history.component';
import { NotificationDetailComponent } from './pages/notification-detail/notification-detail.component';

const routes: Routes = [
  { path: '', component: SendNotificationComponent },
  { path: 'history', component: NotificationHistoryComponent },
  { path: 'history/:id', component: NotificationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsRoutingModule {}
