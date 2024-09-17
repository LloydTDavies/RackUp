import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { FirebaseService } from '@rack-up/firebase';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DASHBOARD_CONFIG } from '@rack-up/dashboard-config';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: FirebaseService,
      useClass: FirebaseService,
    },
    {
      provide: DASHBOARD_CONFIG,
      useValue: {
        mode: 'User',
      }
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideFirebaseApp(() =>
      initializeApp(new FirebaseService().firebaseConfig)
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), provideAnimationsAsync(),
  ],
};
