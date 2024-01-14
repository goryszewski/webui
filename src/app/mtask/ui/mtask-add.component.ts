import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription, debounceTime, startWith } from 'rxjs';
import { FormValue } from 'src/app/utils/form-value.type';

type MTasksListFiltersForm = FormGroup<{
  name: FormControl<string>;
  describe: FormControl<string>;
  autor: FormControl<string>;
}>;

export type MTasksListFiltersFormValue = FormValue<MTasksListFiltersForm>;

@Component({
  selector: 'app-mtask-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" class="max-w-md mx-auto">
      <div class="relative z-0 w-full mb-5 group">
        <input
          formControlName="name"
          id="name"
          #inputname
          class="border-b border-b-orange-400 outline-none"
          placeholder="Name"
        />
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          formControlName="describe"
          name="describe"
          #inputdescribe
          class="border-b border-b-orange-400 outline-none"
          placeholder="Describe"
        />
      </div>
      <div class="relative z-0 w-full mb-5 group">
        <input
          formControlName="autor"
          name="autor"
          #inputautor
          class="border-b border-b-orange-400 outline-none"
          placeholder="Autor"
        />
      </div>
      <div>
        <button
          (click)="AddMtask()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Mtask
        </button>
      </div>
    </form>
  `,
  styles: ``,
})
export class MtaskAddComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  @Output() addMtask = new EventEmitter<MTasksListFiltersFormValue>();
  private formChangesSubscription?: Subscription;

  form: MTasksListFiltersForm = this.formBuilder.group({
    name: this.formBuilder.control<string>(''),
    describe: this.formBuilder.control<string>(''),
    autor: this.formBuilder.control<string>(''),
  });
  ngOnInit() {
    this.formChangesSubscription = this.form.valueChanges
      .pipe(startWith(this.form.value), debounceTime(1000))
      .subscribe(() => {
        console.log(this.form.getRawValue());
      });
  }

  AddMtask() {
    console.log(this.form.getRawValue());
    console.log('e');
    this.addMtask.emit(this.form.getRawValue());
  }
}
