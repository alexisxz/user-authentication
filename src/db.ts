import { Pool } from 'pg';

const connectionString = 'elephantsql.com/colocarseudb';

const db = new Pool({ connectionString });

export default db; 