import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducers } from './root-reducer';
import { appEffects } from './root-effects';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(appEffects),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      name: 'anymind-chat',
      logOnly: environment.production
    })
  ]
})

export class RootStoreModule { }
