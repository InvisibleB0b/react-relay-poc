/**
 * @generated SignedSource<<44c77de50f74388c1d1bb2355992678b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type DriversFragment$fragmentType: FragmentType;
export type DriversFragment$ref = DriversFragment$fragmentType;
export type DriversFragment$data = {|
  +position: ?string,
  +number: ?string,
  +driver: ?{|
    +dateOfBirth: ?string,
    +nationality: ?string,
  |},
  +time: ?{|
    +time: string,
    +millis: string,
  |},
  +$fragmentType: DriversFragment$fragmentType,
|};
export type DriversFragment = DriversFragment$data;
export type DriversFragment$key = {
  +$data?: DriversFragment$data,
  +$fragmentSpreads: DriversFragment$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DriversFragment",
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
      "concreteType": "Driver",
      "kind": "LinkedField",
      "name": "driver",
      "plural": false,
      "selections": [
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Time",
      "kind": "LinkedField",
      "name": "time",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "time",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "millis",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Result",
  "abstractKey": null
};

(node/*: any*/).hash = "ebd24062c9570d3e1e4b5c190d000212";

module.exports = ((node/*: any*/)/*: Fragment<
  DriversFragment$fragmentType,
  DriversFragment$data,
>*/);
