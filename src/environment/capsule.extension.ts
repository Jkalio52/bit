import { Extension } from '../harmony';
import capsuleProvider from './capsule.provider';

export default Extension.instantiate({
  name: 'Capsule',
  dependencies: [],
  config: {},
  provider: capsuleProvider
});
