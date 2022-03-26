import { Router } from 'react-typesafe-routes';
import { HomePage, DeletedPage } from './pages';

export const router = Router(route => ({
	home: route('/', {
		component: HomePage,
	}),
	deleted: route('deleted', {
		component: DeletedPage,
	}),
}));
