import { Injectable } from "@angular/core";
import { Actions, State, StateContext, Store } from "@ngxs/store";
import { PortalService } from "src/app/core/services/portal.service";

export class ProfileManagementStateModel {
    isLoading: boolean;
}

type LocalStateModel = ProfileManagementState;
type LocalStateContext = StateContext<LocalStateModel>;

@State<ProfileManagementStateModel>({
    name: 'system-management',
    defaults: {
        isLoading: false
    }
})
@Injectable()
export class ProfileManagementState {
    constructor(
      private _portalService: PortalService, 
      private _store: Store,
      private _actions: Actions
    ) { 
    }
}