import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
	courses$: Observable<Course[]>;
	displayedColumns = ['name', 'category', 'add', 'remove'];

	constructor(
		private coursesService: CoursesService,
		public dialog: MatDialog,
		private router: Router
	) {
		this.courses$ = this.coursesService.list().pipe(
			catchError((error) => {
				this.onError('Erro ao carregar lista de cursos!');
				return of([]);
			})
		);
	}

	onError(errorMsg: string) {
		this.dialog.open(ErrorDialogComponent, {
			data: errorMsg,
		});
	}

	onAdd() {
		return this.router.navigate(['/new']);
	}

	onRemove() {
		alert('Remover curso');
	}
	ngOnInit(): void {}
}
