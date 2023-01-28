import { Injectable } from '@nestjs/common';

@Injectable()
export class GymsService {
    getGyms(): string[] {
        return ['aspria','matrix']
    }
}
