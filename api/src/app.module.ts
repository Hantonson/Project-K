import { Module } from '@nestjs/common';
import { DriverController } from '@ada/rest/driver.controller';
import { DriverModule } from '@app/driver/driver.module';

@Module({
  imports: [DriverModule],
  controllers: [DriverController],
  providers: [],
})
export class AppModule {}
