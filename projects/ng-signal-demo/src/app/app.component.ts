import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: '<div>testing</div>',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
