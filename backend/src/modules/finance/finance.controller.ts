import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FinanceService } from './finance.service';

@Controller('finances')
export class FinanceController {
  constructor(private readonly service: FinanceService) {}

  @Get()
  @HttpCode(200)
  getFinances(@Query() { page, perPage, search }) {
    return this.service.getFinances({ page, perPage, search });
  }
  @Put(':id')
  @HttpCode(200)
  updateFinance(@Param('id') id: number, @Body() body: any) {
    return this.service.updateFinance(id, body);
  }
  @Put(':id/paid')
  @HttpCode(200)
  updateFinancePaid(@Param('id') id: number, @Body() body: any) {
    return this.service.updateFinancePaid(id, body);
  }

  @Post()
  @HttpCode(201)
  createFinance(@Body() body: any) {
    return this.service.createFinance(body);
  }
}
