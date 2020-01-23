import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,

  ]
})
export class CoreModule {
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanatizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIconSet(domSanatizer.bypassSecurityTrustResourceUrl('./assets/icons/mdi.svg'));

    this.registerIconFromSvg('add_circle_outline');
    this.registerIconFromSvg('power_settings_new')

  }

  private registerIconFromSvg(name:string) {
    this.matIconRegistry.addSvgIcon(name, this.domSanatizer.bypassSecurityTrustResourceUrl(`./assets/icons/${name}.svg`));
  }
 }
