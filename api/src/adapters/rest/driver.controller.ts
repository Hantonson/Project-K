// PilotController - NOT SPECIFIED - Antonio Gabarrús Nerin
// Handles HTTP requests related to pilot registration
// Injects use case and calls it on POST /pilot

import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDriverUseCase } from '@app/driver/register-driver.use-case';
import { InMemoryDriverRepository } from '@infra/persistence/driver.repository.memory';

@Controller('driver')
export class DriverController {

  constructor(private readonly registerDriverUseCase: RegisterDriverUseCase) {}

  @Post()
  async register(@Body() body: { name: string; email: string }) {
    await this.registerDriverUseCase.execute(body.name, body.email);
    return { status: 'ok' };
  }
}
