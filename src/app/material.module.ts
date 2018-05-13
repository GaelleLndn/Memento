import { NgModule } from '@angular/core';
import { MatToolbarModule, MatTabsModule } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatTabsModule
    ], 
    exports: [
        MatToolbarModule,
        MatTabsModule
    ]
})


export class MaterialModule {}
