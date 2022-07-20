import { Pool } from 'pg';

const connectionString = 'postgres://tvlwmckb:YoNVcJvO_XdiueH6F9-8MPYIvVEERUVQ@motty.db.elephantsql.com/tvlwmckb';

const db = new Pool({ connectionString });

export default db; 