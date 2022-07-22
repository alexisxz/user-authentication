import { Pool } from 'pg';

const connectionString = 'paste the db';

const db = new Pool({ connectionString });

export default db; 