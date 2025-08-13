// InMemoryPilotRepository - NOT SPECIFIED - Antonio Royo Gutiérrez (hantonson-)
// Temporary in-memory repository for pilots (for development / testing)
// Implements DriverRepository interface

import { DriverRepository } from '@dom/driver/driver.repository.interface';
import { Driver } from '@dom/driver/driver.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryDriverRepository implements DriverRepository {
  private readonly storage: Map<string, Driver> = new Map();

  async findByEmail(email: string): Promise<Driver | null> {
    const driver = [...this.storage.values()].find(d => d.email === email);
    return driver || null;
  }

  async save(driver: Driver): Promise<void> {
    this.storage.set(driver.id, driver);
  }
}
