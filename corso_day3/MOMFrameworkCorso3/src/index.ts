import axios from "axios";

// #region Models
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

export interface GetWorkCenterStatusResult {
  GetWorkCenterStatusResult: Machine[];
}

export interface Profile {
  id: number;
  username: string;
  machines: string[];
}

/**
 * @deprecated The method should not be used
 */
export interface dep {

}

export interface ApiResponse<T> {
  status: number,
  statusText: string,
  isSuccess: boolean,
  data: T// | null
}
//#endregion

//#region Locations Classes

interface Pallet {
  ConsumptionStorageUnit: StorageUnit | null;
  ExpirationDateUI: number;
  MaterialId: string;
  QuantityBUoM: number;
  WO: string;
  DeliveryId: number;
  ProductionDateTimeUI: number;
  SublotAtEOLUIStatus: number;
  IsPostToSAPEnabled: boolean;
  CorporateRepositoryRequestStatus: number;
  QuantityLUoM: number;
  PalletGroupId: number;
  LUoMDecimalPlaces: number;
  HeightId: number;
  LastKnownStorageUnit: any;
  IsFGTracked: boolean;
  SublotId: number;
  OutboundSAPDocumentItem: number;
  StockType: number;
  Status: number;
  CreatedAtWorkCenter: any;
  Counter: number;
  CreationStorageUnit: StorageUnit | null;
  ParentSublotId: any;
  SublotAtReworkAreaUIStatus: number;
  ConsumptionStorageUnitId: any;
  StorageUnitId: number;
  BatchStatus: number;
  ShelfLifeWhenOpened: any;
  PalletTypeId: number;
  BUoM: string;
  IsHeavy: boolean;
  SSCC: string;
  Remarks: any;
  RefPalletType: any;
  Type: number;
  IsRejectedByCentralWrapper: boolean;
  RequestStatus: number;
  ContainedMasterCases: any;
  OutboundSAPDocumentYD: string;
  RefHeight: any;
  MarkedAsDeletable: boolean;
  CreatedBy: any;
  RefCarrier: any;
  CreationDateTimeUI: number;
  RemarksUI: any;
  LUoM: string;
  CreationStorageUnitId: any;
  PendingSplitAndMergeInstruction: boolean;
  MovementPhase: number;
  OutboundSAPDocumentNumber: any;
  EndOfAgingDateTimeUI: any;
  ConsumptionDateTimeUI: any;
  BatchNumber: any;
  LastActingPerson: any;
  Material: Material;
  ParentStorageUnit: StorageUnit | null;
  PlantCode: string;
  IsAggregationCompleted: boolean;
  LastModifiedDateTimeUI: number;
  LastKnownStorageUnitId: number;
  DefectedMasterCases: any;
  ReworkActionNeeded: number;
  EndOfLineActionNeeded: number;
  IsRestricted: boolean;
  BUoMDecimalPlaces: number;
}


interface StorageUnit {
  MaxPalletCount: number;
  IsAutomaticReorderOn: boolean;
  IsFull: boolean;
  EquipmentCode: string;
  EquipmentId: number;
  RackLevelNumber: number;
  MaxSublotCount: number;
  IsHomogeneous: boolean;
  StorageZoneId: number;
  PrinterId: number;
  IsReservedByMaterial: boolean;
  StartProcessing: any;
  AllowedRestrictionCodes: any;
  StorageUnitSignature: string;
  IsUnderStockCount: boolean;
  RackColumnNumber: number;
  IsSmallBinFull: boolean;
  AllowedMaterialIds: any[];
  StorageLocationGroupDescription: any;
  IsUnloading: boolean;
  SmallBinPositionInPallet: number;
  IsReservedByBatch: boolean;
  ParentStorageZone: any;
  RackNumber: number;
  RampNumber: number;
  Status: number;
  AllowedSublotStatuses: number[];
  StorageBayId: number;
  AllowedPalletTypeIds: any[];
  IsStorageUnitSizeExtendable: boolean;
  SAPLocation: string;
  ParentStorageZoneCode: any;
  Description: string;
  DefaultReorderQuantityInLUoM: number;
  StorageLocationGroup: any;
  LocationCode: string;
  AllowedMaterialGroups: any[];
  AllowedPhantomMaterialGroups: any[];
  ChamberState: number;
  TimeframeInDaysToStoreProduction: number;
  LocationSignature: string;
  AlleyNumber: number;
  AllowedCarrierTypes: any;
  HeightId: any;
  IsExchangeByBatchAllowed: boolean;
  OnTheFlyShipment: boolean;
  ReservedMaterialId: any;
  ReorderPoint: number;
  RefStorageBay: any;
}

interface GetWorkCenterSDAStatusResultItem {
  SecondaryUnitIds: number[];
  Pallets: Pallet[];
  SDAType: number;
  IsDeliveryBlockedInSDA: boolean;
  WorkCenterCode: string | null;
  SDAStatus: number;
  SDAOutTaskUnitId: number;
  StorageUnit: StorageUnit;
  SDADirection: number;
}

interface GetWorkCenterSDAStatusResult {
  GetWorkCenterSDAStatusResult: GetWorkCenterSDAStatusResultItem[];
}



//#endregion

export class KTEWorker {
  worker: Worker;
  methods: number[] = []
  onMessageCallback: (event: MessageEvent) => void = () => { };

  constructor() {
    this.worker = new Worker(new URL("./workers/Worker.js", import.meta.url), { type: "module" });

    this.worker.onmessage = (event) => {

      this.onMessageCallback?.(event);
    };

  }

  //#region Funtions
  // 10.10.55.140
  async GetWorkCenterStatus(secondaryUnitIds: number[], timeOut: number): Promise<ApiResponse<GetWorkCenterStatusResult>> {
    let result = <ApiResponse<GetWorkCenterStatusResult>>{}
    let loading = false
    let params = {
      "secondaryUnitIds": secondaryUnitIds
    }
    // result = await axios.post("http://10.10.55.140/Secondary/GetWorkcenterStatus", params)
    loading = true

    // axios.get('/foo/bar', {
    //   signal: controller.signal
    // }).then(function (response) {
    //   //...
    // });
    // cancel the request

    this.worker.postMessage({ action: 'testMessage', url : "url" });

    // let response = await axios.post("http://10.90.24.69/Secondary/GetWorkcenterStatus", params,);

    // , {
    //   signal: AbortSignal.timeout(timeOut)
    //   signal: controller.signal
    // }

    // result.data = response.data;
    // result.isSuccess = response.status == 200;
    // result.status = response.status;
    // result.statusText = response.statusText;
    return result;
  }
  // 10.10.55.140
  async GetWorkCenterSDAStatus(secondaryUnitIds: number[], timeOut: number): Promise<ApiResponse<GetWorkCenterSDAStatusResult>> {
    let result = <ApiResponse<GetWorkCenterSDAStatusResult>>{}
    let loading = false
    let params = {
      "secondaryUnitIdsList": [
        3672,
        3673,
        3689
      ],
      "isForEmptyPallet": false
    }
    loading = true
    // cancel the request
    this.worker.postMessage({ action: 'testMessage', url : "url" });

    // let response = await axios.post("http://10.90.24.69/Secondary/GetWorkCenterSDAStatus", params);
    // , {
    //     signal: AbortSignal.timeout(timeOut)
    //   }
    // result.data = response.data;
    // result.isSuccess = response.status == 200;
    // result.status = response.status;
    // result.statusText = response.statusText;
    return result;
  }

  async Login(username: string, password: string): Promise<ApiResponse<{ accessToken: string, refreshToken: string }>> {
    let result = <ApiResponse<{ accessToken: string, refreshToken: string }>>{}
    let loading = false
    let params = {
      "username": username,
      "password": password
    }
    // result = await axios.post("http://10.10.55.140/Secondary/GetWorkcenterStatus", params)
    loading = true
    let response = await axios.post("http://10.90.24.52/login", params);
    console.log("response : ", response.data);
    result.data = response.data;
    result.isSuccess = response.status == 200;
    result.status = response.status;
    result.statusText = response.statusText;
    return result;
  }

  async Refresh(refreshToken: string): Promise<ApiResponse<{ accessToken: string }>> {
    let result = <ApiResponse<{ accessToken: string }>>{}
    let loading = false
    let params = {
      "refreshToken": refreshToken,
    }
    // result = await axios.post("http://10.10.55.140/Secondary/GetWorkcenterStatus", params)
    loading = true
    let response = await axios.post("http://10.90.24.52/refresh", params);
    console.log("response : ", response.data);
    result.data = response.data;
    result.isSuccess = response.status == 200;
    result.status = response.status;
    result.statusText = response.statusText;
    return result;
  }

  async Logout(): Promise<ApiResponse<{}>> {
    let result = <ApiResponse<{}>>{}
    let loading = false
    // result = await axios.post("http://10.10.55.140/Secondary/GetWorkcenterStatus", params)
    loading = true
    let response = await axios.post("http://10.90.24.52:3000/logout");
    console.log("response : ", response.data);
    result.data = response.data; // will be null here
    result.isSuccess = response.status == 200;
    result.status = response.status;
    result.statusText = response.statusText;
    return result;
  }

  async Machines(machineIds: number[]): Promise<ApiResponse<{}>> {
    let result = <ApiResponse<{}>>{}
    let loading = false
    let params = {
      "machineIds": machineIds,
    }
    // result = await axios.post("http://10.10.55.140/Secondary/GetWorkcenterStatus", params)
    loading = true
    let response = await axios.post("http://10.90.24.52:3000/machines", params);
    console.log("response : ", response.data);
    result.data = response.data;
    result.isSuccess = response.status == 200;
    result.status = response.status;
    result.statusText = response.statusText;
    return result;
  }

  async Me(): Promise<ApiResponse<Profile>> {
    let result = <ApiResponse<Profile>>{}
    let loading = false

    loading = true
    let response = await axios.post("http://10.90.24.52:3000/me");
    console.log("response : ", response.data);
    result.data = response.data;
    result.isSuccess = response.status == 200;
    result.status = response.status;
    result.statusText = response.statusText;
    return result;
  }

  //#endregion

  // Allow the app to register a callback
  onMessage(callback: (event: MessageEvent) => void) {
    this.onMessageCallback = callback;
  }

  // Example method to post data to the worker
  postMessage(message: any) {
    this.worker.postMessage(message);
  }

  // Optional cleanup
  terminate() {
    this.worker.terminate();
  }

}





