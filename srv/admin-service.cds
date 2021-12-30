using {customexpressendpoints.db as db} from '../db/db';

service AdminService @(path : '/Admin') {
    entity Users as projection on db.Users;
}
