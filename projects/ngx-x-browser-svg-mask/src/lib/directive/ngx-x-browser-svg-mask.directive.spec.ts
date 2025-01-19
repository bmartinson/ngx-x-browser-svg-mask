import { TestBed } from '@angular/core/testing';

import { NgxXBrowserSVGMaskDirective } from './ngx-x-browser-svg-mask.directive';

describe('NgxXBrowserSVGMaskDirective', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const directive: NgxXBrowserSVGMaskDirective = TestBed.inject(NgxXBrowserSVGMaskDirective);
    expect(directive).toBeTruthy();
  });
});
