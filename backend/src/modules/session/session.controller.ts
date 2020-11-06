import { Body, Controller, HttpCode, Param, Put } from '@nestjs/common';
import { SessionService } from './session.service';

@Controller('sessions')
export class SessionController {
  constructor(private readonly service: SessionService) {}

  @Put(':id')
  @HttpCode(200)
  updateSession(@Param('id') id: number, @Body() body: any) {
    return this.service.updateSession(id, body);
  }
}
