import { Body, Controller, HttpCode, Param, Put } from '@nestjs/common';
import { AttachmentService } from './attachment.service';

@Controller('attachments')
export class AttachmentController {
  constructor(private readonly service: AttachmentService) {}

  @Put(':id')
  @HttpCode(200)
  updateAttachment(@Param('id') id: number, @Body() body: any) {
    // return this.service.updateAttachment(id, body);
  }
}
