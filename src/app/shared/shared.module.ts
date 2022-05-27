import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastService } from './services/toastr/toastr.service';
import { MaterialModule } from './material/material.module';
import { ProcessbarComponent } from './components/processbar/processbar.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    ProcessbarComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    MaterialModule

  ],
  exports:[SpinnerComponent,
         ProcessbarComponent,
         MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [ToastService],
    }
  }
}
