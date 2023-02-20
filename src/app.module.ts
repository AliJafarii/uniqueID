import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniqueID } from './uniqueId.entity';
import { UniqueIDCollection } from './uniqueIdCollection.entity';
import { UniqueIDController } from './uniqueId.controller';
import { UniqueIDService } from './uniqueId.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27018,
      database: 'IM',
      entities: [UniqueID, UniqueIDCollection],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UniqueID, UniqueIDCollection]),
  ],
  controllers: [UniqueIDController],
  providers: [UniqueIDService],
})
export class AppModule {}
