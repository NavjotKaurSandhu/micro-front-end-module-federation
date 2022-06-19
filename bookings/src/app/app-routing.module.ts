import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import * as React from 'react';

// const TrainModule = React.lazy(() => import('trainsApp/TrainModule'));

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'flightsApp',
        exposedModule: './FlightModule',
      }).then((m) => {
        return m.FlightModule;
      }),
  },
  {
    path: 'movies',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js',
        remoteName: 'moviesApp',
        exposedModule: './MovieModule',
      }).then((m) => {
        return m.MovieModule;
      }),
  },
  {
    path: 'tains',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:3002/remoteEntry.js',
        remoteName: 'trainssApp',
        exposedModule: './TrainModule',
      }).then((m) => {
        return m.TrainModule;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
