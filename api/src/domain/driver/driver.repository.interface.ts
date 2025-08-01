// PilotRepository interface - NOT SPECIFIED - Antonio Gabarrús Nerin
// Defines output port for interacting with Pilot persistence
// Implementations must persist and retrieve pilots by ID or email

import { Driver } from './driver.entity';

export interface DriverRepository {
  findByEmail(email: string): Promise<Driver | null>;
  save(driver: Driver): Promise<void>;
}
