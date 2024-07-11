import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { plainToInstance } from 'class-transformer'
import { CobaService } from 'src/service/coba.service'
// import { AgamaService } from 'src/services/agama.service'
// import { ApiBearerAuth } from '../common/decorators/ApiBearerAuth'
// import { PrismaService } from '../services/prisma.service'

@ApiTags('Master')
@Controller('/api/agama')
export class CobaController {
  constructor(private readonly appService: CobaService) {}

//   @ApiBearerAuth()
  @Get('/')
  async getagama() {
    const agama = await this.appService.getagama()
    return agama
  }
}
