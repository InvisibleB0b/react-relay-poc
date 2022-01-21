/**
 * @generated SignedSource<<264560e81aa62ae610fe921017edd5c2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type DriversResultsFragment$fragmentType: FragmentType;
export type DriversResultsFragment$ref = DriversResultsFragment$fragmentType;
export type DriversResultsFragment$data = {|
  +number: string,
  +position: string,
  +driver: ?{|
    +givenName: string,
    +familyName: string,
    +dateOfBirth: string,
    +nationality: string,
  |},
  +$fragmentType: DriversResultsFragment$fragmentType,
|};
export type DriversResultsFragment = DriversResultsFragment$data;
export type DriversResultsFragment$key = {
  +$data?: DriversResultsFragment$data,
  +$fragmentSpreads: DriversResultsFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DriversResultsFragment",
  "selections": [
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
      "name": "position",
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
          "name": "dateOfBirth",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "nationality",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Result",
  "abstractKey": null
};

(node/*: any*/).hash = "4d5b8c2a9a3386a6227daba88857b2ac";

module.exports = ((node/*: any*/)/*: Fragment<
  DriversResultsFragment$fragmentType,
  DriversResultsFragment$data,
>*/);
