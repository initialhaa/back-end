import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { plainToClass, plainToInstance } from 'class-transformer'
import { cobaDto } from 'src/dto/coba.dto'
import { CobaService } from 'src/service/coba.service'
// import { AgamaService } from 'src/services/agama.service'
// import { ApiBearerAuth } from '../common/decorators/ApiBearerAuth'
// import { PrismaService } from '../services/prisma.service'

@ApiTags('Master')
@Controller('/api')
export class CobaController {
  constructor(private readonly appService: CobaService) {}

//   @ApiBearerAuth()
  @Get('coba')
  async getagama() {
    const coba = await this.appService.getagama()
    return plainToClass(cobaDto, coba)
  }
}
