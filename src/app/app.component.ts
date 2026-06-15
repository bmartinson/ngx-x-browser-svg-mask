import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-svgmask-app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'ngx-x-browser-svg-mask-sample';
}
