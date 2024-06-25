import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}
@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  reactiveMenu: MenuItem[] = [
    {title: 'básicos', router: './reactive/basic'},
    {title: 'dinámicos', router: './reactive/dynamic'},
    {title: 'switches', router: './reactive/switches'},
  ]

  authMenu: MenuItem[] = [
    {title: 'registro', router: './auth'},
  ]
}
