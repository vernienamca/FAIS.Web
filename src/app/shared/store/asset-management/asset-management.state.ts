import { Injectable } from "@angular/core";
import { Actions, State, StateContext, Store } from "@ngxs/store";
import { PortalService } from "src/app/core/services/portal.service";

export class AssetManagementStateModel {
    isLoading: boolean;
}

type LocalStateModel = AssetManagementState;
type LocalStateContext = StateContext<LocalStateModel>;

@State<AssetManagementStateModel>({
    name: 'asset-management',
    defaults: {
        isLoading: false
    }
})
@Injectable()
export class AssetManagementState {
    constructor(
      private _portalService: PortalService, 
      private _store: Store,
      private _actions: Actions
    ) { 
    }
}