import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgxXBrowserSVGMaskModule } from "../../projects/ngx-x-browser-svg-mask/src/lib/ngx-x-browser-svg-mask.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxXBrowserSVGMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
