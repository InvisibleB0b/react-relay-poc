/**
 * @generated SignedSource<<40d846824aed9277fc4f8112d1b89687>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type DriversFragment$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type ResultsFragment$fragmentType: FragmentType;
export type ResultsFragment$ref = ResultsFragment$fragmentType;
export type ResultsFragment$data = {|
  +results: $ReadOnlyArray<{|
    +position: string,
    +number: string,
    +grid: string,
    +laps: string,
    +status: string,
    +driver: ?{|
      +givenName: string,
      +familyName: string,
      +code: string,
    |},
    +$fragmentSpreads: DriversFragment$fragmentType,
  |}>,
  +$fragmentType: ResultsFragment$fragmentType,
|};
export type ResultsFragment = ResultsFragment$data;
export type ResultsFragment$key = {
  +$data?: ResultsFragment$data,
  +$fragmentSpreads: ResultsFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResultsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Result",
      "kind": "LinkedField",
      "name": "results",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "position",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "number",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "grid",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "laps",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Driver",
          "kind": "LinkedField",
          "name": "driver",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "givenName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "familyName",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "code",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "DriversFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Race",
  "abstractKey": null
};

(node/*: any*/).hash = "b5550946368e24918e1743bdb23c2cbe";

module.exports = ((node/*: any*/)/*: Fragment<
  ResultsFragment$fragmentType,
  ResultsFragment$data,
>*/);
