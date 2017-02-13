import * as angular from "angular"
import * as ngRoute from "angular-route"
import ListController from "./listCake"
import CakeController from "./singleCake"
import AddCakeController from "./addCake"
import starRating from "./components/rating"
import requestCakes from "./services/requestCakes"
import routes from "./routes"

angular
    .module("cakeApp", ["ngRoute"]) 
		.controller("ListController", ListController)
		.controller("CakeController", CakeController)
		.controller("AddCakeController", AddCakeController)
		.component('starRating', starRating)
		.factory("requestCakes", ["$http", requestCakes])
		.config(function($routeProvider, $locationProvider) {
			routes.forEach(route => $routeProvider.when(route.url, route.props))

			$locationProvider.html5Mode(true);
		})
