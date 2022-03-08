import { delay, first, tap } from 'rxjs';
import { Course } from './../model/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class CoursesService {
	private readonly API = 'assets/courses.json';
	//private readonly API = 'api/courses';

	constructor(private httpClient: HttpClient) {}

	list() {
		return this.httpClient.get<Course[]>(this.API).pipe(
			// termina a conexão quando o servidor retorna a primeira resposta
			//(no caso a lista de cursos)
			first(),
			delay(1000),
			//posso manipular os dados antes de retornar
			tap((courses) => console.log(courses))
		);
	}
}
