import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { TabsComponentRoutingModule } from './tabs.router.module';
import { TabsComponent } from './tabs.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { DeviceConnectionComponent } from '../device-connection/device-connection.component';
import { MiBandTestComponent } from '../mi-band-test/mi-band-test.component';
import { LineChartComponentModule } from '../data-visualization/line-chart/line-chart.module';
import { BarChartComponentModule } from '../data-visualization/bar-chart/bar-chart.module';
import { DynamicLineChartComponentModule } from '../data-visualization/dynamic-line-chart/dynamic-line-chart.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsComponentRoutingModule,
    LineChartComponentModule,
    BarChartComponentModule,
    DynamicLineChartComponentModule,
    NgCircleProgressModule.forRoot({})
  ],
  declarations: [
    TabsComponent,
    HomeComponent,
    LeaderboardComponent,
    StatisticsComponent,
    ProfileComponent,
    DeviceConnectionComponent,
    MiBandTestComponent,
  ]
})
export class TabsPageModule {
}
