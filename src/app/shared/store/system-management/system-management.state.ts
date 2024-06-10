import { Injectable } from "@angular/core";
import { Action, Actions, Selector, State, StateContext, Store, ofActionDispatched } from "@ngxs/store";
import { PortalService } from "src/app/core/services/portal.service";
import { GetModules, InitStates } from "./system-management.action";
import { finalize, takeUntil, tap } from "rxjs";
import { IModule } from "src/app/core/models/module";

export class SystemManagementStateModel {
    isLoading: boolean;
    modules: IModule[];
}

type LocalStateModel = SystemManagementStateModel;
type LocalStateContext = StateContext<LocalStateModel>;

@State<SystemManagementStateModel>({
    name: 'systemmanagement',
    defaults: {
        isLoading: false,
        modules: []
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

    @Selector()
    static getModules(state: LocalStateModel): GetModules[] {
      return state.modules;
    }

    @Action(InitStates)
    protected initStates(ctx: LocalStateContext) {
      const actions = [];
      return ctx.dispatch(actions);
    }

    @Action(GetModules)
    protected getModules(ctx: LocalStateContext) {
      ctx.patchState({ isLoading: true });
      return this._portalService.getModules().pipe(
        tap(items => {
          ctx.patchState({ modules: items });
        }),
        finalize(() => ctx.patchState({ isLoading: false })),
        takeUntil(this._actions.pipe(ofActionDispatched(GetModules)))
      );
    }
}