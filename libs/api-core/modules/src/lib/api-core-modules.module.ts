import { Module } from '@nestjs/common';

// these two imports create an error in webstorm
// root dir is the culprit, only nest libs have the root dir in the lib config
import { sharedLibFunction } from '@ts-error-repo/api-core/lib';
import { IAmShared } from '@ts-error-repo/shared-types';

const test: IAmShared = 'test';
console.log(test);

sharedLibFunction();

@Module({
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModulesModule {}
