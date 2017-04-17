import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';
import {MetaConfig, MetaModule} from "ng2-meta";

const metaConfig: MetaConfig = {
  //Append a title suffix such as a site name to all titles
  //Defaults to false
  useTitleSuffix: true,
  defaults: {
    title: 'Default title for pages without meta in their route',
    titleSuffix: ' | Site Name',
    'og:image': 'http://example.com/default-image.png',
    'any other': 'arbitrary tag can be used'
  }
};

@NgModule({
  declarations: [ AppComponent, XLargeDirective],
  imports: [
    MetaModule.forRoot(metaConfig),
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    AppRoutingModule
  ]
})
export class AppModule {
}



export { AppComponent } from './app.component';
