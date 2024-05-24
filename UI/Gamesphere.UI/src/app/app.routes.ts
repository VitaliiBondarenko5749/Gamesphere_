import { Routes } from '@angular/router';

// Components
import { AboutUsComponent } from './components/content/about-us.component';
import { SignUpComponent } from './components/registration/sign-up.component';
import { ConfirmEmailComponent } from './components/registration/confirm-email.component';
import { ErrorComponent } from './components/error/error.component';
import { SignInComponent } from './components/login/sign-in.component';
import { ResetPasswordComponent } from './components/login/reset-password.component';
import { UserInfoComponent } from './components/content/user-info.component';
import { ChangeEmailComponent } from './components/content/change-email.component';
import { ManageUsersComponent } from './components/content/manage-users.component';
import { CategoriesComponent } from './components/games/categories.component';
import { EditGameDataComponent } from './components/games/editGameData/edit-game-data.component';
import { GamesComponent } from './components/games/games.component';
import { GameInfoComponent } from './components/games/game-info.component';

export const routes: Routes = [
    { path: "", component: AboutUsComponent },
    { path: "sign-up", component: SignUpComponent },
    { path: "confirm-email", component: ConfirmEmailComponent },
    { path: "error", component: ErrorComponent },
    { path: "sign-in", component: SignInComponent },
    { path: "reset-password", component: ResetPasswordComponent },
    { path: "user-info/:id", component: UserInfoComponent },
    { path: "change-email", component: ChangeEmailComponent },
    { path: "manage-users", component: ManageUsersComponent },
    { path: "categories", component: CategoriesComponent },
    { path: "edit-game", component: EditGameDataComponent },
    { path: "categories/:category", component: GamesComponent },
    { path: "categories/:category/:gameId", component: GameInfoComponent }
];