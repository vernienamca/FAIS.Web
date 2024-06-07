import { Injectable } from "@angular/core";
import { Action, Actions, Selector, State, StateContext, Store } from "@ngxs/store";
import { PortalService } from "src/app/core/services/portal.service";
import { GetFieldDictionaries, InitStates } from "./depreciation.action";
import { finalize, tap } from "rxjs";
import { IFieldDictionary } from "src/app/core/models/field-dictionary";

export class DepreciationStateModel {
    isLoading: boolean;
    dictionaries: IFieldDictionary[];
}

type LocalStateModel = DepreciationStateModel;
type LocalStateContext = StateContext<LocalStateModel>;

@State<DepreciationStateModel>({
    name: 'depreciation',
    defaults: {
        isLoading: false,
        dictionaries: []
    }
})
@Injectable()
export class DepreciationState {
    constructor(
      private _portalService: PortalService, 
      private _store: Store,
      private _actions: Actions
    ) { 
    }

    @Selector()
    static getFieldDictionaries(state: LocalStateModel): GetFieldDictionaries[] {
      return state.dictionaries;
    }

    @Action(InitStates)
    protected initStates(ctx: LocalStateContext) {
      const actions = [
        new GetFieldDictionaries(),
      ]
      return ctx.dispatch(actions);
    }

    @Action(GetFieldDictionaries)
    protected getFieldDictionaries(ctx: LocalStateContext) {
      const state = ctx.getState();
      ctx.patchState({ isLoading: true });
      return this._portalService.getFieldDictionaries().pipe(
        tap(items => {
            ctx.patchState({ dictionaries: items });
        }),
        finalize(() => ctx.patchState({ isLoading: false }))
      );
    }
}