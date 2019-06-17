"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "SneakerController.index");
Route.get("/sneakers", "SneakerController.index");
Route.get("/sneakers/create", "SneakerController.create");
Route.post("/sneakers/", "SneakerController.store");
Route.get("/sneakers/:id", "SneakerController.show");
Route.get("/sneakers/:id/edit", "SneakerController.edit");
Route.put("/sneakers/:id", "SneakerController.update");
Route.delete("/sneakers/:id", "SneakerController.destroy");
