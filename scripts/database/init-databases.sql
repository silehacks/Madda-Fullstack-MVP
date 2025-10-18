-- This script is intentionally left blank.
-- The `POSTGRES_MULTIPLE_DATABASES` environment variable in docker-compose.yml
-- is handled by the `docker-entrypoint.sh` script in the official postgres image,
-- which will create the specified databases.
-- This file is required to be present in the `docker-entrypoint-initdb.d` directory
-- for the entrypoint script to run.
SELECT 'Databases madda_user_db, madda_sourcing_db, madda_subscription_db will be created by the entrypoint script.';