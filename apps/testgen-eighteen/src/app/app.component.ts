import { Component } from '@angular/core';

@Component({
  selector: 'testgen-eighteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-eighteen';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
