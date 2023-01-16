import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async delete(cpf: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        cpf,
      },
    });

    if (!userExists) {
      throw new Error('User does not exists!');
    }

    return await this.prisma.user.delete({
      where: {
        cpf,
      },
    });
  }
}
