import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule, 
        MatButtonModule,
        MatIconModule
    ], 
    exports: [
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatIconModule
    ]
})


export class MaterialModule {}
