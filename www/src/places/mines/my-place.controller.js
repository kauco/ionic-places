"use strict";

angular.module('places')
	.controller('MyPlaceCtrl', function($rootScope,$scope,$state) {
		
		//properties
		$scope.list = [
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/2'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			},
			{
				name:'geneva',
				description:'Cool place to see with great robots inside',
				image:'http://lorempicsum.com/futurama/100/100/1'
			}
		];


	});