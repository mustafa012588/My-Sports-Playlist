import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowseMatchesComponent } from './pages/browse-matches/browse-matches.component';
import { MyPlaylistComponent } from './pages/my-playlist/my-playlist.component';
import { WatchComponent } from './pages/watch/watch.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'matches', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'matches', component: BrowseMatchesComponent },
  { path: 'playlist', component: MyPlaylistComponent, canActivate: [AuthGuard] },
  { path: 'watch/:id', component: WatchComponent, canActivate: [AuthGuard] }
];
