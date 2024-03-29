import { HeaderComponent } from './appComponents/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { PageNotFoundComponent } from './appComponents/page-not-found/page-not-found.component';
import { LoginComponent } from './appComponents/login/login.component';
import { MainComponent } from './appComponents/main/main.component';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';
import { PostComponent } from './featureComponents/post/post.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { registerLocaleData } from '@angular/common';
import localeDanish from '@angular/common/locales/da';
import { LimitPipe } from './pipes/Limit.pipe';
import { FooterComponent } from './appComponents/footer/footer.component';

registerLocaleData(localeDanish);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    MainComponent,
    MdToHtmlPipe,
    PostComponent,
    TruncatePipe,
    LimitPipe,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
