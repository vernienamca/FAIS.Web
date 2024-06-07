import { Injectable } from "@angular/core";
import { Actions, State, StateContext, Store } from "@ngxs/store";
import { PortalService } from "src/app/core/services/portal.service";

export class SystemManagementStateModel {
    isLoading: boolean;
}

type LocalStateModel = SystemManagementState;
type LocalStateContext = StateContext<LocalStateModel>;

@State<SystemManagementStateModel>({
    name: 'system-management',
    defaults: {
        isLoading: false
    }
})
@Injectable()
export class SystemManagementState {
    constructor(
      private _portalService: PortalService, 
      private _store: Store,
      private _actions: Actions
    ) { 
    }
}