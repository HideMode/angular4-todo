import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from "@angular-redux/store";
import { MdlModule } from "@angular-mdl/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IAppState, rootReducer } from "./store";
import { SharedModule } from "./shared/shared.module";
import { TodosModule } from "./todos/todos.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    SharedModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // 定义全局的store   NgRedux的类型是泛型的，
  constructor(ngRedux: NgRedux<IAppState>) {
    // 初始化我们的store
    // 第一个参数是reducer函数，第二个参数是initState

    ngRedux.configureStore(rootReducer, {});
  }
}
