import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';

@Controller('creator')
export class CreatorController {
  constructor(private readonly creatorService: CreatorService) {}

  @Post('/create')
  create(@Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorService.create(createCreatorDto);
  }

  @Post('/publish')
  publish(@Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorService.publish(createCreatorDto);
  }

  @Post('/build')
  build(@Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorService.build(createCreatorDto);
  }

  @Post('/first-build')
  firstBuild(@Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorService.firstBuild(createCreatorDto);
  }

  @Post('/upload')
  upload(@Body() createCreatorDto: CreateCreatorDto) {
    return this.creatorService.upload(createCreatorDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreatorDto: UpdateCreatorDto) {
    return this.creatorService.update(+id, updateCreatorDto);
  }


  @Post('health')
  health() {
    return "healthy"
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorService.remove(+id);
  }
}
