import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HeroStoreEffects } from './effects';
import { heroReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('hero', heroReducer),
    EffectsModule.forFeature([HeroStoreEffects])
  ],
  providers: [HeroStoreEffects]
})
export class HeroStoreModule {}
