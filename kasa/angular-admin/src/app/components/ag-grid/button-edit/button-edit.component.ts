import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILoadingCellRendererAngularComp } from 'ag-grid-angular';
import { ILoadingCellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.css']
})
export class ButtonEditComponent implements ILoadingCellRendererAngularComp, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  private params: any;

  agInit(params: any): void {
    this.params = params;
  }
  btnClickedHandler() {
    this.params.clicked(this.params.value);
  }

}
