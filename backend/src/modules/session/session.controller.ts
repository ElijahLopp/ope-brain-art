import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../../helpers/file-upload.utils';
import { AttachmentService } from '../attachment/attachment.service';
import { SessionService } from './session.service';

@Controller('sessions')
export class SessionController {
  constructor(
    private readonly service: SessionService,
    private readonly serviceAttachment: AttachmentService,
  ) {}

  @Put(':id')
  @HttpCode(200)
  updateSession(@Param('id') id: number, @Body() body: any) {
    return this.service.updateSession(id, body);
  }
  @Delete(':id')
  @HttpCode(204)
  deleteSession(@Param('id') id: number) {
    return this.service.deleteSession(id);
  }

  @Post(':id/attachments')
  @HttpCode(201)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './attachments',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  addAttachment(
    @Param('id') sessionId: number,
    @Body() body: any,
    @UploadedFile() file: any,
  ) {
    return this.serviceAttachment.addAttachment(sessionId, body, file);
  }
}
