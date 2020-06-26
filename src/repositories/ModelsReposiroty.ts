import { Repository } from 'typeorm';

import Model from '../models/Model';

// interface xx {
//   prop: type;
// }

class ModelRepository extends Repository<Model> {}

export default ModelRepository;
