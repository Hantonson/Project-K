
import { Module } from '@nestjs/common';
import { RegisterDriverUseCase } from './register-driver.use-case';
import { InMemoryDriverRepository } from '@infra/persistence/driver.repository.memory';
import { TOKENS } from '@constants/dependency-tokens';

@Module({
  providers: [
    RegisterDriverUseCase,
    {
      provide: TOKENS.DRIVER_REPOSITORY, // Token de la interfaz
      useClass: InMemoryDriverRepository, // Implementación concreta
    },
  ],
  exports: [RegisterDriverUseCase], // Lo exponemos para que lo usen los controladores
})
export class DriverModule {}
