import { HeroStoreModule } from './hero-store.module';

describe('HeroStoreModule', () => {
  let heroStoreModule: HeroStoreModule;

  beforeEach(() => {
    heroStoreModule = new HeroStoreModule();
  });

  it('should create an instance', () => {
    expect(heroStoreModule).toBeTruthy();
  });
});
