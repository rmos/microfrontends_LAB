import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                //remoteEntry: 'http://localhost:5001/remoteEntry.js',
                remoteEntry: 'http://xlab-mfe-ng1.s3-website-us-east-1.amazonaws.com/remoteEntry.js',
                exposedModule: './moduleappone',

                // For Routing
                displayName: 'Ng1',
                routePath: 'approuteng1',
                ngModuleName: 'PageoneModule'
            },
            {
                // For Loading
                type: 'module',
                //remoteEntry: 'http://localhost:5002/remoteEntry.js',
                remoteEntry: 'http://xlab-mfe-ng2.s3-website-us-east-1.amazonaws.com/remoteEntry.js',
                exposedModule: './moduleapptwo',

                // For Routing
                displayName: 'Ng2',
                routePath: 'approuteng2',
                ngModuleName: 'MfeModule'
            }
        ] as Microfrontend[]);
    }
}
