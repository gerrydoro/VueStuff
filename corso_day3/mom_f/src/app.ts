import axios, { AxiosResponse } from "axios"

//#region Models

export interface Material {
    PatternDescription: string | null;
    MaterialGroup: string;
    DefaultLUoM: string;
    AgingTimeMinutes: number | null;
    IsNTM: boolean;
    IsFG: boolean;
    FilterLenght: number | null;
    MinimumBatchSize: number;
    Totalshelflife: number | null;
    MaximumBatchSize: number;
    UsageMode: number;
    ShelfLifeWhenOpened: number | null;
    MaterialId: string;
    TrackandTraceIdentifier: string | null;
    FilterCircumference: number | null;
    MaterialDescription: string;
    IsFGTracked: boolean;
    BaseUoMDecimalPlaces: number;
    GramsperPack: number | null;
    GramsperCase: number | null;
    MinimumStockQuantity: number;
    PatternNumber: string | null;
    MaximumStockQuantity: number;
    DefaultBatchSize: number;
    DefaultLUoMDecimalPlaces: number;
    BaseUom: string | null;
    PlantCode: string | null;
    IsTOB: boolean;
    AlternativeUoMsList: any[] | null;
    IsFoil: boolean;
    MaterialType: string | null;
    IsCFT: boolean;
    BatchManagementIndicator: string | null;
    PalletType: string | null;
    IsBatchManaged: boolean;
    DeliveryMode: number;
    IsFilter: boolean;
}

export interface PalletType {
    PalletTypeId: number;
    PalletTypeName: string;
}

export interface WorkOrder {
    RepackingMode: any;
    IsSapUpdateDisabled: boolean;
    PossibleSecondaryUnitsForMaterialId: any;
    CanPrintShippingCaseLabel: boolean;
    FinishDateTime: number;
    IsSAPPostingEnabled: boolean;
    ParentProcessCellCode: string | null;
    WorkCenter: string;
    ConfirmedQuantityInLUoM: number;
    LinkedWorkOrder: any;
    StartDateTime: number;
    IsPurging: boolean;
    IsFixedFilterWorkOrder: boolean;
    IsManuallyCreated: boolean;
    GoodMCCounter: any;
    WorkCenterNominalSpeed: string;
    Status: number;
    OutputLUoM: string;
    WorkOrderNumber: string;
    WorkCenterEquipmentId: number;
    ProductionTotalInLUoM: number;
    IsFilterRepackingOrder: boolean;
    DefaultNumberOfMCPerPallet: number;
    ScheduledStartDateTime: number;
    IsCrossProduction: boolean;
    PreviousQuantity: any;
    NotificationIdForSAPOrderQuantityUpdate: any;
    ProductionDoneInLUoM: number;
    OutputMaterial: Material;
    CanDisableSAPPosting: boolean;
    PlantCode: string;
    WorkOrderPartsList: any;
    OverridenByMOMUser: boolean;
    ScheduledFinishDateTime: number;
    ParentWorkOrderNumber: string | null;
    Warnings: any[];
    BatchNumber: string;
    PalletType: PalletType;
}

export interface Location {
    StorageLocationGroupDescription: string | null;
    LocationId: number;
    Description: string;
    StorageLocationGroup: string | null;
    LocationCode: string;
    Signature: string;
}

export interface WCOrderItem {
    FeederConnectionStatus: number;
    BOMLevel: string;
    QuantityOnTheWayBeforeSDA: number;
    QuantityUsed: number;
    MaterialForNextWO: Material;
    IsCFTSourceConnecting: boolean;
    ShowMaterialPreparedButton: boolean;
    Material: Material;
    MaterialTimeShift: number;
    CFTSource: number;
    WorkOrderChangeStatus: number;
    IsBrandChange: boolean;
    CFTActionsDisabled: boolean;
    ShowMaterialUnloadButton: boolean;
    MaterialAtWcId: number;
    QuantityExpectedTotal: number;
    BatchNumber: string | null;
    Location: Location | null;
    QuantityOnTheWHForNextWO: number | null;
    QuantityAtWorkCenter: number;
    BatchQuantityInWHPresence: boolean;
    QuantityOnTheWH: number;
    ShowMaterialRejectButton: boolean;
    PalletReplacement: number;
    QuantityOnTheWayAfterSDA: number;
    ShowMaterialNothingToReturnButton: boolean;
    MaterialShiftLevel: number;
    ConsumptionRatioLUoMPerSecond: number;
}

export interface WorkCenterLocationGroup {
    IsBondedWarehouse: boolean;
    CanAcceptUnrestrictedStockOnly: boolean;
    EquipmentId: number;
    StorageZoneSignature: string;
    EquipmentCode: string;
    MinutesOfProductionDemandsToReplenish: number;
    IsTerminal: boolean;
    IsFGPalletBlocked: boolean;
    IsInternalTruck: boolean;
    MinutesOfProductionForecastToConsiderForBrandConnectedSmallIssue: number;
    IsRackBuffer: boolean;
    LoadingIndex: number;
    WasteLocationType: number;
    ParentId: number | null;
    IsCommissioningArea: boolean;
    Parent: any;
    IsStatisticalStockCountEnabled: boolean;
    IsRamp: boolean;
    StagingAreaType: number;
    LoadingIndexDirection: boolean;
    IsRegularStockCountEnabled: boolean;
    IsSDA: boolean;
    IsFreezingArea: boolean;
    Status: number;
    IsSmallBin: boolean;
    IsCentralWrapper: boolean;
    IsFGReworkArea: boolean;
    IsQuarantine: boolean;
    Description: string;
    PlantCode: string;
    IsSAndM: boolean;
    IsChamber: boolean;
    MaxConcurrentForkliftsCount: number;
    IsKitchen: boolean;
    Children: any;
    DisplayTypeName: string | null;
    HighRackColumnLoadingAscending: boolean;
    Areas: any;
    IsCommonMaterial: boolean;
    IsFilterBuffer: boolean;
    IsHighRack: boolean;
    IsFGCommissioningArea: boolean;
    IsReturnArea: boolean;
    IsGateway: boolean;
    CanBeUsedForProduction: boolean;
    IsClimatizationArea: boolean;
    IsBasketPreparationArea: boolean;
}

export interface Machine {
    IsPurgingOnPauseAllowed: boolean;
    HasPrintManagement: boolean;
    SecondaryUnitId: number;
    CanManageNextWO: boolean;
    HasFGManagement: boolean;
    NTMEmptyPalletReturnMode: number;
    CurrentOrderHeader: WorkOrder;
    RunningWorkOrder: any;
    IsEndOfLine: boolean;
    DelayBetweenFGPalletReadyInSeconds: number;
    NextOrderHeader: WorkOrder;
    UnlockCFTDelivery: boolean;
    HasEmptyPalletManagement: boolean;
    WCReturnAllMaterialsAfterOnGoingOrderRequested: boolean;
    WCOrderItems: WCOrderItem[];
    EndOfLineWorkOrderStatuses: any;
    ThereIsACFTMaterialMismatch: boolean;
    WorkCenterLocationGroup: WorkCenterLocationGroup;
    HasFGEmptyPalletManagement: boolean;
    FGEmptyPalletAutomaticRequestEnabled: boolean;
    HasWasteManagement: boolean;
    HasSDAManagement: boolean;
    FGManagementInAlarm: boolean;
}

//#endregion


//#region Functions

export default async function GetWorkCenterStatus(secondaryUnitIds: number[]): Promise<Machine[]> {
    let result = <Machine[]>[]
    let loading = true
    let params = {
        "secondaryUnitIds": secondaryUnitIds
    }

    axios.post("http://10.10.55.140/Secondary/GetWorkcenterStatus", params)
        .then((response) => {
            console.log("GetWorkcenterStatus response: ", response);
            result = response.data
        })
        .catch((error) => {
            console.log("GetWorkcenterStatus exception: ", error);
        })
        .finally(() => {
            console.log("Pinton è bello")
            loading = false
        })

    return result
}

//#endregion



