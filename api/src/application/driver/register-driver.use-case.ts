// RegisterPilotUseCase - NOT SPECIFIED - Antonio Gabarrús Nerin
// Registers a new pilot using injected repository
// Params: name, email, id (can be generated here or upstream)
// Returns: void
// Throws: Error if pilot already exists

import { TOKENS } from '@constants/dependency-tokens';
import { Driver } from '@dom/driver/driver.entity';
import { DriverRepository } from '@dom/driver/driver.repository.interface';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class RegisterDriverUseCase {
  constructor(@Inject(TOKENS.DRIVER_REPOSITORY) private readonly driverRepo: DriverRepository) {}

  async execute(name: string, email: string): Promise<void> {
    const existing = await this.driverRepo.findByEmail(email);
    if (existing) {
      throw new Error('Driver already exists with this email');
    }

    const driver = new Driver(name, email, name.slice(0, 3), undefined);
    await this.driverRepo.save(driver);
  }
}
