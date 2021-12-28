import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../base/component/base.component';
import { AppFormModel } from '../model/form.model';
import { FormService } from '../service/app.form.service';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {

  createForm!: FormGroup;
  rowData = [];

  constructor(private formService: FormService, private fb: FormBuilder, private toastService: ToastrService) { }
  columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'method' },
    { field: 'fields' }
  ];


  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      method: ["", Validators.required],
      fields: ["", Validators.required]
    });
    this.formService.getData().subscribe((response) =>{
        this.formService.log("Form Data", response);
    });
  }
  onSubmit() {
    let model: AppFormModel = new AppFormModel();
    model.fields = this.createForm.controls["fields"].value;
    model.name = this.createForm.controls["name"].value;
    model.mode = this.createForm.controls["method"].value;
    this.formService.create(model).subscribe((response) => {
      if (response.success) {
        this.toastService.success("Kayit Islemi", "Islem Basarili");
      }

    });
  }

}
