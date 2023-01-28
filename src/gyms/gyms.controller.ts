import { Controller, Get } from '@nestjs/common';
import { GymsService } from './gyms.service';

@Controller('gyms')
export class GymsController {
    constructor(private readonly GymsService: GymsService) {}

    @Get('get-all')
    getGyms(): string[]{
        return this.GymsService.getGyms();
    }
}
