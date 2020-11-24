import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly service: ScheduleService) {}

  @Get()
  @HttpCode(200)
  getSchedules() {
    return this.service.getSchedules();
  }
  @Put(':id')
  @HttpCode(200)
  updateSchedule(@Param('id') id: number, @Body() body: any) {
    return this.service.updateSchedule(id, body);
  }
  @Delete(':id')
  @HttpCode(204)
  deleteSchedule(@Param('id') id: number) {
    return this.service.deleteSchedule(id);
  }

  @Post()
  @HttpCode(201)
  createSchedule(@Body() body: any) {
    return this.service.createSchedule(body);
  }
}
