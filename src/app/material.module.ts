import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatIconModule, MAT_DATE_LOCALE, MatExpansionModule } from '@angular/material';

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
        MatExpansionModule
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
        MatIconModule,
        MatExpansionModule
    ]
})


export class MaterialModule {}