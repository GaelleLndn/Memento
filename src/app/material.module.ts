import { NgModule } from '@angular/core';
import { MatSelectModule, MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatIconModule, MAT_DATE_LOCALE, MatExpansionModule } from '@angular/material';

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
        MatIconModule,
        MatExpansionModule,
        MatSelectModule
    ], 
    exports: [
        MatToolbarModule,
        MatTabsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        MatSelectModule
    ]
})


export class MaterialModule {}