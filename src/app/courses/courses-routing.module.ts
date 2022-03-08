import { NewCoursesComponent } from './courses/new-courses/new-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: CoursesComponent,
	},
	{
		path: 'new',
		component: NewCoursesComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CoursesRoutingModule {}
