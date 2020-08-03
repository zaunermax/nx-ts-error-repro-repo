// this import does NOT error in webstorm
// the lib tsconfig does not have the root dir property
import { IAmShared } from '@ts-error-repo/shared-types';

const test: IAmShared = 'test';
console.log(test);

export const sharedLibFunction = () => {
  // i do nothing...
};
