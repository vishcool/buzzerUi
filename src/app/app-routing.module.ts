import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayzoneComponent } from './playzone/playzone.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [


  {path:"setting",component:SettingComponent},
   {path:"game",component:PlayzoneComponent},
    {path:"**",redirectTo:"setting"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
