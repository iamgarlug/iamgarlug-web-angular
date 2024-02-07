import { Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { LinksComponent } from './links/links.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

export const routes: Routes = [
    {path: '', redirectTo: 'suggestions', pathMatch: 'full'},
    // TODO: Create an intro page that suggests usage. e.g. resizing, desktop/tablet/phone, dark/light mode
    // TODO: Create diagram showing CI/CD and web site structure. Use both Azure (CI/CD and API) and AWS (web site and lambda?).
    {path: 'contact-me', component: ContactMeComponent},
    {path: 'documents', component: DocumentsComponent},
    {path: 'links', component: LinksComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'suggestions', component: SuggestionsComponent},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];
