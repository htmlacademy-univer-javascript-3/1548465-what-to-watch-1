import { User } from '../../../types/user/user';
import { State } from '../../../types/state.type';
import { AuthorizationStatus } from '../../../types/authorization/authorization-status.enum';
import { Namespace } from '../../../constants/routes';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[Namespace.User].authorizationStatus;
export const getUser = (state: State): User | null => state[Namespace.User].user;
