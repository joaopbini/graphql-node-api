import { DbConnection } from "./DbConnectionInterface";
import { AuthUser } from "./AuthUserInterface";
import { DataLoaders } from "./DataLoardersInterface";

export interface ResolverContext {

    db?: DbConnection;
    authorization?: string;
    authUser?: AuthUser;
    dataloaders?: DataLoaders;

}