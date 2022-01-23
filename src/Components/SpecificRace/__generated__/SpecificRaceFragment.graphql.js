/**
 * @generated SignedSource<<cb4021fa93479c0ba57779f7acdb3437>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type CircuitFragment$fragmentType = any;
type ResultsFragment$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type SpecificRaceFragment$fragmentType: FragmentType;
export type SpecificRaceFragment$ref = SpecificRaceFragment$fragmentType;
export type SpecificRaceFragment$data = {|
  +series: ?string,
  +season: ?string,
  +round: ?string,
  +raceName: ?string,
  +date: ?string,
  +url: ?string,
  +$fragmentSpreads: ResultsFragment$fragmentType & CircuitFragment$fragmentType,
  +$fragmentType: SpecificRaceFragment$fragmentType,
|};
export type SpecificRaceFragment = SpecificRaceFragment$data;
export type SpecificRaceFragment$key = {
  +$data?: SpecificRaceFragment$data,
  +$fragmentSpreads: SpecificRaceFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpecificRaceFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "series",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "season",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "round",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "raceName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "date",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ResultsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CircuitFragment"
    }
  ],
  "type": "Race",
  "abstractKey": null
};

(node/*: any*/).hash = "2c2f8ae4f7a7e9addd270e09b767a353";

module.exports = ((node/*: any*/)/*: Fragment<
  SpecificRaceFragment$fragmentType,
  SpecificRaceFragment$data,
>*/);
