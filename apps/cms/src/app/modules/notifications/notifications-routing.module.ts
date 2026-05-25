import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendNotificationComponent } from './pages/send-notification/send-notification.component';
import { NotificationHistoryComponent } from './pages/notification-history/notification-history.component';

const routes: Routes = [
  { path: '', component: SendNotificationComponent },
  { path: 'history', component: NotificationHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsRoutingModule {}
