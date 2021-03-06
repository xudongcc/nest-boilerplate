import { env } from '../modules/common/utils/env';

import { AccessToken } from '../modules/auth';
import { Role, Permission, User } from '../modules/user';

export default {
  type: env('DB_TYPE', 'mysql'),
  host: env('DB_HOST', '127.0.0.1'),
  port: Number(env('DB_PROT', 3306)),
  username: env('DB_USERNAME', 'root'),
  password: env('DB_PASSWORD', 'root'),
  database: env('DB_DATABASE', 'default'),
  timezone: 'Z',
  entities: [
    AccessToken,
    Permission,
    Role,
    User,
    'src/app/**/**.entity{.ts,.js}',
  ],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: env('DB_SYNC', 'true') === 'true',
};
