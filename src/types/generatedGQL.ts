/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOptionsFactory
// ====================================================

export interface GetOptionsFactory_optionsFactories_actions {
  __typename: 'OptionsContractCreated' | 'AssetAdded' | 'AssetChanged' | 'AssetDeleted' | 'FactoryOwnershipTransferred'
  /**
   *  Equals to: <actionType>-<transactionHash>-<logIndex>
   */
  id: string
}

export interface GetOptionsFactory_optionsFactories {
  __typename: 'OptionsFactory'
  id: string
  optionsExchangeAddress: any
  owner: any
  actions: GetOptionsFactory_optionsFactories_actions[] | null
}

export interface GetOptionsFactory {
  optionsFactories: GetOptionsFactory_optionsFactories[]
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: optionsFactory
// ====================================================

export interface optionsFactory_optionsFactories_actions {
  __typename: 'OptionsContractCreated' | 'AssetAdded' | 'AssetChanged' | 'AssetDeleted' | 'FactoryOwnershipTransferred'
  /**
   *  Equals to: <actionType>-<transactionHash>-<logIndex>
   */
  id: string
}

export interface optionsFactory_optionsFactories {
  __typename: 'OptionsFactory'
  id: string
  optionsExchangeAddress: any
  owner: any
  actions: optionsFactory_optionsFactories_actions[] | null
}

export interface optionsFactory {
  optionsFactories: optionsFactory_optionsFactories[]
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
