/**
 * @generated SignedSource<<0348b0b62cb1c5da893797645ac81ba2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type ResultsFragment$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type SpecificRaceFragment$fragmentType: FragmentType;
export type SpecificRaceFragment$ref = SpecificRaceFragment$fragmentType;
export type SpecificRaceFragment$data = {|
  +series: string,
  +season: string,
  +round: string,
  +raceName: string,
  +date: string,
  +url: string,
  +$fragmentSpreads: ResultsFragment$fragmentType,
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
    }
  ],
  "type": "Race",
  "abstractKey": null
};

(node/*: any*/).hash = "250ca77af35e17766f2124d1e8ae6f7f";

module.exports = ((node/*: any*/)/*: Fragment<
  SpecificRaceFragment$fragmentType,
  SpecificRaceFragment$data,
>*/);
