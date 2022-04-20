import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:5001/remoteEntry.js',
                exposedModule: './moduleappone',

                // For Routing
                displayName: 'Ng1',
                routePath: 'approuteng1',
                ngModuleName: 'PageoneModule'
            },
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:5003/remoteEntry.js',
                exposedModule: './web-components',

                // For Routing
                displayName: 'React',
                routePath: 'mfer',
                ngModuleName: 'WrapperModule'
            }
        ] as Microfrontend[]);
    }
}
