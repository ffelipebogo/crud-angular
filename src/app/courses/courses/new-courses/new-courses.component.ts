import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-new-courses',
	templateUrl: './new-courses.component.html',
	styleUrls: ['./new-courses.component.scss'],
})
export class NewCoursesComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	save() {
		alert('Salvar novo curso');
	}
}
