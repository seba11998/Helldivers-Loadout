import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gear } from './gear.entity';
import { Passive } from '../passive/passive.entity';
import { GearService } from './gear.service';
import { GearController } from './gear.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Gear, Passive]), AuthModule],
  providers: [GearService],
  controllers: [GearController],
})
export class GearModule {}
