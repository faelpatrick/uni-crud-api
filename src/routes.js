import { Router } from "express";
import CourseControllers from "./controllers/CourseControllers.js";
import SubjectControllers from "./controllers/SubjectControllers.js";
import ProfessorControllers from "./controllers/ProfessorControllers.js";
import StudantControllers from "./controllers/StudantControllers.js";
import UsersController from "./controllers/UserControllers.js";
import SessionsController from "./controllers/SessionControllers.js";
import auth from "./middlewares/auth.js";

const routes = new Router;

routes.post("/session", SessionsController.create);
// routes.use(auth);


routes.get("/users", UsersController.index);
routes.put("/users", UsersController.create);
routes.get("/users/:id", UsersController.read);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.delete);

routes.get('/courses', CourseControllers.index);
routes.put('/courses', CourseControllers.create);
routes.get('/courses/:id', CourseControllers.read);
routes.put('/courses/:id', CourseControllers.update);
routes.delete('/courses/:id', CourseControllers.delete);

routes.get('/subjects', SubjectControllers.index);
routes.put('/subjects', SubjectControllers.create);
routes.get('/subjects/:id', SubjectControllers.read);
routes.put('/subjects/:id', SubjectControllers.update);
routes.delete('/subjects/:id', SubjectControllers.delete);


routes.get('/professors', ProfessorControllers.index);
routes.put('/professors', ProfessorControllers.create);
routes.get('/professors/:id', ProfessorControllers.read);
routes.put('/professors/:id', ProfessorControllers.update);
routes.delete('/professors/:id', ProfessorControllers.delete);


routes.get('/studants', StudantControllers.index);
routes.put('/studants', StudantControllers.create);
routes.get('/studants/:id', StudantControllers.read);
routes.put('/studants/:id', StudantControllers.update);
routes.delete('/studants/:id', StudantControllers.delete);


export default routes;