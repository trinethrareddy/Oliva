import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactusComponent },
    { path: 'registration', component: RegistrationComponent },
    // {
    //     path: 'app', component: HomeComponent,
    //     children: [
    //         { path: 'oemusers', loadChildren: './oemuser/oemuser.module#OEMUserModule' },
    //         { path: 'oemCustomers', loadChildren: './oemcustomers/oemcustomers.module#OemcustomersModule' },
    //         { path: 'normalUser', loadChildren: './normaluser/normaluser.module#NormaluserModule' },
    //         { path: 'license', loadChildren: './license/license.module#LicenseModule' },
    //         { path: 'dashboards', component: DashboardsComponent },
    //         { path: 'releaseVersions', component: ReleaseVersionsComponent },
    //     ]
    // },

    // { path: 'setpassword', component: ResetpasswordComponent },
    // { path: 'notFound', component: NotfoundComponent },
    // { path: 'notAuthorized', component: NotAuthorizedComponent },

    // { path: '**', redirectTo: '/notFound' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
