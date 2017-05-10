import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

	lastId: number = 0;

	todos: Todo[] = [];

  	constructor() { }


}
