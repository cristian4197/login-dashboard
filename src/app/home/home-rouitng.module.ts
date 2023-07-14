import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { SeriesComponent } from "./components/series/series.component";
import { AnimesComponent } from "./components/animes/animes.component";
import { InfoHomeComponent } from "./components/info-home/info-home.component";
const routes:Routes = [
    {
        path: '', component:HomeComponent,
        children: [
            {
                path:'info-home',
                component:InfoHomeComponent
            },
            {
                path:'movies',
                component:MoviesComponent
            },
            {
                path:'series',
                component:SeriesComponent
            },
            {
                path:'animes',
                component:AnimesComponent
            },
            {
                path:'**',
                redirectTo:'info-home'
            }
        ]
        
        
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutinModule { }