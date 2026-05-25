import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopBarComponent } from './components/topbar/topbar.component';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  declarations: [AppShellComponent],
  imports: [
    CommonModule,
    ShellRoutingModule,
    SidebarComponent,
    TopBarComponent,
  ],
})
export class ShellModule {}
