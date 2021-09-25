import { twoslasheTypes } from './jobs/twoslash-types';
import { sys } from './sys';

async function pipeline() {
  await sys.pipeline({ twoslasheTypes });
}

pipeline();
