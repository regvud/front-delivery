export const baseURL = 'http://localhost:8080/api';

const deliveries = '/deliveries';
const auth = '/auth';
const profile = '/profile';
const users = '/users';
const create = '/create';

export const urls = {
  deliveries: {
    base: deliveries,
    byID: (id: number) => `${deliveries}/${id}`,
    create: `${deliveries}${create}`,
    user: `${users}${deliveries}`,
  },
  auth: {
    login: auth,
    profile: `${users}${profile}`,
  },
};
