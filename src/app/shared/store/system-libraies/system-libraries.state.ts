import { Injectable } from "@angular/core";
import { Actions, State, StateContext, Store } from "@ngxs/store";
import { PortalService } from "src/app/core/services/portal.service";

export class SystemLibrariesStateModel {
    isLoading: boolean;
}

type LocalStateModel = SystemLibrariesState;
type LocalStateContext = StateContext<LocalStateModel>;

@State<SystemLibrariesStateModel>({
    name: 'system-libraries',
    defaults: {
        isLoading: false
    }
})
@Injectable()
export class SystemLibrariesState {
    constructor(
      private _portalService: PortalService, 
      private _store: Store,
      private _actions: Actions
    ) { 
    }
}