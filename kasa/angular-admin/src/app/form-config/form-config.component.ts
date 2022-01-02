import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../base/component/base.component';
import { ButtonEditComponent } from '../components/ag-grid/button-edit/button-edit.component';
import { AppFormModel } from '../model/form.model';
import { AppFormService } from '../service/app.form.service';

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {
  frameworkComponents!: { btnCellRenderer: typeof ButtonEditComponent; };
  createForm!: FormGroup;
  rowData = [];

  constructor(private formService: AppFormService, private fb: FormBuilder, private toastService: ToastrService) { }
  columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'method' },
    { field: 'fields' },
    {
      field: "atheros",
      cellRenderer: "btnCellRenderer",
      cellRendererParams: {
        clicked: function(field: any) {
          alert(`${field} was clicked`);
        }
      },
      minWidth: 150
    },
  ];



  ngOnInit(): void {
    this.createForm = this.fb.group({
      name: ["", Validators.required],
      method: ["", Validators.required],
      fields: ["", Validators.required]
    });
    this.frameworkComponents = {
      btnCellRenderer: ButtonEditComponent
    };

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
