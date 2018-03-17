import { Validator } from './../providers/auth/validate';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { environment } from '../env/environment';
import { CheckLoginStatus } from '../providers/auth/check_login_status';

import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import {Shake } from '@ionic-native/shake';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { LoadingProvider } from '../providers/loading/loading';
import { UsersSenderProvider } from '../providers/users-sender/users-sender';
import { StorageProvider } from '../providers/storage/storage';

import { IonicStorageModule } from '@ionic/storage';
import { SongProvider } from '../providers/song/song';
import { FavoriteProvider } from '../providers/favorite/favorite';


@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    Shake,
    AuthProvider,
    CheckLoginStatus,
    Validator,
    AngularFireDatabase,
    Facebook,
    LoadingProvider,
    UsersSenderProvider,
    StorageProvider,
    SongProvider,
    FavoriteProvider,
  ]
})
export class AppModule {}
