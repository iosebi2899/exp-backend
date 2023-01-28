import { Injectable } from '@nestjs/common';

@Injectable()
export class GymsService {
    getGyms(): string[] {
        return new Array('matrix','aspria')
    }
}
