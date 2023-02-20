import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniqueID } from './uniqueId.entity';
import { PartOfID } from './partOfId.entity';
import { UniqueIDController } from './uniqueId.controller';
import { UniqueIDService } from './uniqueId.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'IncidentManagement',
      entities: [UniqueID, PartOfID],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UniqueID, PartOfID]),
  ],
  controllers: [UniqueIDController],
  providers: [UniqueIDService],
})
export class AppModule {}
