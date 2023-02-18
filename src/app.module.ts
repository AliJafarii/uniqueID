import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyCollection } from './unicode.entity';
import { MyController } from './Unicode.controller';
import { MyService } from './Unicode.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27018,
      database: 'IM',
      entities: [MyCollection],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([MyCollection]),
  ],
  controllers: [MyController],
  providers: [MyService],
})
export class AppModule {}
