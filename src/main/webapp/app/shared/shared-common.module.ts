import { NgModule } from '@angular/core';

import { JhipsterCiDemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterCiDemoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterCiDemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterCiDemoSharedCommonModule {}
